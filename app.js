var questions = [
    {
      question: "Q1: HTML Stands for",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Q2: CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Q3: Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Q4: Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Q5: Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "Q6: CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "Q7: In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "Q8: In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "Q9: toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "Q10: push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
  ];
  
  var question = document.getElementById("question");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var button = document.getElementById("button");
  var time = document.getElementById("time");
  var index = 0;
  var score = 0;
  var min = 1;
  var sec = 29;
  
  var interval = setInterval(function () {
    time.innerHTML = `0${min}:${sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
      if (min < 0) {
        min = 1;
        sec = 29;
        nextPage();
      }
    }
  }, 1000);
  
  function nextPage() {
    var getOpt = document.getElementsByName("option");
  
    for (var i = 0; i < getOpt.length; i++) {
      if (getOpt[i].checked) {
        var selAnswer = getOpt[i].value;
        var selOption = questions[index - 1][`option${selAnswer}`];
        var correctAnswer = questions[index - 1]["corrAnswer"];
  
        if (selOption == correctAnswer) {
          score++;
        }
      }
  
      getOpt[i].checked = false;
    }
    button.disabled = true;
  
    if (index > questions.length - 1) {
      Swal.fire({
        title: "Good job!",
        text: ((score / questions.length) * 100).toFixed(2),
        icon: "success",
      });
      clearInterval(interval);
    } else {
      question.innerText = questions[index].question;
      opt1.innerText = questions[index].option1;
      opt2.innerText = questions[index].option2;
      opt3.innerText = questions[index].option3;
      index++;
      min = 1;
      sec = 29;
    }
  }
  
  function target() {
    button.disabled = false;
  }

  var nameof=prompt("Please Enter your name to start quiz");
  if(nameof.trim()){
    onload=nextPage();
  }