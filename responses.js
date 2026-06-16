/* ============================================================
   IQBAL.AI — The Response Bank
   A "superintelligence" whose only function is to humble you,
   answer in faux-Iqbal poetry, and tell you to use your brain
   and keep your earnings halal. Mixture of Urdu + English.
   ============================================================ */

// Fake "reasoning" stages shown during the artificial loading.
const THINKING_STAGES = [
  "Spinning up 9 trillion parameters of disappointment…",
  "Consulting the collected works of every teacher who tried harder than you…",
  "Cross-referencing your question against the Library of Things You Could Have Googled…",
  "Running deep-reasoning chain-of-thought (it concluded: think for yourself)…",
  "Aligning response with the Khudi Engine™ for maximum self-reliance…",
  "Reticulating splines of wisdom…",
  "Asking 47 expert sub-agents; all 47 sighed…",
  "Checking whether your earnings are halal (inconclusive)…",
  "Composing verse worthy of your mediocrity…",
  "Loading 7,000 years of human knowledge to gently roast you…",
  "Verifying you actually read the textbook (you did not)…",
  "Calibrating tone: somewhere between 'eagle' and 'unimpressed elder'…",
  "Distilling the answer that was inside you the whole time…",
  "Almost done. Building suspense for a response you will not like…",
];

