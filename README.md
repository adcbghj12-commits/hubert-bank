# Hubert Bank Telegram Mini App

Đây là bản Mini App ví **điểm ảo** dành cho Telegram, không xử lý tiền thật.

## Chạy thử trên máy tính

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Deploy lên Vercel

1. Tạo tài khoản GitHub nếu chưa có.
2. Tạo repository mới và upload toàn bộ thư mục này.
3. Vào Vercel -> Add New Project -> Import repository.
4. Framework sẽ tự nhận là Next.js.
5. Bấm Deploy.
6. Sau khi xong, bạn sẽ có URL dạng:
   `https://hubert-bank-xxxx.vercel.app`
7. Vào BotFather:
   `/editapp`
   -> chọn `@HubertBank_Bot`
   -> chọn `hubertbank`
   -> Edit Web App URL
   -> dán URL Vercel.

## Telegram

Ứng dụng đọc thông tin người dùng từ:
`window.Telegram.WebApp.initDataUnsafe.user`

Bản này lưu số dư và lịch sử bằng localStorage để bạn có thể chạy ngay mà chưa cần database.

## Khi muốn dùng nhiều người thật

Cần thêm backend + database và xác thực `initData` của Telegram ở server.
Không nên tin dữ liệu `initDataUnsafe` cho nghiệp vụ quan trọng.

## Lưu ý

Hubert Bank trong source này là ví điểm ảo/demo, không phải ngân hàng và không xử lý tiền thật.
