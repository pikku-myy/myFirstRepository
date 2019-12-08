// Получить кнопку "Начать расчет" через id

let buttonStart = document.getElementById("start");

/*  
    * Получить все блоки в правой части программы через классы 
    * (которые имеют класс название-value, начиная с <div class="budget-value"></div> 
    * и заканчивая <div class="yearsavings-value"></div>) 
*/

let budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let expensesItemInput = document.getElementsByClassName("expenses-item");

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
let approveExpenses = document.getElementsByTagName("button")[0],
    approveOptionalExpenses = document.getElementsByTagName("button")[1],
    countBudget = document.getElementsByTagName("button")[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let chooseIncome = document.querySelector(".choose-income"),
    savingsCheckbox = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

buttonStart.addEventListener("click", function() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money;

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

approveExpenses.addEventListener("click", function() {
    let sum = 0;

    for (let i = 0; i < expensesItemInput.length; i++) {
        let a = expensesItemInput[i].value,
            b = expensesItemInput[++i].value;
             
        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
            && a != "" && b != "" && a.length < 50 ) {
            console.log("done!");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1; // спросить а заново
        }
    }

    expensesValue.textContent = sum;   
    appData.expensesSum = sum;
});

approveOptionalExpenses.addEventListener("click", function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {

        let opt = optionalExpensesItem[i].value;
        console.log("done!");
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";

    }

});

countBudget.addEventListener("click", function() {

    if (appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget - appData.expensesSum)/30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
        
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener("input", function() {
    let item = chooseIncome.value;
    appData.income = item.split(", ");
    incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
        
    }
});

choosePercent.addEventListener("input", function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
        
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: {},
    income:[],
    savings: false,
};
