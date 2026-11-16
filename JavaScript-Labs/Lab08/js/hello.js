// Lab 08 - Exercise 8.3 | Văn Ngọc Hân
let count = 0;
document.getElementById("run").addEventListener("click", () => {
  count += 1;
  document.getElementById("result").textContent = "hello.js đã chạy " + count + " lần. Xin chào từ tệp JavaScript bên ngoài!";
});
