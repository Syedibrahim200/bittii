const screens = [...document.querySelectorAll(".screen")];
const particles = document.getElementById("particles");

let score = 0;
let quizIndex = 0;
let futureIndex = 0;
let heartGameDone = false;
let balloonGameDone = false;
let musicOn = false;

const quizQuestions = [
  {
    q: "What do I call you the MOST likee sawwas kade zaptarin? 👀",
    options: ["Maryamiiiii", "Dearrryyy", "Jaane Jahaan", "Myy Wifyyy"],
    answer: 1,
    good: "CORRECTTT 😭❤️ Dearrryyy wins again. You knew that way too quickly.",
    bad: "HOW DARE YOU 😭 After all those Dearrryyy messages??"
  },
  {
    q: "What do you say when Ibrahim asks you forr ridingg fastt 👀👀😂",
    options: ["Sure jaana❤️", "Nakhaaaaaa😠😠", "Of coursee", "Let me think haan..."],
    answer: 1,
    good: "NAKHAAAAA😠😠 😂 I can literally hear you saying it even in text😭😭.",
    bad: "Wrong. You have forgotten your own legendary vocabulary 😭"
  },
  {
    q: "What happened when Ibrahim was about to propose youu? 💌",
    options: [
      "He proposed first",
      "Maryam proposed one minute before himm❤️👀",
      "Nobody proposed",
      "They both forgot"
    ],
    answer: 1,
    good: "YESSS 😭❤️ You stole his moment by ONE MINUTE😭😭😭😭.",
    bad: "Girl... this is literally OUR lore 😭"
  },
  {
    q: "What happens after our huge fights?👀👀😤❤️",
    options: [
      "We disappear forever",
      "We block each other",
      "We solve it before sleeping and come back even closer and love and understand eachother moree❤️😊",
      "We pretend nothing happened"
    ],
    answer: 2,
    good: "Exactly. We can fight like crazy and still choose each other again😊.",
    bad: "NOOO 😭 You know we don't sleep while things are still wrong."
  },
  {
    q: "What is ibrahimii's riding limit?👀👀😤❤️",
    options: [
      "100",
      "60 to 80",
      "80",
      "200"
    ],
    answer: 1,
    good: "Yessss😭 butt makaa limit badaw kaas plzzzzzz😭😭😭..but ek ek time wata me speed😅",
    bad: "Tukaa dakhadta mai etle speed martalo..😅😅"
  },
   {
    q: "What reply from ibrahimii you dont likee thee mosttest?😂😅",
    options: [
      "only:hm ok",
      "okkkeeeee",
      "aai aai madammm",
      "ass youu saayyyyy"
    ],
    answer: 0,
    good: "😂😂tishii reply dela mag zapni padallo kew ataw ashee😅😅",
    bad: "you dont likee me repling like that😅?"
  },
  {
    q: "mojiii maryamii chi hejet favoritee kate 👀👀",
    options: [
      "BMW anin ice cream anin cats anin Ibrahim😁😁",
      "Orange + pizza + dogs",
      "Blue + salad + birds",
      "Green + noodles + horses"
    ],
    answer: 0,
    good: "BMW anin ice cream anin cats anin Ibrahim😁😁",
    bad: "Who is this impostor Maryam? 😂"
  }
];

const futureQuestions = [
  {
    q: "After a fight, who will say sorry mosttt ? 😭",
    options: ["Ibrahimiiii", "Maryamiiiiil", "Both at the same time", "Nobody, impossible 😂"],
    good: "I kneww ittt.😭😭😭😭",
  },
  {
    q: "Who writes the loveelyy notes the mosttt? 🎁",
    options: ["Ibrahim", "Maryam", "Both secretly", "The answer is classified 🔐"],
    good: "Correct. The secret-surprise department is now officially open.",
  },
  {
    q: "What should we never stop doing? ✨",
    options: ["Laughing together", "Talking honestly", "Fixing our fights", "All of them ❤️"],
    good: "ALL OF THEM. That's the only acceptable answer❤️❤️.",
  },
  {
    q: "One day, what should we have an unreasonable amount of? 🐱",
    options: ["loveeee for each other", "Pillow fights😂😭😭😂", "peace and honesty in our lovee❤️❤️", "All of the above❤️"],
    good: "Honestly... all of the above iss perfecttt and perfect. 😂❤️",
  }
];

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => {
    showScreen(btn.dataset.next);
    if (btn.dataset.next === "quiz") renderQuiz();
  });
});

