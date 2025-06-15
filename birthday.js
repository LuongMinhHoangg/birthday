// Thời gian sinh nhật
const birthDate = new Date("1992-06-18T00:00:00");

function updateTime() {
  const now = new Date();
  const diff = now - birthDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}


setInterval(updateTime, 1000);
updateTime();

// Popup mở + hiệu ứng đánh máy
function showPopup() {
  const popup = document.getElementById("wishPopup");
  const messageEl = document.getElementById("typing-message");
  const message = `오빠야,\n\n생일 정말 축하해요 – 나에게 가장 특별한 사람이니까요.\n
어디서부터 시작해야 할지 모르겠어요.\n
오늘은 오빠와 내가 만난 지 벌써 400일이 되는 날이기도 하네요. 참 신기하죠?\n\n
오빠가 이 세상에 존재해줘서 고마워요.\n
지금까지 꿋꿋하게 살아줘서 고마워요.\n
그 덕분에 내가 오빠 같은 사람을 만날 수 있었어요.\n\n
내가 감정이 자주 변하고, 눈물도 많고,\n
오빠가 나를 사랑하지 않는다고 오해할 때도 있었고,\n
질투도 많고, 항상 오빠가 내 옆에 있어줬으면 좋겠다고 생각했어요.\n
그런 나를 이해하고 견뎌줘서 정말 고마워요.\n\n
나는 자주 오빠가 나를 사랑하지도, 신경 쓰지도 않는다고 생각했지만\n
사실 오빠는 매일 많은 스트레스와 일에 시달리고 있었죠.\n
나는 그런 걸 잘 몰라줬던 것 같아요. 미안해요.\n\n
오빠가 다른 사람들이랑은 잘 얘기하면서\n
나한테는 조용하고 말이 없을 때,\n
속상하고 질투도 많이 났어요.\n\n
앞으로 우리 앞에 어떤 어려움이 있을지 모르겠지만,\n
그 모든 걸 지나고 나서도\n
우리가 여전히 함께할 수 있기를 바래요.\n
나는 오빠와 더 많이 이야기하고 싶어서\n
한국어 열심히 공부할게요.\n\n
나는 오빠가 사랑했던 첫 번째 사람이 아니지만,\n
오빠는 내가 사랑할 마지막 사람이에요.\n\n
내가 감정을 잘 표현하는 편은 아니지만,\n
이번 생일에는 오빠가 늘 건강하고,\n
행복하고, 웃음이 가득하길 바랄게요.\n
그리고 언제나 행운이 함께하길 바라요.\n\n
이주연, 나 진심으로 많이 사랑해요.\n
내 사랑, 생일 진심으로 축하해요. 🎂💖`;

  popup.style.display = "flex";
  messageEl.innerHTML = "";

  let i = 0;
  function typeWriter() {
    if (i < message.length) {
      const char = message[i] === "\n" ? "<br>" : message[i];
      messageEl.innerHTML += char;
      i++;
      setTimeout(typeWriter, 30); // tốc độ đánh máy
    }
  }

  typeWriter();
}

// Đóng popup
function closePopup() {
  document.getElementById("wishPopup").style.display = "none";
}

// Slideshow tự động
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlide, 3000);

const cakeBtn = document.querySelector('.cake-btn');
if (cakeBtn) {
  cakeBtn.addEventListener('click', () => {
    window.location.href = "cake.html";
  });
}
// Tự động phát nhạc sau tương tác đầu tiên (do trình duyệt chặn autoplay)
const bgMusic = document.getElementById("bgMusic");

function startMusicOnce() {
  bgMusic.play().catch(() => {
    console.log("Tự động phát bị chặn, sẽ thử lại khi có tương tác.");
  });
  document.removeEventListener("click", startMusicOnce);
  document.removeEventListener("touchstart", startMusicOnce);
}

document.addEventListener("click", startMusicOnce);
document.addEventListener("touchstart", startMusicOnce);
