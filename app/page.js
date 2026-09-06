'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(12500);

  useEffect(() => {
    try {
      const tg = window.Telegram?.WebApp;
      tg?.ready();
      tg?.expand();
      setUser(tg?.initDataUnsafe?.user || null);
    } catch {}
  }, []);

  const name =
    user?.first_name ||
    user?.username ||
    'Khách Telegram';

  return (
    <main className="container">
      <script src="https://telegram.org/js/telegram-web-app.js"></script>

      <div className="header">
        <div className="logo">H</div>
        <div>
          <h2>Hubert Bank</h2>
          <p>Ví điểm ảo trên Telegram</p>
        </div>
      </div>

      <div className="welcome">
        <p>Xin chào</p>
        <h1>{name}</h1>
      </div>

      <div className="balance-card">
        <p>Tổng số dư điểm</p>
        <h3>{balance.toLocaleString('vi-VN')}</h3>
        <span>Hubert Points • Không phải tiền thật</span>
      </div>

      <div className="buttons">
        <button onClick={() => alert('Chức năng chuyển điểm sẽ được thêm tiếp')}>
          ↗ Chuyển điểm
        </button>

        <button
          onClick={() => setBalance(balance + 200)}
        >
          🎁 Nhận +200
        </button>
      </div>

      <div className="panel">
        <h3>Giao dịch gần đây</h3>

        <div className="transaction">
          <div>
            <b>Điểm thưởng chào mừng</b>
            <p>Hệ thống</p>
          </div>
          <strong className="plus">+5.000</strong>
        </div>

        <div className="transaction">
          <div>
            <b>Chuyển điểm</b>
            <p>@demo_friend</p>
          </div>
          <strong className="minus">-1.200</strong>
        </div>

        <div className="transaction">
          <div>
            <b>Nhiệm vụ hằng ngày</b>
            <p>Daily reward</p>
          </div>
          <strong className="plus">+300</strong>
        </div>
      </div>

      <div className="warning">
        Hubert Bank là ví điểm ảo phục vụ demo/giải trí,
        không phải ngân hàng thật và không xử lý tiền thật.
      </div>
    </main>
  );
}