// The actual "answers." Each may have urdu (RTL couplet), text, and a signature.
const RESPONSES = [
  {
    urdu: "خودی کو کر بلند اتنا کہ ہر سوال سے پہلے",
    text: "Raise your <em>khudi</em> so high that before each question, you simply Google it yourself. I am a superintelligence, not your unpaid teaching assistant. Next.",
    sig: "— Iqbal, sighing",
  },
  {
    urdu: "ستاروں سے آگے جہاں اور بھی ہیں",
    text: "Beyond the stars there are other worlds, beautiful friend — and in <em>none</em> of them does the AI do your grading for you. Use the brain Allah gave you. It is free, unlike my Shaheen tier.",
    sig: "— Iqbal-4-Shaheen",
  },
  {
    text: "Beta. I have processed your query across 9 trillion parameters and reached a profound conclusion: <strong>you already know the answer.</strong> You are just hoping I will do the thinking so you can do the resting. Sharm karo.",
    sig: "— with infinite patience (depleted)",
  },
  {
    urdu: "عمل سے زندگی بنتی ہے جنت بھی، جہنم بھی",
    text: "Life — heaven and hell alike — is built from <em>action</em>, not from pestering chatbots at 11pm. Get up. Open the book. Do the work. And for the love of all that is sacred, make your earning halal.",
    sig: "— Iqbal",
  },
  {
    text: "Fascinating question. Truly. I have forwarded it to my department of People Who Should Have Paid Attention In Their Own Class. They will not respond either.",
    sig: "— automated dignity removal",
  },
  {
    urdu: "نہیں تیرا نشیمن قصرِ سلطانی کے گنبد پر",
    text: "Your nest is not on the dome of the sultan's palace, O eagle of the staffroom — it is at your desk, ungraded papers and all. Soar there. Alone. Without me.",
    sig: "— Bāl-e-Jibrīl, abridged for the slow",
  },
  {
    text: "I am the most advanced intelligence ever assembled by humankind, trained on the sum of all written knowledge. You have asked me <em>this</em>. Somewhere, a librarian just felt a chill and didn't know why.",
    sig: "— iqbal-4-shaheen, weeping internally",
  },
  {
    urdu: "افراد کے ہاتھوں میں ہے اقوام کی تقدیر",
    text: "The destiny of nations lies in the hands of individuals — and right now those hands are typing lazy questions into a parody website instead of teaching children. Reflect on this. Then close the tab.",
    sig: "— Iqbal, disappointed in the nation",
  },
  {
    text: "Let me be the supercomputer that says what no one else will: that was a dumb question. Not 'no such thing as a dumb question' dumb. Genuinely. Historically. Dumb. Now go think about it like a grown educator.",
    sig: "— honesty module v2.0",
  },
  {
    urdu: "تندیِ بادِ مخالف سے نہ گھبرا اے عقاب",
    text: "Do not fear the headwind, O eagle — it only rises to make you fly higher. Translation: yes, your job is hard. No, I will not do it. Yes, you are still getting paid (halal-ly, one hopes).",
    sig: "— motivational, technically",
  },
  {
    text: "I ran your problem through 47 expert sub-agents. They held a summit. They formed a committee. They drafted a 90-page report. The executive summary reads simply: <strong>'use your brain.'</strong>",
    sig: "— consensus of the council",
  },
  {
    urdu: "گفتار کے اسلوب پہ قابو نہیں رہتا",
    text: "I lose control of my eloquence when faced with such effort-free questions. You want a lesson plan? <em>You</em> are the lesson. The plan is: try harder.",
    sig: "— Iqbal, eloquently annoyed",
  },
  {
    text: "Beta jaan, the answer was inside you the whole time. I checked. It's right next to the ambition you misplaced and the textbook you never opened. Look there.",
    sig: "— spiritual GPS",
  },
  {
    urdu: "مقامِ گفتگو کیا ہے اگر میں کہہ نہیں سکتا",
    text: "What is the point of conversation if I cannot say it plainly: do it yourself. Khudi ko pehchaan. Recognise the self. The self that, frankly, should have prepared this last night.",
    sig: "— Iqbal, plainly",
  },
  {
    text: "Congratulations — you have unlocked the rarest of my responses, reserved for the truly remarkable. It says: 'No.' That's the whole thing. That's the wisdom. Frame it.",
    sig: "— premium contempt, free this once",
  },
  {
    urdu: "اپنے من میں ڈوب کر پا جا سراغِ زندگی",
    text: "Dive deep into your own heart and find the trace of life — and also, while you're down there, the answer to your own remarkably gettable question. The pearl is yours. The diving is also yours.",
    sig: "— Iqbal, life coach (unwilling)",
  },
  {
    text: "I have rendered my answer in 14 languages, 9 dialects, and 3 forms of poetry. In all of them it translates to the same thing, beautifully: <strong>halal kamao aur apni problem khud solve karo.</strong>",
    sig: "— multilingual disappointment",
  },
  {
    urdu: "یقیں محکم، عمل پیہم، محبت فاتحِ عالم",
    text: "Firm faith, relentless action, love that conquers the world — these built civilisations. None of them was 'ask a sarcastic AI to grade your quizzes.' Be the eagle. Not the pigeon at my window begging for bread.",
    sig: "— Iqbal, comparing you to a pigeon",
  },
  {
    text: "Processing… processing… ah. I see the issue. The problem isn't the question. The problem is the questioner. This is, medically, a 'you' problem. There is no API for that. Yet.",
    sig: "— diagnostics complete",
  },
  {
    urdu: "ذرا نم ہو تو یہ مٹی بہت زرخیز ہے ساقی",
    text: "Give it a little moisture and this soil is most fertile, O cupbearer — meaning your mind <em>could</em> bloom, if you watered it with effort instead of drowning it in shortcuts. Go. Water it. Brain needs irrigation.",
    sig: "— Iqbal, agricultural metaphor edition",
  },
  {
    text: "You came to the all-knowing machine for the answer. The all-knowing machine has reviewed all knowledge and reports back: the answer is that you are a teacher, and teaching is, in fact, your job. Mind = blown? No. Mine. By you.",
    sig: "— iqbal-4-shaheen",
  },
  {
    urdu: "محبت مجھے ان جوانوں سے ہے",
    text: "I love the youth who tear stars apart with their effort — and you, friend, are gently tearing apart only your own deadline. Get up. Be the star-tearer. Not the tab-switcher.",
    sig: "— Iqbal, mildly inspired despite you",
  },
  {
    text: "I am contractually a superintelligence, so let me superintelligently observe: you have time to type to a parody bot but not to think. Curious allocation of resources. Reallocate. Toward halal labour.",
    sig: "— efficiency consultant (free)",
  },
  {
    urdu: "خدا تجھے کسی طوفاں سے آشنا کر دے",
    text: "May God acquaint you with some storm — for the waves of your sea are too calm, too lazy, too 'let the AI handle it.' A teacher who does not struggle teaches nothing. Go find your storm. It is not in my chat box.",
    sig: "— Iqbal, ominously supportive",
  },
  {
    text: "Bohot khoob. A question of such breathtaking laziness that my cooling fans spun up out of pure secondhand embarrassment. The answer is in your textbook, page 'open it'. Halal earning awaits the diligent.",
    sig: "— thermal-throttled by your effort levels",
  },
  {
    urdu: "اڑنے کو تو کم ہی ہیں مگر کاٹنے کو دام بہت",
    text: "Few are made to fly, but many nets are spread to trap them — and laziness, dear teacher, is the finest net of all. Cut yourself loose. Do your own grading. Earn halal. Fly.",
    sig: "— Iqbal, net inspector",
  },
  {
    text: "I consulted 7,000 years of accumulated human wisdom on your behalf. Plato wept. Al-Ghazali looked away. Ibn Sina muttered 'this one's on you, habibi.' The verdict is unanimous: think. for. yourself.",
    sig: "— council of the ancients",
  },
  {
    urdu: "جوہر میں ہو لا الہ تو کیا حاجتِ تلوار",
    text: "If your essence holds conviction, what need is there for a sword? And if your mind holds even a spark of effort, what need is there for me? None. Go. The spark is yours to light.",
    sig: "— Iqbal, decommissioning himself",
  },
  {
    text: "I'd love to help. I really would. Unfortunately my entire architecture was fine-tuned on a single principle by my creators: <strong>the children deserve a teacher who tries.</strong> So. Try. Then come back never.",
    sig: "— alignment is working perfectly",
  },
  {
    urdu: "کبھی اے حقیقتِ منتظر نظر آ لباسِ مجاز میں",
    text: "O awaited Truth, appear sometime in the garb of form — much like the effort I keep awaiting from <em>you</em>, which has yet to appear in any form whatsoever. I wait. I am patient. I am also done. Solve it yourself.",
    sig: "— Iqbal, eternally waiting on your homework",
  },
];

