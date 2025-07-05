(function () {
  console.log('Trần Quang Vinh Tool đã khởi động!');

  const gui = document.createElement('div');
  gui.innerHTML = `
    <div style="position:fixed;top:50px;left:50px;background:#fff;padding:10px;border:2px solid #007bff;z-index:9999">
      <h3 style="margin:0 0 10px 0">🔥 Trần Quang Vinh Tool 🔥</h3>
      <button id="vinhStartBtn">Bắt đầu nhận máy 4H</button>
    </div>
  `;
  document.body.appendChild(gui);

  document.getElementById('vinhStartBtn').onclick = () => {
    alert("Đang gọi API nhận máy ảo...");
    // Chỗ này sau gắn API hoặc hàm auto nhận máy
  };
})();
