//1 ЗАДАЧА
function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%^#@&*!?])(?!.*(.)\1)(?!.*(.)\2)(?=.{8,})[A-Za-z\d$%^#@&*!?]+$/;
    
    if (passwordRegex.test(password)) {
        document.getElementById("resultMessage").textContent = "Пароль корректен!";
    } else {
        document.getElementById("resultMessage").textContent = "Некорректный пароль!";
    }
}

//2 ЗАДАЧА
document.getElementById("checkButton").addEventListener("click", function() {
    var colorInput = document.getElementById("colorInput").value;
    var resultDiv = document.getElementById("result");

    var colorRegex = /^(#(?:[0-9a-fA-F]{3}){1,2}|rgb\((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]|(?:\d|[1-9]\d)%),\s*(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]|(?:\d|[1-9]\d)%),\s*(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]|(?:\d|[1-9]\d)%)\)|hsl\((\d{1,3}),\s*(\d{1,2}|100)%,\s*(\d{1,2}|100)%\))$/;

    if (colorRegex.test(colorInput)) {
        resultDiv.textContent = "Цвет корректен!";
        resultDiv.className = "success";
    } else {
        resultDiv.textContent = "Цвет некорректен!";
        resultDiv.className = "error";
    }
});

//3 ЗАДАЧА
function tokenizeExpression() {
    const expression = document.getElementById('expression').value.trim();
    const tokens = [];
    let currentIndex = 0;
  
    while (currentIndex < expression.length) {
      let token = '';
  
      while (currentIndex < expression.length && expression[currentIndex] === ' ') {
        currentIndex++;
      }
  
      if (/[a-zA-Z_]/.test(expression[currentIndex])) {
        while (currentIndex < expression.length && /[a-zA-Z0-9_]/.test(expression[currentIndex])) {
          token += expression[currentIndex];
          currentIndex++;
        }
        if (['sin', 'cos', 'tg', 'ctg', 'tan', 'cot', 'sinh', 'cosh', 'th', 'cth', 'tanh', 'coth', 'ln', 'lg', 'log', 'exp', 'sqrt', 'cbrt', 'abs', 'sign'].includes(token)) {
          tokens.push({ type: 'function', span: [currentIndex - token.length, currentIndex] });
        } else if (['pi', 'e', 'sqrt2', 'ln2', 'ln10'].includes(token)) {
          tokens.push({ type: 'constant', span: [currentIndex - token.length, currentIndex] });
        } else {
          tokens.push({ type: 'variable', span: [currentIndex - token.length, currentIndex] });
        }
      } else if (/[0-9.]/.test(expression[currentIndex])) {
        while (currentIndex < expression.length && /[0-9.]/.test(expression[currentIndex])) {
          token += expression[currentIndex];
          currentIndex++;
        }
        tokens.push({ type: 'number', span: [currentIndex - token.length, currentIndex] });
      } else if (['^', '*', '/', '-', '+'].includes(expression[currentIndex])) {
        tokens.push({ type: 'operator', span: [currentIndex, currentIndex + 1] });
        currentIndex++;
      } else if (['(', ')'].includes(expression[currentIndex])) {
        tokens.push({ type: (expression[currentIndex] === '(' ? 'left_parenthesis' : 'right_parenthesis'), span: [currentIndex, currentIndex + 1] });
        currentIndex++;
      } else {
        currentIndex++;
      }
    }
  
    displayTokens(tokens);
  }
  
  function displayTokens(tokens) {
    const tokensDiv = document.getElementById('tokens');
    tokensDiv.innerHTML = '';
    tokens.forEach(token => {
      const span = document.createElement('span');
      span.classList.add('token');
      span.textContent = `{ "type": "${token.type}", "span": [${token.span[0]}, ${token.span[1]}] }`;
      tokensDiv.appendChild(span);
      tokensDiv.appendChild(document.createElement('br'));
    });
  }

  //4 ЗАДАЧА
  function checkDate() {
    var inputDate = document.getElementById("dateInput").value;
    var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\.\/\-]?(0?[1-9]|1[0-2])[\.\/\-]?(?:((?:1[6-9]|[2-9]\d)\d{2})|(?!0{2})\d{2})$|^((?:1[6-9]|[2-9]\d)\d{2})[\.\/\-]?(0?[1-9]|1[0-2])[\.\/\-]?(0?[1-9]|[12][0-9]|3[01])$|^((0?[1-9]|[12][0-9]|3[01])[\s](января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)[\s](?!0{2})\d{2,4})$|^((January|February|March|April|May|June|July|August|September|October|November|December)\s(0?[1-9]|[12][0-9]|3[01]),\s((?:1[6-9]|[2-9]\d)\d{2}))$|^((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(0?[1-9]|[12][0-9]|3[01]),\s((?:1[6-9]|[2-9]\d)\d{2}))$|^((?:1[6-9]|[2-9]\d)\d{2},\s(January|February|March|April|May|June|July|August|September|October|November|December)\s(0?[1-9]|[12][0-9]|3[01]))$|^((?:1[6-9]|[2-9]\d)\d{2},\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(0?[1-9]|[12][0-9]|3[01]))$/;
    var isValid = dateRegex.test(inputDate);
    var resultElement = document.getElementById("resultDate");
    if (isValid) {
      resultElement.textContent = "Дата корректна!";
    } else {
      resultElement.textContent = "Дата некорректна!";
    }
  }