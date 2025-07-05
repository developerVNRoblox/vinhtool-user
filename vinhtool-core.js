(function () {
  'use strict';

  const gui = document.createElement('div');
  gui.id = "vinh-tool";
  gui.innerHTML = `
    <div style="
      position: fixed;
      top: 60px;
      left: 60px;
      background: #f9f9f9;
      border: 2px solid #007bff;
      border-radius: 8px;
      padding: 15px;
      z-index: 999999;
      width: 300px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      font-family: Arial, sans-serif;
    ">
      <h2 style="color:#007bff; margin: 0 0 10px 0;">🔥 Trần Quang Vinh Tool</h2>
      
      <label>Nhập token:</label>
      <input id="vinh-token" type="text" placeholder="Dán token..." style="width: 100%; margin: 5px 0; padding: 5px; border-radius: 4px; border: 1px solid #ccc;">
      <button id="vinh-check" style="margin-bottom:10px; background-color:#007bff;color:white;padding:6px;border:none;border-radius:4px;cursor:pointer;width:100%;">Kiểm Tra Token</button>

      <hr>

      <button id="vinh-get4h" style="background-color:#28a745;color:white;padding:6px;border:none;border-radius:4px;cursor:pointer;width:100%;">Nhận máy UGPhone 4H</button>
      
      <button id="vinh-manage" style="margin-top:8px; background-color:#ffc107;color:#212529;padding:6px;border:none;border-radius:4px;cursor:pointer;width:100%;">Quản lý tài khoản</button>

      <button id="vinh-logout" style="margin-top:8px;background-color:#dc3545;color:white;padding:6px;border:none;border-radius:4px;cursor:pointer;width:100%;">Đăng xuất & Xóa token</button>

      <p style="font-size:12px; text-align:center; margin-top:10px; color:#555;">© Trần Quang Vinh - v1.0.0</p>
    </div>
  `;
  document.body.appendChild(gui);

  // ====== TÍCH HỢP CHỨC NĂNG (GIẢ LẬP) ======

  document.getElementById('vinh-check').onclick = () => {
    const token = document.getElementById('vinh-token').value;
    if (!token) return alert("Nhập token vào đi ba!");
    alert("✅ Token hợp lệ (giả lập)\n👉 Tính năng thật đang được code...");
  };

  document.getElementById('vinh-get4h').onclick = () => {
    alert("🎉 Đã nhận máy ảo 4H (giả lập)!\n👉 Sau sẽ tích hợp nhận máy thật.");
  };

  document.getElementById('vinh-manage').onclick = () => {
    alert("🛠 Tính năng quản lý tài khoản đang xây dựng...");
  };

  document.getElementById('vinh-logout').onclick = () => {
    document.getElementById('vinh-token').value = "";
    alert("🚪 Đã xóa token & đăng xuất (giả lập).");
  };
})();
