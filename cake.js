const flame = document.getElementById("flame");
const music = document.getElementById("bg-music");

// Khởi động nhận diện giọng nói
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "vi-VN"; // Hỗ trợ tiếng Việt nếu bạn nói "phù"
recognition.continuous = false;

recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript.toLowerCase();
  console.log("Bạn nói: ", transcript);
  if (transcript.includes("phù") || transcript.includes("thổi") || transcript.includes("thoi")) {
    blowOutCandle();
  }
};

recognition.start();

function blowOutCandle() {
  if (flame) flame.style.display = "none";
  if (music) music.play();
  startFireworks();
}

// ---------- PHÁO HOA ----------
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let fireworkInterval;

function createFirework(x, y) {
  const colors = ["#ff3", "#f06", "#0ff", "#f90", "#0f0", "#00f"];
  for (let i = 0; i < 30; i++) {
    fireworks.push({
      x: x,
      y: y,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      dx: Math.random() * 4 - 2,
      dy: Math.random() * 4 - 2,
      life: 100
    });
  }
}

function drawFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((f, index) => {
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
    ctx.fillStyle = f.color;
    ctx.fill();
    f.x += f.dx;
    f.y += f.dy;
    f.life--;
    if (f.life <= 0) {
      fireworks.splice(index, 1);
    }
  });
  requestAnimationFrame(drawFireworks);
}

function startFireworks() {
  fireworkInterval = setInterval(() => {
    createFirework(
      Math.random() * canvas.width,
      Math.random() * canvas.height * 0.7
    );
  }, 400);

  setTimeout(() => clearInterval(fireworkInterval), 20000);
  drawFireworks();
}
