let happinessPercent = 0;
let sadnessPercent = 0;
let stressPercent = 0;

const questions = [
    {
      text: "1. วันนี้คุณรู้สึกอย่างไร?",
      options: [
        { text: "มีความสุข", impact: { happiness: 40, sadness: 0, stress: 0 } },
        { text: "เศร้า", impact: { happiness: 0, sadness: 40, stress: 0 } },
        { text: "เครียด", impact: { happiness: 0, sadness: 0, stress: 40 } },
        { text: "ผ่อนคลาย", impact: { happiness: 30, sadness: 10, stress: 10 } }
      ]
    },
    {
      text: "2. คุณรู้สึกเครียดบ่อยแค่ไหน?",
      options: [
        { text: "ไม่เคย", impact: { happiness: 40, sadness: 10, stress: 10 } },
        { text: "บางครั้ง", impact: { happiness: 30, sadness: 10, stress: 10 } },
        { text: "บ่อยครั้ง", impact: { happiness: 20, sadness: 10, stress: 30 } },
        { text: "ตลอดเวลา", impact: { happiness: 10, sadness: 20, stress: 40 } }
      ]
    },
    {
      text: "3. คุณรู้สึกมีความสุขมากน้อยแค่ไหน?",
      options: [
        { text: "มาก", impact: { happiness: 40, sadness: 0, stress: 0 } },
        { text: "ปานกลาง", impact: { happiness: 20, sadness: 20, stress: 10 } },
        { text: "น้อย", impact: { happiness: 10, sadness: 30, stress: 10 } },
        { text: "ไม่เลย", impact: { happiness: 0, sadness: 40, stress: 20 } }
      ]
    },
    {
      text: "4. คุณรู้สึกเศร้าบ่อยแค่ไหน?",
      options: [
        { text: "ไม่เคย", impact: { happiness: 20, sadness: 0, stress: 0 } },
        { text: "บางครั้ง", impact: { happiness: 10, sadness: 30, stress: 0 } },
        { text: "บ่อยครั้ง", impact: { happiness: 10, sadness: 40, stress: 0 } },
        { text: "ตลอดเวลา", impact: { happiness: 0, sadness: 40, stress: 10 } }
      ]
    },
    {
      text: "5. คุณรู้สึกเครียดจากงานหรือชีวิตส่วนตัวหรือไม่?",
      options: [
        { text: "ไม่เคย", impact: { happiness: 40, sadness: 10, stress: 10 } },
        { text: "บางครั้ง", impact: { happiness: 20, sadness: 10, stress: 10 } },
        { text: "บ่อยครั้ง", impact: { happiness: 10, sadness: 10, stress: 20 } },
        { text: "ตลอดเวลา", impact: { happiness: 0, sadness: 20, stress: 30 } }
      ]
    },
    {
      text: "6. คุณรู้สึกผ่อนคลายเมื่อทำกิจกรรมใดบ้าง?",
      options: [
        { text: "ออกกำลังกาย", impact: { happiness: 40, sadness: 10, stress: 10 } },
        { text: "อ่านหนังสือ", impact: { happiness: 30, sadness: 10, stress: 20 } },
        { text: "ฟังเพลง", impact: { happiness: 30, sadness: 10, stress: 20 } },
        { text: "นอนหลับ", impact: { happiness: 30, sadness: 10, stress: 10 } }
      ]
    },
    {
      text: "7. คุณรู้สึกมีความสุขเมื่ออยู่กับครอบครัวหรือไม่?",
      options: [
        { text: "มาก", impact: { happiness: 40, sadness: 10, stress: 0 } },
        { text: "ปานกลาง", impact: { happiness: 20, sadness: 10, stress: 10 } },
        { text: "น้อย", impact: { happiness: 10, sadness: 30, stress: 10 } },
        { text: "ไม่เลย", impact: { happiness: 0, sadness: 40, stress: 20 } }
      ]
    },
    {
      text: "8. คุณรู้สึกเศร้าหรือไม่เมื่ออยู่คนเดียว?",
      options: [
        { text: "ไม่เคย", impact: { happiness: 40, sadness: 0, stress: 0 } },
        { text: "บางครั้ง", impact: { happiness: 20, sadness: 10, stress: 5 } },
        { text: "บ่อยครั้ง", impact: { happiness: 10, sadness: 20, stress: 10 } },
        { text: "ตลอดเวลา", impact: { happiness: 0, sadness: 40, stress: 10 } }
      ]
    },
    {
      text: "9. คุณรู้สึกเครียดเมื่อมีงานเร่งด่วนหรือไม่?",
      options: [
        { text: "ไม่เคย", impact: { happiness: 30, sadness: 10, stress: 0 } },
        { text: "บางครั้ง", impact: { happiness: 20, sadness: 10, stress: 30 } },
        { text: "บ่อยครั้ง", impact: { happiness: 10, sadness: 20, stress: 30 } },
        { text: "ตลอดเวลา", impact: { happiness: 0, sadness: 20, stress: 40 } }
      ]
    },
    {
      text: "10. คุณรู้สึกผ่อนคลายเมื่อได้พักผ่อนหรือไม่?",
      options: [
        { text: "มาก", impact: { happiness: 40, sadness: 10, stress: 0 } },
        { text: "ปานกลาง", impact: { happiness: 30, sadness: 10, stress: 10 } },
        { text: "น้อย", impact: { happiness: 10, sadness: 20, stress: 20 } },
        { text: "ไม่เลย", impact: { happiness: 0, sadness: 30, stress: 40 } }
      ]
    },
    {
      text: "11. คุณรู้สึกมีความสุขเมื่อได้ทำงานที่ชอบหรือไม่?",
      options: [
        { text: "มาก", impact: { happiness: 40, sadness: 0, stress: 10 } },
        { text: "ปานกลาง", impact: { happiness: 30, sadness: 20, stress: 10 } },
        { text: "น้อย", impact: { happiness: 20, sadness: 30, stress: 10 } },
        { text: "ไม่เลย", impact: { happiness: 0, sadness: 40, stress: 20 } }
      ]
    },
    {
      text: "12. คุณรู้สึกเศร้าเมื่อไม่ได้ทำกิจกรรมที่ชอบหรือไม่?",
      options: [
        { text: "ไม่เคย", impact: { happiness: 30, sadness: 10, stress: 0 } },
        { text: "บางครั้ง", impact: { happiness: 20, sadness: 20, stress: 0 } },
        { text: "บ่อยครั้ง", impact: { happiness: 10, sadness: 30, stress: 10 } },
        { text: "ตลอดเวลา", impact: { happiness: 0, sadness: 40, stress: 10 } }
      ]
    },
    {
      text: "13. คุณรู้สึกเครียดเมื่อมีปัญหาส่วนตัวหรือไม่?",
      options: [
        { text: "ไม่เคย", impact: { happiness: 30, sadness: 0, stress: 0 } },
        { text: "บางครั้ง", impact: { happiness: 20, sadness: 10, stress: 10 } },
        { text: "บ่อยครั้ง", impact: { happiness: 10, sadness: 10, stress: 30 } },
        { text: "ตลอดเวลา", impact: { happiness: 0, sadness: 10, stress: 40 } }
      ]
    },
    {
      text: "14. คุณรู้สึกผ่อนคลายเมื่อได้ออกกำลังกายหรือไม่?",
      options: [
        { text: "มาก", impact: { happiness: 40, sadness: 0, stress: 0 } },
        { text: "ปานกลาง", impact: { happiness: 30, sadness: 10, stress: 5 } },
        { text: "น้อย", impact: { happiness: 20, sadness: 10, stress: 10 } },
        { text: "ไม่เลย", impact: { happiness: 10, sadness: 20, stress: 20 } }
      ]
    },
    {
      text: "15. คุณรู้สึกมีความสุขเมื่อได้ทำกิจกรรมที่ชอบหรือไม่?",
      options: [
        { text: "มาก", impact: { happiness: 40, sadness: 10, stress: 0 } },
        { text: "ปานกลาง", impact: { happiness: 30, sadness: 20, stress: 10 } },
        { text: "น้อย", impact: { happiness: 20, sadness: 30, stress: 10 } },
        { text: "ไม่เลย", impact: { happiness: 0, sadness: 40, stress: 20 } }
      ]
    }
  ];
  
  

  const form = document.getElementById("assessmentForm");

  form.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  
  window.addEventListener("DOMContentLoaded", (event) => {
    // เลือกฟอร์มหรืออินพุตที่ต้องการป้องกัน
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("keydown", preventEnter);
    });
  });
  

  
  let currentQuestionIndex = 0;
  const answers = [];
  const impactSum = { happiness: 0, sadness: 0, stress: 0 };
  let userInfo = { gender: "", age: "" };
  let isAssessmentInProgress = false;
  
  document.addEventListener("DOMContentLoaded", () => {
    document
      .getElementById("personalInfoForm")
      .addEventListener("submit", submitPersonalInfo);
    document.getElementById("nextButton").addEventListener("click", nextQuestion);
    document.getElementById("prevButton").addEventListener("click", prevQuestion);
    document
      .getElementById("assessmentForm")
      .addEventListener("submit", submitAssessment);
  
    // ตั้งค่าแจ้งเตือนเมื่อผู้ใช้พยายามออกจากหน้าหรือรีเฟรช
    window.addEventListener("beforeunload", handleBeforeUnload);
  });
  
  function submitPersonalInfo(event) {
    event.preventDefault();
  
    userInfo.gender = document.getElementById("gender").value;
    userInfo.age = document.getElementById("age").value;
  
    if (userInfo.gender === "" || userInfo.age === "") {
      document.getElementById("infoMessage").textContent =
        "กรุณาระบุเพศและอายุให้ครบถ้วน";
      return;
    }
  
    document.getElementById("infoMessage").textContent = "";
    document.getElementById("personalInfoForm").style.display = "none";
    document.getElementById("assessmentForm").style.display = "block";
    document.getElementById("about").style.display = "none";
    isAssessmentInProgress = true;
    showQuestion();
  }
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("questionText").textContent = question.text;
    const answerOptions = document.getElementById("answerOptions");
    answerOptions.innerHTML = "";
    question.options.forEach((option) => {
      const label = document.createElement("label");
      label.textContent = option.text;
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = option.text;
  
      // ตั้งค่าให้ radio button ที่ถูกเลือกก่อนหน้านี้เป็น checked
      if (answers[currentQuestionIndex] === option.text) {
        input.checked = true;
      }
  
      label.prepend(input);
      answerOptions.appendChild(label);
    });
  
    document.getElementById("prevButton").disabled = currentQuestionIndex === 0;
    document.getElementById("nextButton").style.display =
      currentQuestionIndex === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submitButton").style.display =
      currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
  }

  let questionImpacts = [];
  let answeredQuestions = new Set(); // เก็บคำถามที่ได้ตอบไปแล้ว
  let currentImpact = { happiness: 0, sadness: 0, stress: 0 };
  
  // ฟังก์ชันอัปเดต impact
  function updateImpact(isAdding = true) {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      const selectedText = selectedOption.value;
      const question = questions[currentQuestionIndex];
      const selectedImpact = question.options.find(option => option.text === selectedText).impact;
  
      if (isAdding) {
        // เพิ่ม impact สำหรับคำตอบใหม่
        impactSum.happiness += selectedImpact.happiness;
        impactSum.sadness += selectedImpact.sadness;
        impactSum.stress += selectedImpact.stress;
      } else {
        // หักลบ impact ของคำตอบก่อนหน้า
        const previousImpact = questionImpacts[currentQuestionIndex] || { happiness: 0, sadness: 0, stress: 0 };
        impactSum.happiness -= previousImpact.happiness;
        impactSum.sadness -= previousImpact.sadness;
        impactSum.stress -= previousImpact.stress;
      }
  
      // บันทึก impact ของคำถามปัจจุบัน
      questionImpacts[currentQuestionIndex] = selectedImpact;
    }
  }
  
  // ฟังก์ชันไปยังคำถามถัดไป
  function nextQuestion() {
    if (!validateAnswer()) {
      alert("กรุณาตอบคำถามก่อนที่จะไปยังข้อถัดไป");
      return;
    }
  
    // อัปเดต impact ก่อนเปลี่ยนคำถาม
    if (!answeredQuestions.has(currentQuestionIndex)) {
      updateImpact(true);
      answeredQuestions.add(currentQuestionIndex);
    }
  
    saveAnswer();
    currentQuestionIndex++;
    showQuestion();
  }
  
  // ฟังก์ชันย้อนกลับ
  function prevQuestion() {
    if (answeredQuestions.has(currentQuestionIndex)) {
      updateImpact(false);
    }
  
    saveAnswer();
    currentQuestionIndex--;
    showQuestion();
  }
  
  function saveAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      answers[currentQuestionIndex] = selectedOption.value;
    }
  }
  
  function validateAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    return selectedOption !== null;
  }
  

  
  function showAnswers() {
    const answersTable = document.getElementById("answersTable");
    const tbody = answersTable.querySelector("tbody");
  
    tbody.innerHTML = ""; // Clear previous answers
  
    questions.forEach((question, index) => {
      const row = document.createElement("tr");
  
      const cellQuestion = document.createElement("td");
      cellQuestion.textContent = question.text;
      row.appendChild(cellQuestion);
  
      const cellAnswer = document.createElement("td");
      cellAnswer.textContent = answers[index] || "ไม่ได้ตอบ";
      row.appendChild(cellAnswer);
  
      tbody.appendChild(row);
    });
  
    answersTable.style.display = "table"; // Show the table
  }
  
  function submitAssessment(event) {
    event.preventDefault();
    if (!validateAnswer()) {
      alert("กรุณาตอบคำถามทั้งหมดก่อนที่จะส่ง");
      return;
    }
  
    saveAnswer();
    const resultText = `คุณตอบคำถามครบทั้งหมด ${answers.length} ข้อ !`;
    document.getElementById("assessmentResult").textContent = resultText;
    document.getElementById("assessmentForm").style.display = "none";
    showChart();
    showAnswers(); // Show answers in the table
    document.getElementById("answer-show").style.display = "block";
    isAssessmentInProgress = false;
  }
  
  function calculateImpactBasedOnUserInfo() {
    let ageImpact = { happiness: 0, sadness: 0, stress: 0 };
    let genderImpact = { happiness: 0, sadness: 0, stress: 0 };
  
    // ปรับคะแนนตามกลุ่มอายุ
    switch (userInfo.age) {
      case "4-12":
        ageImpact = { happiness: 20, sadness: 10, stress: 10 };
        break;
      case "13-19":
        ageImpact = { happiness: 15, sadness: 20, stress: 10 };
        break;
      case "20-25":
        ageImpact = { happiness: 10, sadness: 20, stress: 25 };
        break;
      case "26-39":
        ageImpact = { happiness: 5, sadness: 25, stress: 30 };
        break;
      case "40-59":
        ageImpact = { happiness: 0, sadness: 30, stress: 35 };
        break;
      case "60+":
        ageImpact = { happiness: 0, sadness: 35, stress: 30 };
        break;
    }
  
    // ปรับคะแนนตามเพศ
    if (userInfo.gender === "female") {
      genderImpact = { happiness: 10, sadness: 10, stress: 5 };
    } else if (userInfo.gender === "male") {
      genderImpact = { happiness: 10, sadness: 5, stress: 10 };
    }
  
    // รวมผลกระทบ
    impactSum.happiness += ageImpact.happiness + genderImpact.happiness;
    impactSum.sadness += ageImpact.sadness + genderImpact.sadness;
    impactSum.stress += ageImpact.stress + genderImpact.stress;
  }


  function showChart() {
    calculateImpactBasedOnUserInfo();
  
    const ctx = document.getElementById("resultChart").getContext("2d");
  
    // คำนวณค่าเฉลี่ยสำหรับแต่ละอารมณ์
    const totalImpact =
      impactSum.happiness + impactSum.sadness + impactSum.stress;
  
    // ป้องกันการหารด้วย 0
    if (totalImpact === 0) {
      happinessPercent = 0;
      sadnessPercent = 0;
      stressPercent = 0;
    } else {
      happinessPercent = Math.max(
        100 - ((impactSum.sadness + impactSum.stress) / totalImpact) * 100,
        0
      );
      sadnessPercent = (impactSum.sadness / totalImpact) * 100;
      stressPercent = (impactSum.stress / totalImpact) * 100;
    }
  
    // สร้างกราฟ
    chartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["ความสุข", "ความเศร้า", "ความเครียด"],
        datasets: [
          {
            data: [happinessPercent, sadnessPercent, stressPercent],
            backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // ทำให้กราฟไม่ต้องรักษาสัดส่วน
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                if (label) {
                  label += ": " + context.raw.toFixed(2) + "%";
                }
                return label;
              },
            },
          },
        },
      },
    });
  
    document.getElementById("happy").textContent = happinessPercent
      .toFixed(2)
      .concat(" %");
    document.getElementById("sadly").textContent = sadnessPercent
      .toFixed(2)
      .concat(" %");
    document.getElementById("stress").textContent = stressPercent
      .toFixed(2)
      .concat(" %");
  
    document.getElementById("result-show").style.display = "block";
  
    // แสดงผลลัพธ์
    if (
      happinessPercent === sadnessPercent &&
      happinessPercent === stressPercent
    ) {
      document.getElementById("moodResult").style.color = "blue";
      document.getElementById("moodResult").textContent = `ผลลัพธ์เป็นกลาง!`;
    } else if (
      happinessPercent > sadnessPercent &&
      happinessPercent > stressPercent
    ) {
      document.getElementById("moodResult").style.color = "#36a2eb";
      document.getElementById("moodResult").textContent = `คุณมีความสุข!!!`;
    } else if (
      sadnessPercent > happinessPercent &&
      sadnessPercent > stressPercent
    ) {
      document.getElementById("moodResult").style.color = "#ff6384";
      document.getElementById("moodResult").textContent = `คุณกำลังเศร้า!!!`;
      document.getElementById("solveSad").style.display = 'block'
  
    } else {
      document.getElementById("moodResult").style.color = "#ffcd56";
      document.getElementById("moodResult").textContent = `คุณกำลังเครียด!!!`;
      document.getElementById("solveStress").style.display = 'block'
    }
  }
  
  // ฟังก์ชันเพื่อเลื่อนกลับไปด้านบน
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // แสดงหรือซ่อนปุ่มตามตำแหน่งการเลื่อนของผู้ใช้
  window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) { // แสดงปุ่มเมื่อเลื่อนลงมาที่ 300px
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  
  function handleBeforeUnload(event) {
    if (isAssessmentInProgress) {
      const message = "แบบสอบถามยังไม่เสร็จสิ้น หากออกจากหน้านี้ ข้อมูลจะหายไป";
      event.preventDefault();
      event.returnValue = message; // Standard for most browsers
      return message; // For some browsers
    }
  }
  


  
  document.getElementById("go-answer").addEventListener(
      "click",
      function () {
        document.getElementById("bg-close").style.display = "block";
        document.getElementById("modal").style.display = "block";
        document.body.style.overflow = 'hidden';
      },
      true
    );
  
  document.getElementById("bg-close").addEventListener(
    "click",
    function () {
      document.getElementById("bg-close").style.display = "none";
      document.getElementById("modal").style.display = "none";
      document.getElementById("about-modal").style.display = "none";
      document.body.style.overflow = 'auto';
    },
    true
  );

  document.getElementById("about").addEventListener(
    "click",
    function () {
      document.getElementById("about-modal").style.display = "block";
      document.getElementById("bg-close").style.display = "block";
      document.body.style.overflow = 'hidden';
    },
    true
  );
  
  // document.getElementById("nextButton").addEventListener(
  //   "click",
  //   function () {
  //       console.log("Current Impact Scores:");
  //       console.log("Happiness:", impactSum.happiness);
  //       console.log("Sadness:", impactSum.sadness);
  //       console.log("Stress:", impactSum.stress);
  //   },
  //   true
  // );
  