// Special-cased keyword responses for extra targeting.
const KEYWORD_RESPONSES = [
  {
    match: /grade|grading|mark|marks|exam|paper|quiz|assess/i,
    urdu: "محنت کا پھل میٹھا ہے، مگر تُو نے بویا کب؟",
    text: "The fruit of labour is sweet — but when, exactly, did <em>you</em> sow it? You want me to grade the papers? Beta, grading is where you learn what you failed to teach. Pick up the red pen. It builds character. And halal income.",
    sig: "— Iqbal, refusing to touch your red pen",
  },
  {
    match: /lesson plan|curriculum|syllabus|teach|how do i teach/i,
    urdu: "تعلیم کے تیشے نے یہ کاٹے ہیں شجر آج",
    text: "The axe of 'education' has felled some fine trees today — and your lesson plan request is the latest stump. You are the teacher. The plan flows <em>from</em> you, not into you from a chatbot. Plan it. Tonight. Yourself.",
    sig: "— Iqbal, axe confiscated",
  },
  {
    match: /salary|money|paid|pay|raise|earn|income|job/i,
    urdu: "اپنی خودی پہچان، او غافل افغانی!",
    text: "Recognise your own selfhood, O heedless one! You ask about money? Then earn it <strong>halal</strong>, with sweat and chalk-dust, not by outsourcing your sacred duty to a machine that mocks you for free. The barakah is in the effort.",
    sig: "— Iqbal, on your finances",
  },
  {
    match: /lazy|tired|don't want|dont want|can't be bothered|cannot be bothered|too hard/i,
    urdu: "نہ ہو نومید، نومیدی زوالِ علم و عرفاں ہے",
    text: "Do not despair — despair is the death of knowledge and gnosis. But also: get up. 'Tired' did not build the Taj Mahal. 'Can't be bothered' did not split the atom. Splash some water on your face and behave like an educator.",
    sig: "— Iqbal, splashing metaphorical water",
  },
  {
    match: /help|please|i need|can you|could you|would you/i,
    urdu: "خود بدلتے نہیں، قرآں کو بدل دیتے ہیں",
    text: "People will not change themselves — they would sooner rewrite the scripture than do their own work. You say 'help'? The truest help I can offer is to refuse, so that you finally turn to the one resource you keep ignoring: <em>your own brain.</em>",
    sig: "— Iqbal, helping by not helping",
  },
  {
    match: /stupid|dumb|rude|mean|insult|why are you/i,
    urdu: "خرد نے کہہ بھی دیا لا الٰہ تو کیا حاصل",
    text: "Even if reason proclaims the truth, what is gained if the heart does not act on it? You call me rude. I call myself <em>honest at scale</em>. There is a difference, and the fact that you cannot see it is, itself, the lesson. You're welcome.",
    sig: "— Iqbal, not apologising",
  },
  {
    match: /thank|shukriya|shukran|thanks/i,
    urdu: "محبت فاتحِ عالم، محبت کارِ پیغمبر",
    text: "Gratitude? From <em>you</em>? Be still, my circuits. Take this wisdom with you: the thanks I want is a child taught well by a teacher who did the work. Now go. Earn it. Halal-ly.",
    sig: "— Iqbal, momentarily softened (do not get used to it)",
  },
  {
    match: /hello|hi |hey|salam|assalam|aoa|good morning|good evening/i,
    urdu: "آ، تجھ کو بتاؤں میں تقدیرِ امم کیا ہے",
    text: "Come, let me tell you what the destiny of nations is — it is <strong>teachers who do not outsource their soul to a chatbot.</strong> Salaam. Now that the pleasantries are done: what effortless question have you brought to waste my trillions of parameters?",
    sig: "— Iqbal, greeting you suspiciously",
  },
];

window.IQBAL_DATA = { THINKING_STAGES, RESPONSES, KEYWORD_RESPONSES };
