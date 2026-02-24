// Script tạo table register trong Turso database
// Chạy: node src/scripts/setup-turso.mjs

import { createClient } from '@libsql/client'

const client = createClient({
    url: 'libsql://dangkyquyy-naq5219.aws-ap-northeast-1.turso.io',
    authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzE5MjI4NzIsImlkIjoiNmMxZGFiNTItYTI5MC00YWYxLWE1ZDUtOTVhZTNjNzY4YmFjIiwicmlkIjoiYzMzYTIwYjktMzRiNi00ZTAxLWIzZGEtODAxZGY1ZGY4YTZlIn0.WaY4JeBatMxZmXmihp6IfQpbBeM4NmKhpU9a-jOX-1Xd2-HwkX2mgu1Ljkep7pIvSDocwbLHdmoWDkGElli2BA'
})

async function setup() {
    console.log('🔌 Connecting to Turso...')

    // Test connection
    const test = await client.execute('SELECT 1 as ok')
    console.log('✅ Connected:', test.rows[0])

    // Create table
    console.log('📦 Creating table register...')
    await client.execute(`
    CREATE TABLE IF NOT EXISTS register (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dauthoigian TEXT,
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
    console.log('✅ Table register created!')

    // Verify
    const tables = await client.execute("SELECT name FROM sqlite_master WHERE type='table'")
    console.log('📋 Tables:', tables.rows.map(r => r.name))

    const info = await client.execute("PRAGMA table_info(register)")
    console.log('📋 Columns:')
    info.rows.forEach(r => console.log(`   - ${r.name} (${r.type})`))

    console.log('\n🎉 Setup complete!')
}

setup().catch(err => {
    console.error('❌ Error:', err)
    process.exit(1)
})
