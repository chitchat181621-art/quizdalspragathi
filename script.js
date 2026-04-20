// ─── QUESTION BANK ────────────────────────────────────────────────
const questions = {
    "Logical Reasoning": [
         
{ q: "What comes next in the series: 2, 4, 8, 16, ?", a: ["24", "36", "32", "30"], correct: 2 },
{ q: "Find the missing number: 3, 6, 12, 24, ?", a: ["36", "60", "30", "48"], correct: 3 },
{ q: "What comes next: 1, 4, 9, 16, ?", a: ["30", "36", "20", "25"], correct: 3 },
{ q: "If CAT is coded as DBU, then DOG is coded as?", a: ["FQI", "EPH", "DPH", "EOH"], correct: 1 },
{ q: "If PEN is coded as QFO, then BOOK is coded as?", a: ["CQQL", "BPPM", "CPPL", "DOOM"], correct: 2 },
{ q: "If SOUTH is coded as TPVUI, then EAST is coded as?", a: ["FAST", "GBTU", "FBTU", "FATU"], correct: 2 },
{ q: "A man walks north, turns right, then right again. Which direction is he facing?", a: ["East", "West", "South", "North"], correct: 2 },
{ q: "A person walks east, then turns left. Which direction is he facing?", a: ["South", "East", "West", "North"], correct: 3 },
{ q: "A girl walks south and turns left. Which direction is she facing?", a: ["West", "North", "East", "South"], correct: 2 },
{ q: "A is father of B. B is son of C. How is A related to C?", a: ["Father", "Brother", "Son", "Husband"], correct: 3 },
{ q: "Pointing to a woman, Ravi said, 'She is the daughter of my mother's only daughter.' Who is the woman?", a: ["Sister", "Mother", "Niece", "Daughter"], correct: 3 },
{ q: "If A is brother of B and B is sister of C, how is A related to C?", a: ["Cousin", "Father", "Brother", "Sister"], correct: 2 },
{ q: "If today is Monday, what day will it be after 10 days?", a: ["Friday", "Wednesday", "Thursday", "Saturday"], correct: 2 },
{ q: "If January 1 is Sunday, what day is January 10?", a: ["Tuesday", "Monday", "Wednesday", "Thursday"], correct: 0 },
{ q: "How many days are there in a leap year?", a: ["367", "365", "366", "364"], correct: 2 },
{ q: "Find the next term: A, C, E, G, ?", a: ["K", "H", "J", "I"], correct: 3 },
{ q: "Find the next term: Z, X, V, T, ?", a: ["R", "S", "Q", "P"], correct: 0 },
{ q: "Find the next term: 2, 5, 10, 17, ?", a: ["28", "24", "30", "26"], correct: 3 },
{ q: "In a 3x3 square, if rows total 15, what is the center number?", a: ["7", "9", "5", "3"], correct: 2 },
{ q: "If in a square matrix the sum of opposite corners is 10, and one corner is 4, the opposite is?", a: ["7", "5", "4", "6"], correct: 3 },
{ q: "Which number completes the square: 2, 4, 8, ?", a: ["18", "12", "16", "10"], correct: 2 },
{ q: "Father is 40 and son is 10. After how many years will father be twice the son's age?", a: ["25", "15", "30", "20"], correct: 3 },
{ q: "A mother is 30 years older than her daughter. If daughter is 10, mother is?", a: ["50", "20", "40", "30"], correct: 2 },
{ q: "Two years ago, A was 8. What is A's age now?", a: ["9", "10", "11", "8"], correct: 1 },
{ q: "Find the missing number in matrix: 2 4 6 / 3 6 9 / 4 8 ?", a: ["11", "13", "12", "10"], correct: 2 },
{ q: "Find the missing number: 1 2 3 / 4 5 6 / 7 8 ?", a: ["10", "11", "9", "12"], correct: 2 },
{ q: "Matrix pattern: 2, 4 / 6, ?", a: ["14", "10", "8", "12"], correct: 2 },
{ q: "What comes next: 1, 8, 27, 64, ?", a: ["125", "81", "216", "100"], correct: 0 },
{ q: "Find the odd one out: 2, 4, 8, 16, 18", a: ["4", "18", "8", "2"], correct: 1 },
{ q: "What comes next: 11, 22, 44, 88, ?", a: ["176", "132", "166", "188"], correct: 0 }

    ],
    "Computer Awareness": [
       { q: "Who is known as the father of the computer?", a: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], "correct": 1 },
        { q: "Which device is used to store data permanently?", "a": [ "ROM", "Cache", "Register" ,"RAM"], "correct": 1 },
        { q: "What does CPU stand for?", a: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Core Processing Unit"], correct: 1 },
        { q: "Which scheduling algorithm gives the minimum average waiting time?", a: ["FCFS", "Round Robin", "Shortest Job First", "Priority Scheduling"], correct: 2 },
        { q: "Which is a web browser?", a: ["Google Chrome", "Windows", "MS Word", "Excel"], correct: 0 },
        { q: "Which is an input device?", a: ["Monitor", "Printer", "Keyboard", "Speaker"], correct: 2 },
        { q: "What is the full form of HTML?", a: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyper Transfer Markup Language", "High Text Modern Language"], correct: 0 },
        { q: "Which company developed Java?", a: ["Microsoft", "Apple", "Sun Microsystems", "IBM"], correct: 2 },
        { q: "1 Kilobyte = ?", a: ["512 Bytes", "1000 Bytes", "1024 Bytes", "2048 Bytes"], correct: 2 },
        { q: "Which data structure uses LIFO principle?", a: ["Queue", "Stack", "Array", "Tree"], correct: 1 },
        { q: "What is the base of hexadecimal number system?", a: ["2", "8", "10", "16"], correct: 3 },
        { q: "Which protocol is used to send emails?", a: ["HTTP", "TCP", "FTP", "SMTP"], correct: 3},
        { q: "Which topology requires a central hub?", a: ["Bus", "Ring", "Star", "Mesh"], correct: 2 },
        { q: "Which SQL clause is used to filter groups?", a: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"], correct: 2 },
        { q: "Which protocol is secure version of HTTP?", a: ["SSL", "HTTPS", "SFTP", "TCP"], correct: 1 },
        { q: "1 Gigabyte (GB) is equal to how many Megabytes (MB)?", a: ["1000", "1024", "1048", "1200"], correct: 1 },
        { q: "Which programming language is known as the 'language of the web'?", a: ["Python", "Java", "JavaScript", "C++"], "correct": 2 },
        { q: "Which type of memory is 'volatile,' meaning it loses its data when the power is turned off?",a: ["ROM", "SSD", "RAM", "Hard Drive"],correct: 2 },
        { q: "Which file extension is used for a Microsoft Excel file?", a: [".docx", ".pptx", ".xlsx", ".txt"], "correct": 2 },
        { q: "Which of these is a cloud storage service?", a: ["Google Drive", "MS Word", "Adobe Photoshop", "VLC Player"], "correct": 0 },
        { q: "Which data structure is used for recursion?", a: ["Queue", "Stack", "Array", "Linked List"], correct: 1 },
        { q: "Which normal form deals with removing partial functional dependencies?", a: ["1NF", "2NF", "3NF", "BCNF"], correct: 1 },
        { q: "What is the primary function of a DNS (Domain Name System)?",a: ["To scan for viruses", "To translate domain names into IP addresses", "To create website layouts", "To increase internet speed"],correct: 1 },
        { q: "Which file extension is commonly used for a compressed 'archive' of multiple files?",a: [".txt", ".mp3", ".zip", ".jpg"],correct: 2},
        { q: "What is polymorphism in OOP?", a: ["One interface, multiple implementations", "Hiding data from users", "Inheriting properties from a class", "Creating multiple objects"], "correct": 0 },
        { q: "Which gate outputs 1 only when both inputs are 1?", a: ["OR Gate", "AND Gate", "NOT Gate", "XOR Gate"], "correct": 1 },
        { q: "Which sorting algorithm has average time complexity of O(n log n)?", a: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], "correct": 2 },
        { q: "Which key combination opens Task Manager?", a: ["Ctrl+Shift+Esc", "Ctrl+Alt+Del", "Alt+F4", "Ctrl+Esc"], correct: 0 },
        { q: "Which OSI layer is responsible for error-free delivery of data, end-to-end?", a: ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"], correct: 2 },
        { q: "Which register in the CPU holds the address of the next instruction to be executed?", a: ["Accumulator", "Instruction Register", "Program Counter", "Memory Address Register"], correct: 2 },
    ],
    "General English": 
       [
{ q: "Choose the correct article: _ apple a day keeps the doctor away.", a: ["The", "An", "A", "No article"], correct: 1 },

{ q: "Choose the correct synonym of 'Happy'.", a: ["Angry", "Joyful", "Tired", "Sad"], correct: 1 },

{ q: "Choose the correct antonym of 'Hot'.", a: ["Cold", "Heat", "Warm", "Cool"], correct: 0 },

{ q: "She _ to school every day.", a: ["going", "gone", "go", "goes"], correct: 3 },

{ q: "Choose the correct preposition: He is good _ English.", a: ["for", "at", "on", "in"], correct: 1 },

{ q: "Find the correctly spelled word.", a: ["Beutiful", "Beautifull", "Beautiful", "Beautifull"], correct: 2 },

{ q: "Choose the synonym of 'Quick'.", a: ["Slow", "Fast", "Lazy", "Late"], correct: 1 },

{ q: "Choose the antonym of 'Strong'.", a: ["Weak", "Powerful", "Bold", "Brave"], correct: 0 },

{ q: "I _ my homework yesterday.", a: ["done", "doing", "did", "do"], correct: 2 },

{ q: "Choose the correct article: She bought _ umbrella.", a: ["a", "the", "no article", "an"], correct: 3 },

{ q: "Find the noun in the sentence: 'The cat is sleeping.'", a: ["is", "sleeping", "cat", "The"], correct: 2 },

{ q: "Choose the correct plural form of 'Child'.", a: ["Children", "Childs", "Childrens", "Childes"], correct: 0 },

{ q: "Which word is a verb?", a: ["Blue", "Run", "Chair", "Soft"], correct: 1 },

{ q: "Choose the correct tense: They _ playing football.", a: ["was", "be", "is", "are"], correct: 3 },

{ q: "Choose the synonym of 'Begin'.", a: ["Pause", "End", "Start", "Stop"], correct: 2 },

{ q: "Choose the antonym of 'Early'.", a: ["Late", "Quick", "Fast", "Soon"], correct: 0 },

{ q: "He sat _ the chair.", a: ["on", "in", "at", "by"], correct: 0 },

{ q: "Find the adjective: 'She wore a red dress.'", a: ["wore", "dress", "She", "red"], correct: 3 },

{ q: "Choose the correct form: I have _ my work.", a: ["completed", "completes", "complete", "completing"], correct: 0 },

{ q: "Choose the opposite of 'Brave'.", a: ["Heroic", "Bold", "Cowardly", "Strong"], correct: 2 },

{ q: "Select the correct sentence.", a: ["He goes to school.", "He going to school.", "He go to school.", "He gone to school."], correct: 0 },

{ q: "Choose the synonym of 'Big'.", a: ["Large", "Tiny", "Short", "Narrow"], correct: 0 },

{ q: "Choose the antonym of 'Clean'.", a: ["Fresh", "Dirty", "Clear", "Neat"], correct: 1 },

{ q: "Find the adverb: 'He runs quickly.'", a: ["runs", "He", "quickly", "none"], correct: 2 },

{ q: "Choose the correct article: _ sun rises in the east.", a: ["A", "The", "An", "No article"], correct: 1 },

{ q: "They _ in the garden now.", a: ["play", "are playing", "played", "plays"], correct: 1 },

{ q: "Choose the synonym of 'Smart'.", a: ["Clever", "Weak", "Slow", "Dull"], correct: 0 },

{ q: "Choose the antonym of 'Rich'.", a: ["Poor", "Strong", "Wealthy", "Happy"], correct: 0 },

{ q: "She is interested _ music.", a: ["at", "in", "for", "on"], correct: 1 },

{ q: "Choose the correct sentence.", a: ["I am a student.", "I student am.", "Am I student.", "I am student."], correct: 0 }
],
    "General Knowledge": [
       { q: "Who is known as the father of the computer?", a: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], "correct": 1 },
        { q: "Which device is used to store data permanently?", "a": [ "ROM", "Cache", "Register" ,"RAM"], "correct": 3 },
        { q: "What does CPU stand for?", a: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Core Processing Unit"], correct: 1 },
        { q: "Which scheduling algorithm gives the minimum average waiting time?", a: ["FCFS", "Round Robin", "Shortest Job First", "Priority Scheduling"], correct: 2 },
        { q: "Which is a web browser?", a: ["Google Chrome", "Windows", "MS Word", "Excel"], correct: 0 },
        { q: "Which is an input device?", a: ["Monitor", "Printer", "Keyboard", "Speaker"], correct: 2 },
        { q: "What is the full form of HTML?", a: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyper Transfer Markup Language", "High Text Modern Language"], correct: 0 },
        { q: "Which company developed Java?", a: ["Microsoft", "Apple", "Sun Microsystems", "IBM"], correct: 2 },
        { q: "1 Kilobyte = ?", a: ["512 Bytes", "1000 Bytes", "1024 Bytes", "2048 Bytes"], correct: 2 },
        { q: "Which data structure uses LIFO principle?", a: ["Queue", "Stack", "Array", "Tree"], correct: 1 },
        { q: "What is the base of hexadecimal number system?", a: ["2", "8", "10", "16"], correct: 3 },
        { q: "Which protocol is used to send emails?", a: ["HTTP", "TCP", "SMTP", "FTP"], correct: 3},
        { q: "Which topology requires a central hub?", a: ["Bus", "Ring", "Star", "Mesh"], correct: 2 },
        { q: "Which SQL clause is used to filter groups?", a: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"], correct: 2 },
        { q: "Which protocol is secure version of HTTP?", a: ["SSL", "HTTPS", "SFTP", "TCP"], correct: 3 },
        { q: "1 Gigabyte (GB) is equal to how many Megabytes (MB)?", a: ["1000", "1024", "1048", "1200"], correct: 1 },
        { q: "Which programming language is known as the 'language of the web'?", a: ["Python", "Java", "JavaScript", "C++"], "correct": 2 },
        { q: "Which type of memory is 'volatile,' meaning it loses its data when the power is turned off?",a: ["ROM", "SSD", "RAM", "Hard Drive"],correct: 2 },
        { q: "Which file extension is used for a Microsoft Excel file?", a: [".docx", ".pptx", ".xlsx", ".txt"], "correct": 2 },
        { q: "Which of these is a cloud storage service?", a: ["Google Drive", "MS Word", "Adobe Photoshop", "VLC Player"], "correct": 0 },
        { q: "Which data structure is used for recursion?", a: ["Queue", "Stack", "Array", "Linked List"], correct: 1 },
        { q: "Which normal form deals with removing partial functional dependencies?", a: ["1NF", "2NF", "3NF", "BCNF"], correct: 1 },
        { q: "What is the primary function of a DNS (Domain Name System)?",a: ["To scan for viruses", "To translate domain names into IP addresses", "To create website layouts", "To increase internet speed"],correct: 1 },
        { q: "Which file extension is commonly used for a compressed 'archive' of multiple files?",a: [".txt", ".mp3", ".zip", ".jpg"],correct: 2},
        { q: "What is polymorphism in OOP?", a: ["One interface, multiple implementations", "Hiding data from users", "Inheriting properties from a class", "Creating multiple objects"], "correct": 0 },
        { q: "Which gate outputs 1 only when both inputs are 1?", a: ["OR Gate", "AND Gate", "NOT Gate", "XOR Gate"], "correct": 1 },
        { q: "Which sorting algorithm has average time complexity of O(n log n)?", a: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], "correct": 2 },
        { q: "Which key combination opens Task Manager?", a: ["Ctrl+Shift+Esc", "Ctrl+Alt+Del", "Alt+F4", "Ctrl+Esc"], correct: 0 },
        { q: "Which OSI layer is responsible for error-free delivery of data, end-to-end?", a: ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"], correct: 2 },
        { q: "Which register in the CPU holds the address of the next instruction to be executed?", a: ["Accumulator", "Instruction Register", "Program Counter", "Memory Address Register"], correct: 2 },
    ]
};

// ─── ROUND CONFIG ─────────────────────────────────────────────────
const ROUNDS = [
    { category: "Logical Reasoning",  icon: "🧩", desc: "Put your logic and reasoning to the test!" },
    { category: "Computer Awareness", icon: "💻", desc: "How well do you know computers & tech?" },
    { category: "General English",    icon: "📚", desc: "Grammar, vocabulary & comprehension!" },
    { category: "General Knowledge",  icon: "🌍", desc: "From science to history — how sharp are you?" }
];

// ─── STATE ────────────────────────────────────────────────────────
let playerName    = "";
let currentRound  = 0;
let currentQIndex = 0;
let timer;
let timeLeft      = 15;

// ─── SCORE TRACKING (silent – never shown on screen) ──────────────
let totalScore = 0;

// ─── HELPERS ──────────────────────────────────────────────────────
function playSound(id) {
    try { const s = document.getElementById(id); s.currentTime = 0; s.play(); } catch(e) {}
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('fade-out');
    });
    setTimeout(() => {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.add('hidden');
            s.classList.remove('fade-out');
        });
        const target = document.getElementById(id);
        target.classList.remove('hidden');
        target.classList.add('active');
    }, 300);
}