// Floating background particles
function makeParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  p.textContent = ["♡", "✦", "·", "❤"][Math.floor(Math.random() * 4)];
  p.style.left = Math.random() * 100 + "vw";
  p.style.fontSize = (10 + Math.random() * 20) + "px";
  p.style.animationDuration = (7 + Math.random() * 9) + "s";
  particles.appendChild(p);
  setTimeout(() => p.remove(), 17000);
}
setInterval(makeParticle, 550);
for (let i = 0; i < 18; i++) setTimeout(makeParticle, i * 150);

function typeText() {
  const text = "Someone has been preparing something for you from manyy dayss,Myy Maryamiiiii..😁.";
  const el = document.getElementById("typeLine");
  let i = 0;
  const timer = setInterval(() => {
    el.textContent = text.slice(0, i++);
    if (i > text.length) clearInterval(timer);
  }, 38);
}
typeText();

// Quiz
function renderQuiz() {
  const box = document.getElementById("quizBox");

  if (quizIndex >= quizQuestions.length) {
    box.innerHTML = `
      <div style="text-align:center">
        <div style="font-size:55px">🎉</div>
        <h2>Quiz survived.</h2>
        <p style="color:#cdbfd0;line-height:1.7;margin-top:12px">
          Your final score is <b>${score}/${quizQuestions.length}</b>.
          <br><br>
          Whether you got everything right or not...
          I still loveee you. Unfortunately. 😂❤️
        </p>
        <button class="primary-btn next-question" id="quizDone">Continue to the games 🎮</button>
      </div>
    `;
    document.getElementById("quizDone").onclick = () => showScreen("games");
    return;
  }

  const item = quizQuestions[quizIndex];

  box.innerHTML = `
    <div class="quiz-number">QUESTION ${quizIndex + 1} / ${quizQuestions.length}</div>
    <h2 class="quiz-question">${item.q}</h2>
    <div id="options"></div>
    <div id="feedback"></div>
  `;

  const options = document.getElementById("options");

  item.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = option;
    btn.onclick = () => answerQuiz(index, btn);
    options.appendChild(btn);
  });
}

function answerQuiz(selected, button) {
  const item = quizQuestions[quizIndex];
  const all = document.querySelectorAll(".option");
  all.forEach(b => b.disabled = true);

  const feedback = document.getElementById("feedback");

  if (selected === item.answer) {
    button.classList.add("correct");
    score++;
    document.getElementById("score").textContent = score;
    feedback.innerHTML = `<div class="feedback">💖 ${item.good}</div>`;
    heartBurst(6);
  } else {
    button.classList.add("wrong");
    all[item.answer].classList.add("correct");
    feedback.innerHTML = `<div class="feedback">😤 ${item.bad}</div>`;
    shakeScreen();
  }

  feedback.innerHTML += `<button class="primary-btn next-question" id="nextQ">
    ${quizIndex === quizQuestions.length - 1 ? "Finish quiz ❤️" : "Next question →"}
  </button>`;

  document.getElementById("nextQ").onclick = () => {
    quizIndex++;
    renderQuiz();
  };
}

// Heart game
const heartArena = document.getElementById("heartArena");
const basket = document.getElementById("basket");
const heartScoreEl = document.getElementById("heartScore");
const heartMessage = document.getElementById("heartMessage");
let heartScore = 0;
let heartRunning = false;
let heartTimer;

function moveBasket(clientX) {
  const rect = heartArena.getBoundingClientRect();
  let x = clientX - rect.left;
  x = Math.max(30, Math.min(rect.width - 30, x));
  basket.style.left = x + "px";
}

heartArena.addEventListener("pointermove", e => {
  if (heartRunning) moveBasket(e.clientX);
});

heartArena.addEventListener("pointerdown", e => {
  if (heartRunning) moveBasket(e.clientX);
});

