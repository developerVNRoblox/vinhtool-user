(function () {
    const styles = `
#vinh-toggle-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: #00bcd4 url('https://ibb.co/bgfjwmP3') center/cover no-repeat;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  cursor: pointer;
  z-index: 99999;
}
#vinh-gui {
  font-family: Arial, sans-serif;
  position: fixed;
  top: 80px;
  left: 30px;
  z-index: 99998;
  background: #ffffff;
  border: 2px solid #00bcd4;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.2);
  padding: 15px;
  width: 300px;
  display: none;
}
#vinh-gui h1 {
  font-size: 18px;
  color: #007acc;
  margin: 0 0 10px;
  text-align: center;
}
#vinh-gui input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
#vinh-gui button {
  width: 100%;
  padding: 10px;
  background: #007acc;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
#vinh-gui button:hover {
  background: #005f99;
}
#vinh-gui-message {
  text-align: center;
  font-size: 13px;
  color: #333;
  margin-top: 10px;
}
    `;
    const styleTag = document.createElement("style");
    styleTag.innerText = styles;
    document.head.appendChild(styleTag);

    const icon = document.createElement("div");
    icon.id = "vinh-toggle-btn";
    document.body.appendChild(icon);

    const html = `
<div id="vinh-gui">
  <h1>Tiện ích Trần Quang Vinh</h1>
  <input type="text" id="vinh-token" placeholder="Nhập token của bạn...">
  <button id="vinh-check">Kiểm Tra</button>
  <div id="vinh-gui-message">💬 Vui lòng dán token để bắt đầu.</div>
</div>
    `;
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);

    icon.addEventListener("click", () => {
        const box = document.getElementById("vinh-gui");
        box.style.display = box.style.display === "none" ? "block" : "none";
    });

    document.getElementById("vinh-check").addEventListener("click", () => {
        const token = document.getElementById("vinh-token").value.trim();
        const msg = document.getElementById("vinh-gui-message");
        if (!token) {
            msg.innerText = "❌ Token không được để trống!";
            msg.style.color = "red";
        } else {
            msg.innerText = "✅ Token hợp lệ! (Fake thôi 😎)";
            msg.style.color = "green";
        }
    });
})();