// ─── SAVE TO GOOGLE SHEETS + GMAIL ───────────────────────────────
function saveScoreToServer() {
    const totalQuestions = ROUNDS.reduce((sum, r) => sum + questions[r.category].length, 0);
    const url = 'https://script.google.com/macros/s/AKfycbxg4RwnH9pOb7lmQHI-Wk6DtqLLQKO6ydnNrXG7TM8ma-NWk4Yc4zVvOdMiOKNOsWFs/exec'
        + '?name='  + encodeURIComponent(playerName)
        + '&score=' + encodeURIComponent(totalScore)
        + '&total=' + encodeURIComponent(totalQuestions);
    fetch(url, { method: 'GET', mode: 'no-cors' })
    .catch(err => console.error('Score save error:', err));
}

// ─── FLOW ─────────────────────────────────────────────────────────
function startJourney() {
    const inp = document.getElementById('username').value.trim();
    if (!inp) {
        document.getElementById('username').classList.add('shake');
        setTimeout(() => document.getElementById('username').classList.remove('shake'), 500);
        return;
    }
    playerName   = inp;
    currentRound = 0;
    totalScore   = 0;
    playSound('sound-click');
    showRoundIntro();
}

function showRoundIntro() {
    const r = ROUNDS[currentRound];
    document.getElementById('round-badge-num').textContent = `${r.icon} ROUND ${currentRound + 1} of ${ROUNDS.length}`;
    document.getElementById('round-cat-name').textContent  = r.category;
    document.getElementById('round-desc').textContent      = r.desc;
    showScreen('round-intro-screen');
}