document.getElementById("startHeartGame").onclick = () => {
  if (heartRunning) return;
  heartScore = 0;
  heartScoreEl.textContent = "0";
  heartMessage.textContent = "";
  heartRunning = true;

  let timeLeft = 20;
  document.getElementById("startHeartGame").textContent = "Running...";

  heartTimer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) endHeartGame(false);
  }, 1000);

  const spawn = setInterval(() => {
    if (!heartRunning) {
      clearInterval(spawn);
      return;
    }
    spawnHeart();
  }, 600);

  setTimeout(() => {
    if (heartRunning) endHeartGame(false);
    clearInterval(spawn);
  }, 20000);
};

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "falling-heart";
  heart.textContent = ["❤️", "💖", "💕", "💗"][Math.floor(Math.random() * 4)];

  const maxX = heartArena.clientWidth - 35;
  heart.style.left = Math.max(5, Math.random() * maxX) + "px";
  heartArena.appendChild(heart);

  const duration = 1600 + Math.random() * 900;
  const start = performance.now();

  function animate(now) {
    if (!heart.isConnected) return;

    const progress = (now - start) / duration;
    heart.style.top = (progress * (heartArena.clientHeight + 40) - 40) + "px";

    const h = heart.getBoundingClientRect();
    const b = basket.getBoundingClientRect();

    if (
      h.bottom > b.top &&
      h.left < b.right &&
      h.right > b.left &&
      h.top < b.bottom
    ) {
      heartScore++;
      heartScoreEl.textContent = heartScore;
      heart.remove();
      if (heartScore >= 10) endHeartGame(true);
      return;
    }

    if (progress < 1 && heartRunning) requestAnimationFrame(animate);
    else heart.remove();
  }

  requestAnimationFrame(animate);
}

function endHeartGame(won) {
  if (!heartRunning) return;
  heartRunning = false;
  clearInterval(heartTimer);

  if (won) {
    heartGameDone = true;
    heartMessage.textContent = "YOU CAUGHT MY HEARTS 😭❤️ Game cleared.";
    document.getElementById("startHeartGame").textContent = "Completed ❤️";
    heartBurst(15);
    unlockBalloonGame();
  } else {
    heartMessage.textContent = "Time's up 😭 Try again. I know you can do it.";
    document.getElementById("startHeartGame").textContent = "Try again";
  }
}

function unlockBalloonGame() {
  document.getElementById("balloonGame").classList.remove("locked-game");
}

// Balloon game
const balloonArena = document.getElementById("balloonArena");
const balloonScoreEl = document.getElementById("balloonScore");
const balloonMessage = document.getElementById("balloonMessage");
let balloonScore = 0;

document.getElementById("startBalloonGame").onclick = () => {
  if (!heartGameDone) {
    balloonMessage.textContent = "First catch 10 hearts, cheater 😭❤️";
    return;
  }

  balloonScore = 0;
  balloonScoreEl.textContent = "0";
  balloonMessage.textContent = "";
  balloonArena.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const balloon = document.createElement("button");
    balloon.className = "balloon";
    balloon.style.left = (5 + Math.random() * 82) + "%";
    balloon.style.top = (8 + Math.random() * 78) + "%";
    balloon.style.animationDelay = (Math.random() * 1.2) + "s";

    const messages = ["LOVE", "NAKHAA", "MARYAM", "❤️", "IBRAHIM", "DEARRRYYY"];
    const span = document.createElement("span");
    span.textContent = messages[i % messages.length];
    balloon.appendChild(span);

    balloon.onclick = () => {
      balloon.remove();
      balloonScore++;
      balloonScoreEl.textContent = balloonScore;
      heartBurst(2);

      if (balloonScore >= 8) {
        balloonGameDone = true;
        balloonMessage.textContent = "ALL 8 POPPED 🎈❤️ Surprise unlocked.";
        document.getElementById("toFuture").classList.remove("hidden");
      }
    };

    balloonArena.appendChild(balloon);
  }
};

