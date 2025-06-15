const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ffe4e1'];
  for (let i = 0; i < 100; i++) {
    fireworks.push({
      x, y,
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 4 - 2,
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function animate() {
  ctx.fillStyle = "rgba(255,240,245,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.01;
    if (p.alpha <= 0) {
      fireworks.splice(i, 1);
    } else {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

setInterval(createFirework, 800);
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
