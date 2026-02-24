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
