const BOT_TOKEN = '8127474115:AAGnZbsZYFthaMSVDeq57YIjdVY0svzMQQk'
const CHAT_ID = '-1003814704484'
const WORKER_URL = 'https://naq-send-telegram.naq219.workers.dev'

/**
 * Gửi thông báo đăng ký mới qua Telegram Bot
 * Gọi qua Cloudflare Worker proxy (tránh CORS)
 * Fire-and-forget: nếu lỗi thì log ra console, không ảnh hưởng flow đăng ký
 */
export async function sendTelegramNotification(data: {
    id: string | number
    hovaten: string
    sodienthoai: string
    namsinh: string
    gioitinh: string
    diachithuongtru: string
    diachitamtru: string
    nguoigioithieu: string
    ghichu: string
}) {
    const message = `📋 *ĐĂNG KÝ QUY Y MỚI* (ID: ${data.id})

👤 *${data.hovaten}*
SĐT: ${data.sodienthoai}
Năm sinh: ${data.namsinh} | ${data.gioitinh}
Thường trú: ${data.diachithuongtru}
Hiện tại: ${data.diachitamtru}
Giới thiệu: ${data.nguoigioithieu || '—'}
Ghi chú: ${data.ghichu || '—'}`

    try {
        const params = new URLSearchParams({
            message: message,
            chat_id: CHAT_ID,
            bot_token: BOT_TOKEN
        })
        const res = await fetch(`${WORKER_URL}?${params.toString()}`)
        const result = await res.json()
        if (!result.success) {
            console.warn('Telegram notification failed:', result)
        }
        return result
    } catch (e) {
        console.warn('Telegram notification error (không ảnh hưởng đăng ký):', e)
        return null
    }
}
