// Migration: thêm status vào register + tạo phapdanh_tbl
// Chạy: node src/scripts/migrate-phapdanh.mjs

import { createClient } from '@libsql/client'

const client = createClient({
    url: 'libsql://dangkyquyy-naq5219.aws-ap-northeast-1.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzE5MjI4NzIsImlkIjoiNmMxZGFiNTItYTI5MC00YWYxLWE1ZDUtOTVhZTNjNzY4YmFjIiwicmlkIjoiYzMzYTIwYjktMzRiNi00ZTAxLWIzZGEtODAxZGY1ZGY4YTZlIn0.WaY4JeBatMxZmXmihp6IfQpbBeM4NmKhpU9a-jOX-1Xd2-HwkX2mgu1Ljkep7pIvSDocwbLHdmoWDkGElli2BA'
})

async function migrate() {
    console.log('🔌 Connecting to Turso...')
    const test = await client.execute('SELECT 1 as ok')
    console.log('✅ Connected:', test.rows[0])

    // 1. Thêm cột status vào register (default 'new')
    console.log('📦 Adding status column to register...')
    try {
        await client.execute(`ALTER TABLE register ADD COLUMN status TEXT DEFAULT 'new'`)
        console.log('✅ Added status column')
    } catch (e) {
        if (e.message?.includes('duplicate column')) {
            console.log('⚠️  status column already exists, skipping')
        } else {
            throw e
        }
    }

    // 2. Cập nhật tất cả row hiện tại thành 'new' (nếu NULL)
    console.log('📦 Setting existing rows status to new...')
    await client.execute(`UPDATE register SET status = 'new' WHERE status IS NULL`)
    console.log('✅ Updated existing rows')

    // 3. Tạo table phapdanh_tbl
    console.log('📦 Creating phapdanh_tbl...')
    await client.execute(`
    CREATE TABLE IF NOT EXISTS phapdanh_tbl (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      register_id INTEGER,
      dauthoigian TEXT,
      phapdanh TEXT DEFAULT '',
      hovaten TEXT,
      namsinh TEXT,
      gioitinh TEXT,
      sodienthoai TEXT,
      diachithuongtru TEXT,
      diachithuongtru_short TEXT,
      diachitamtru TEXT,
      tinhtamtru TEXT,
      dasinhhoatdaotrang TEXT,
      nguoigioithieu TEXT,
      ghichu TEXT,
      web_version TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)
    console.log('✅ phapdanh_tbl created!')

    // Verify
    const tables = await client.execute("SELECT name FROM sqlite_master WHERE type='table'")
    console.log('📋 Tables:', tables.rows.map(r => r.name))

    const info = await client.execute("PRAGMA table_info(register)")
    console.log('📋 register columns:')
    info.rows.forEach(r => console.log(`   - ${r.name} (${r.type}) default=${r.dflt_value}`))

    const info2 = await client.execute("PRAGMA table_info(phapdanh_tbl)")
    console.log('📋 phapdanh_tbl columns:')
    info2.rows.forEach(r => console.log(`   - ${r.name} (${r.type}) default=${r.dflt_value}`))

    console.log('\n🎉 Migration complete!')
}

migrate().catch(err => {
    console.error('❌ Error:', err)
    process.exit(1)
})