function beginRound() {
    playSound('sound-click');
    currentQIndex = 0;

    const r = ROUNDS[currentRound];
    document.getElementById('qtb-round').textContent = `ROUND ${currentRound + 1}`;
    document.getElementById('qtb-cat').textContent   = r.category;

    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    const cat   = ROUNDS[currentRound].category;
    const qList = questions[cat];
    const qData = qList[currentQIndex];

    document.getElementById('question-text').textContent = qData.q;
    document.getElementById('q-number').textContent      = `Q${currentQIndex + 1} / ${qList.length}`;
    document.getElementById('next-btn').classList.add('hidden');

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    qData.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt}</span>`;
        btn.onclick   = () => checkAnswer(i, btn);
        container.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    const fill = document.getElementById('timer-fill');
    const num  = document.getElementById('timer-num');
    fill.style.width      = '100%';
    fill.style.background = '#22d3ee';
    num.textContent       = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        num.textContent      = timeLeft;
        fill.style.width     = (timeLeft / 30 * 100) + '%';
        if (timeLeft <= 5)      fill.style.background = '#f43f5e';
        else if (timeLeft <= 9) fill.style.background = '#f59e0b';
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
            document.getElementById('next-btn').classList.remove('hidden');
        }
    }, 1000);
}

function checkAnswer(index, btn) {
    clearInterval(timer);
    const cat   = ROUNDS[currentRound].category;
    const qData = questions[cat][currentQIndex];
    const allBtns = document.querySelectorAll('.option-btn');

    allBtns.forEach(b => b.disabled = true);

    if (index === qData.correct) {
        btn.classList.add('correct');
        playSound('sound-correct');
        totalScore++; // silent score increment only
    } else {
        btn.classList.add('wrong');
        playSound('sound-wrong');
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    const cat = ROUNDS[currentRound].category;
    currentQIndex++;
    if (currentQIndex < questions[cat].length) {
        loadQuestion();
    } else {
        showRoundResult();
    }
}

function showRoundResult() {
    playSound('sound-finish');
    const r = ROUNDS[currentRound];
    document.getElementById('rr-round-tag').textContent = `ROUND ${currentRound + 1} COMPLETE`;
    document.getElementById('rr-cat').textContent       = `${r.icon} ${r.category}`;
    document.getElementById('rr-verdict').textContent   = "🎉 Round Complete! Keep it up!";

    const isLast = currentRound >= ROUNDS.length - 1;
    document.getElementById('next-round-btn').textContent = isLast ? "See Results →" : "Next Round →";

    showScreen('round-result-screen');
}

function retryRound() {
    playSound('sound-click');
    beginRound();
}

function goNextRound() {
    playSound('sound-click');
    currentRound++;
    if (currentRound >= ROUNDS.length) {
        showFinalScreen();
    } else {
        showRoundIntro();
    }
}

function showFinalScreen() {
    playSound('sound-finish');
    document.getElementById('final-player-name').textContent = `🎉 ${playerName}`;
    saveScoreToServer(); // silently send name + score to PHP
    showScreen('final-screen');
}

function resetGame() {
    playSound('sound-click');
    currentRound = 0;
    totalScore   = 0;
    document.getElementById('username').value = '';
    showScreen('login-screen');
}