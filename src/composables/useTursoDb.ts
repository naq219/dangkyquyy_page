import { createClient } from '@libsql/client/web'

const client = createClient({
    url: 'libsql://dangkyquyy-naq5219.aws-ap-northeast-1.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzE5MjI4NzIsImlkIjoiNmMxZGFiNTItYTI5MC00YWYxLWE1ZDUtOTVhZTNjNzY4YmFjIiwicmlkIjoiYzMzYTIwYjktMzRiNi00ZTAxLWIzZGEtODAxZGY1ZGY4YTZlIn0.WaY4JeBatMxZmXmihp6IfQpbBeM4NmKhpU9a-jOX-1Xd2-HwkX2mgu1Ljkep7pIvSDocwbLHdmoWDkGElli2BA'
})

export interface RegistrationData {
    dauthoigian: string
    hovaten: string
    namsinh: string
    gioitinh: string
    sodienthoai: string
    diachithuongtru: string
    diachithuongtru_short: string
    diachitamtru: string
    tinhtamtru: string
    dasinhhoatdaotrang: string
    nguoigioithieu: string
    ghichu: string
    web_version: string
}

// Insert đăng ký vào Turso database, trả về row vừa insert
export async function insertRegistration(data: RegistrationData) {
    const result = await client.execute({
        sql: `INSERT INTO register (
      dauthoigian, hovaten, namsinh, gioitinh, sodienthoai,
      diachithuongtru, diachithuongtru_short, diachitamtru, tinhtamtru,
      dasinhhoatdaotrang, nguoigioithieu, ghichu, web_version
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
            data.dauthoigian,
            data.hovaten,
            data.namsinh,
            data.gioitinh,
            data.sodienthoai,
            data.diachithuongtru,
            data.diachithuongtru_short,
            data.diachitamtru,
            data.tinhtamtru,
            data.dasinhhoatdaotrang,
            data.nguoigioithieu,
            data.ghichu,
            data.web_version
        ]
    })

    // Query lại row vừa insert để trả về dữ liệu thật
    const insertedId = result.lastInsertRowid
    const row = await client.execute({
        sql: 'SELECT * FROM register WHERE id = ?',
        args: [insertedId as unknown as string]
    })

    return {
        insertResult: result,
        insertedRow: row.rows[0] || null,
        insertedId
    }
}

// Lấy đăng ký có status = 'new', sắp xếp mới nhất trước
export async function getAllRegistrations() {
    const result = await client.execute({
        sql: "SELECT * FROM register WHERE status = ? ORDER BY id ASC",
        args: ['new']
    })
    return result.rows
}

// Lấy tất cả đăng ký trong 60 ngày qua (mọi status)
export async function getAllRegistrations60Days() {
    const result = await client.execute(
        "SELECT * FROM register WHERE created_at >= datetime('now', '-60 days') ORDER BY id ASC"
    )
    return result.rows
}

// ====== Pháp danh ======
// Lấy danh sách phapdanh_tbl
export async function getPhapdanhList() {
    const result = await client.execute('SELECT * FROM phapdanh_tbl ORDER BY id DESC')
    return result.rows
}

// Cập nhật pháp danh cho 1 row
export async function updatePhapdanh(id: number, phapdanh: string) {
    await client.execute({
        sql: 'UPDATE phapdanh_tbl SET phapdanh = ? WHERE id = ?',
        args: [phapdanh, id as unknown as string]
    })
}

// Cập nhật pháp danh hàng loạt
export async function updatePhapdanhBatch(items: { id: number, phapdanh: string }[]) {
    for (const item of items) {
        await client.execute({
            sql: 'UPDATE phapdanh_tbl SET phapdanh = ? WHERE id = ?',
            args: [item.phapdanh, item.id as unknown as string]
        })
    }
}

// Cập nhật status cho nhiều rows (soft delete hoặc đánh dấu đã gửi)
export async function updateRegistrationStatus(ids: number[], status: 'deleted' | 'sended') {
    const placeholders = ids.map(() => '?').join(',')
    await client.execute({
        sql: `UPDATE register SET status = ? WHERE id IN (${placeholders})`,
        args: [status, ...ids.map(id => id as unknown as string)]
    })
}

// Gửi xin pháp danh: copy rows sang phapdanh_tbl + đổi status sang sended
export async function sendToPhapdanh(ids: number[]) {
    // Lấy data các rows được chọn
    const placeholders = ids.map(() => '?').join(',')
    const result = await client.execute({
        sql: `SELECT * FROM register WHERE id IN (${placeholders})`,
        args: ids.map(id => id as unknown as string)
    })

    // Insert từng row vào phapdanh_tbl
    for (const row of result.rows) {
        await client.execute({
            sql: `INSERT INTO phapdanh_tbl 
                (register_id, dauthoigian, hovaten, namsinh, gioitinh, sodienthoai, 
                 diachithuongtru, diachithuongtru_short, diachitamtru, tinhtamtru, 
                 dasinhhoatdaotrang, nguoigioithieu, ghichu, web_version) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [
                row.id as unknown as string,
                (row.dauthoigian || '') as string,
                (row.hovaten || '') as string,
                (row.namsinh || '') as string,
                (row.gioitinh || '') as string,
                (row.sodienthoai || '') as string,
                (row.diachithuongtru || '') as string,
                (row.diachithuongtru_short || '') as string,
                (row.diachitamtru || '') as string,
                (row.tinhtamtru || '') as string,
                (row.dasinhhoatdaotrang || '') as string,
                (row.nguoigioithieu || '') as string,
                (row.ghichu || '') as string,
                (row.web_version || '') as string
            ]
        })
    }

    // Đổi status sang sended
    await updateRegistrationStatus(ids, 'sended')
    return result.rows.length
}

// Kiểm tra kết nối Turso
export async function testConnection() {
    try {
        const result = await client.execute('SELECT 1')
        console.log('Turso connected OK', result)
        return true
    } catch (e) {
        console.error('Turso connection failed', e)
        return false
    }
}
