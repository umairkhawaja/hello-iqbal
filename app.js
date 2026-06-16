/* ============================================================
   IQBAL.AI — App logic
   Handles the chat demo, the artificial "deep reasoning" loader,
   the rotating hero text, and stat counters.
   ============================================================ */

(function () {
  "use strict";

  const { THINKING_STAGES, RESPONSES, KEYWORD_RESPONSES } = window.IQBAL_DATA;

  const log = document.getElementById("chatLog");
  const form = document.getElementById("chatForm");
  const field = document.getElementById("chatField");
  const sendBtn = document.getElementById("sendBtn");
  const status = document.getElementById("chatStatus");
  const suggestionsEl = document.getElementById("suggestions");

  // Avoid repeating the same generic response twice in a row.
  let lastIndex = -1;
  let busy = false;

  const SUGGESTIONS = [
    "Can you grade these 80 essays for me?",
    "Write me a full lesson plan on photosynthesis",
    "I'm so tired, can you just do it?",
    "How do I get a raise?",
    "Please help me, I'm stuck",
  ];

  /* ---------- helpers ---------- */

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function scrollToBottom() {
    log.scrollTop = log.scrollHeight;
  }

  function addUserMessage(text) {
    const wrap = el("div", "msg msg-user");
    wrap.appendChild(el("div", "msg-avatar", "🧑‍🏫"));
    wrap.appendChild(el("div", "msg-bubble", escapeHtml(text)));
    log.appendChild(wrap);
    scrollToBottom();
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function pickResponse(userText) {
    // Keyword match first (so the parody feels "smart").
    for (const r of KEYWORD_RESPONSES) {
      if (r.match.test(userText)) return r;
    }
    // Otherwise a random non-repeating generic burn.
    let i;
    do {
      i = Math.floor(Math.random() * RESPONSES.length);
    } while (i === lastIndex && RESPONSES.length > 1);
    lastIndex = i;
    return RESPONSES[i];
  }

  function renderResponse(r) {
    const wrap = el("div", "msg msg-bot");
    wrap.appendChild(el("div", "msg-avatar", "🦅"));
    let inner = "";
    if (r.urdu) inner += `<span class="urdu">${r.urdu}</span>`;
    inner += `<span class="body">${r.text}</span>`;
    if (r.sig) inner += `<span class="sig">${r.sig}</span>`;
    wrap.appendChild(el("div", "msg-bubble", inner));
    log.appendChild(wrap);
    scrollToBottom();
  }

  /* ---------- the fake "deep reasoning" loader ---------- */

  function showThinking() {
    const wrap = el("div", "msg msg-bot thinking-msg");
    wrap.appendChild(el("div", "msg-avatar", "🦅"));
    const bubble = el("div", "msg-bubble thinking");
    bubble.innerHTML = `
      <span class="stage">
        <span class="stageText">Understanding your request…</span>
        <span class="dot-flash"><i></i><i></i><i></i></span>
      </span>
      <div class="think-bar"><span></span></div>`;
    wrap.appendChild(bubble);
    log.appendChild(wrap);
    scrollToBottom();
    return wrap;
  }

  function runThinking(onDone) {
    const node = showThinking();
    const stageText = node.querySelector(".stageText");
    const bar = node.querySelector(".think-bar span");

    // Shuffle a handful of stages so each "thinking" feels unique.
    const stages = [...THINKING_STAGES].sort(() => Math.random() - 0.5).slice(0, 4 + Math.floor(Math.random() * 2));

    // Total artificial delay: deliberately long to imply "complex reasoning".
    const perStage = 750 + Math.floor(Math.random() * 550); // ms
    let idx = 0;

    function tick() {
      if (idx >= stages.length) {
        node.remove();
        onDone();
        return;
      }
      stageText.textContent = stages[idx];
      const pct = Math.round(((idx + 1) / stages.length) * 100);
      // A little overshoot/jitter so the bar feels "real".
      bar.style.width = Math.min(99, pct - 6 + Math.floor(Math.random() * 10)) + "%";
      idx++;
      setTimeout(tick, perStage);
    }
    tick();
  }

  /* ---------- main send flow ---------- */

  function handleSend(text) {
    if (busy) return;
    const trimmed = text.trim();
    if (!trimmed) return;

    busy = true;
    field.value = "";
    sendBtn.disabled = true;
    status.textContent = "generating…";

    addUserMessage(trimmed);

    const response = pickResponse(trimmed);
    runThinking(function () {
      renderResponse(response);
      busy = false;
      sendBtn.disabled = false;
      status.textContent = "online";
      field.focus();
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleSend(field.value);
  });

  /* ---------- suggestion chips ---------- */

  SUGGESTIONS.forEach((s) => {
    const chip = el("button", "chip", escapeHtml(s));
    chip.type = "button";
    chip.addEventListener("click", () => handleSend(s));
    suggestionsEl.appendChild(chip);
  });

  /* ---------- greeting message ---------- */

  function greet() {
    // The greeting stays fully professional — the whole gag depends on the
    // product feeling legit until the user actually asks something.
    renderResponse({
      text: "Hi, I'm <strong>Iqbal</strong>, your AI teaching assistant 👋 I can grade student work against your rubric, build standards-aligned lesson plans, and draft personalised feedback in seconds. What can I help you with today?",
      sig: "Iqbal · AI teaching assistant",
    });
  }
  greet();

  /* ---------- hero rotator ---------- */

  const rotator = document.getElementById("rotator");
  const PHRASES = [
    "make you a better teacher",
    "tell you to use your brain",
    "answer in poetry you won't get",
    "remind you to earn halal",
    "do absolutely none of your work",
    "humble you, eloquently",
  ];
  let rIdx = 0;
  if (rotator) {
    setInterval(() => {
      rotator.style.opacity = "0";
      setTimeout(() => {
        rIdx = (rIdx + 1) % PHRASES.length;
        rotator.textContent = PHRASES[rIdx];
        rotator.style.opacity = "1";
      }, 300);
    }, 2600);
  }

  /* ---------- stat counters (animate on scroll into view) ---------- */

  const stats = document.querySelectorAll(".stat b");
  const seen = new WeakSet();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || seen.has(entry.target)) return;
      seen.add(entry.target);
      animateStat(entry.target);
    });
  }, { threshold: 0.5 });
  stats.forEach((s) => io.observe(s));

  function animateStat(node) {
    const target = node.getAttribute("data-count");
    // Non-numeric targets (∞, 100%, 0) handled specially.
    if (target === "∞") { node.textContent = "∞"; return; }
    if (target === "0") { node.textContent = "0"; return; }
    const isPct = target.includes("%");
    const num = parseInt(target, 10);
    let cur = 0;
    const steps = 40;
    const inc = num / steps;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= num) { cur = num; clearInterval(timer); }
      node.textContent = Math.round(cur) + (isPct ? "%" : "");
    }, 22);
  }
})();
