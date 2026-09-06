import './styles.css';

export const metadata = {
  title: 'Hubert Bank',
  description: 'Ví điểm ảo trên Telegram',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