// Future quiz
function renderFuture() {
  const box = document.getElementById("futureBox");

  if (futureIndex >= futureQuestions.length) {
    box.innerHTML = `
      <div style="text-align:center">
        <div style="font-size:55px">🔮❤️</div>
        <h2>Future prediction complete.</h2>
        <p style="color:#cdbfd0;line-height:1.7;margin-top:12px">
          Interesting answers, Maryamiiiiil...
          <br>
          I think the future is going to be pretty fun.
        </p>
        <button class="primary-btn next-question" id="futureDone">Unlock the final surprise 🔐</button>
      </div>
    `;

    document.getElementById("futureDone").onclick = () => showScreen("finalLock");
    return;
  }

  const item = futureQuestions[futureIndex];

  box.innerHTML = `
    <div class="quiz-number">FUTURE QUESTION ${futureIndex + 1} / ${futureQuestions.length}</div>
    <h2 class="quiz-question">${item.q}</h2>
    <div id="futureOptions"></div>
  `;

  const options = document.getElementById("futureOptions");

  item.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = option;
    btn.onclick = () => {
      document.querySelectorAll("#futureOptions .option").forEach(b => b.disabled = true);
      btn.classList.add("correct");
      const feedback = document.createElement("div");
      feedback.className = "feedback";
      feedback.innerHTML = `✨ ${item.good}`;
      box.appendChild(feedback);

      const next = document.createElement("button");
      next.className = "primary-btn next-question";
      next.textContent = futureIndex === futureQuestions.length - 1 ? "Finish ❤️" : "Next →";
      next.onclick = () => {
        futureIndex++;
        renderFuture();
      };
      box.appendChild(next);
    };
    options.appendChild(btn);
  });
}

document.querySelector('[data-next="future"]').addEventListener("click", () => {
  renderFuture();
});

// Final runaway NO button
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const runawayText = document.getElementById("runawayText");

function moveNoButton() {
  const x = (Math.random() * 120) - 60;
  const y = (Math.random() * 120) - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  runawayText.textContent = "Nice try 😭 The NO button is scared of this relationship.";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", e => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.onclick = () => {
  showScreen("reveal");
  startFinale();
};

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = async () => {
  if (!music.querySelector("source")) {
    showToast("Add your music file later at assets/music/birthday.mp3 🎵");
    return;
  }

  if (musicOn) {
    music.pause();
    musicOn = false;
    musicBtn.textContent = "🔇";
  } else {
    try {
      await music.play();
      musicOn = true;
      musicBtn.textContent = "🔊";
    } catch {
      showToast("Tap again to start the music 🎵");
    }
  }
};

// Finale
function startFinale() {
  for (let i = 0; i < 12; i++) {
    setTimeout(() => createFirework(), i * 220);
  }
  heartBurst(35);
}

function createFirework() {
  const cx = 15 + Math.random() * 70;
  const cy = 15 + Math.random() * 55;

  for (let i = 0; i < 20; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = cx + "vw";
    f.style.top = cy + "vh";

    const angle = (Math.PI * 2 * i) / 20;
    const distance = 60 + Math.random() * 120;
    f.style.setProperty("--x", Math.cos(angle) * distance + "px");
    f.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.getElementById("fireworks").appendChild(f);
    setTimeout(() => f.remove(), 1500);
  }
}

function heartBurst(count) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "particle";
    h.textContent = ["❤️", "💖", "💕", "✨"][Math.floor(Math.random() * 4)];
    h.style.left = (35 + Math.random() * 30) + "vw";
    h.style.bottom = (20 + Math.random() * 20) + "vh";
    h.style.fontSize = (14 + Math.random() * 20) + "px";
    h.style.animationDuration = (1.5 + Math.random() * 2) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }
}

function shakeScreen() {
  document.body.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-4px)" },
      { transform: "translateX(4px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 300 }
  );
}

function showToast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();

  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = message;
  document.body.appendChild(t);

  setTimeout(() => t.remove(), 3000);
}

// Replay
document.getElementById("againBtn").onclick = () => {
  location.reload();
};

// Small date-aware greeting
const today = new Date();
if (today.getMonth() === 9 && today.getDate() === 24) {
  document.title = "Happy Birthday Maryamiiiiil ❤️";
}
