// let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?");
//     time = prompt("Введите дату в формате YYYY-MM-DD");
//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?");
//     }
// }
// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: { },
//     optionalExpenses: {},
//     income:[],
//     savings: true,
//     chooseExpenses: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Введите обязательные расходы в этом месяце", ""),
//                 b = +prompt("Во сколько обойдётся?", "");
//             if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//                 && a != "" && b != "" && a.length < 50 ) {
//                 console.log("done!");
//                 appData.expenses[a] = b;
//             } else {
//                 i = i - 1; // спросить а заново
//             }
//         } 
//     },
//     detectDayBudget: function() {
//         appData.moneyPerDay = (appData.budget/30).toFixed();
//         alert("Ежедневный бюджет: " + appData.moneyPerDay);
//     },
//     detectLevel: function() {
//         if (appData.moneyPerDay < 100) {
//             console.log("Минимальный уровень достатка");
//         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//             console.log("Средний уровень достатка");
//         } else if (appData.moneyPerDay > 2000) {
//             console.log("Высокий уровень достатка");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     checkSavings: function() {
//         if (appData.savings == true) {
//             let save = +prompt("Какова сумма накоплений?"),
//                 percent = +prompt("Под какой процент?");
    
//             appData.monthIncome = (save/100/12*percent).toFixed();
//             alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//         }
//     },
//     chooseOptExpenses: function() {
//         for (let i = 1; i < 4; i++) {
//             let c = prompt("Введите необязательные расходы в этом месяце", "");
//             if ( (typeof(c)) === "string" && (typeof(c)) != null && c != "" && c.length < 50 ) {
//                 console.log("done!");
//                 appData.optionalExpenses[i] = c;
//             } else {
//                 i = i - 1; // спросить а заново
//             }
//         }
//     },
//     chooseIncome: function() {
//         let item = prompt("Перечислите через запятую ваши дополнительные источники дохода", "");
//         appData.income = item.split(", ");
//         appData.income.push(prompt("Может, что-то ещё? Запишите один источник"));
//         appData.income.sort();

//     },
// };


// Получить кнопку "Начать расчет" через id

let buttonStart = document.getElementById("start");

/*  
    * Получить все блоки в правой части программы через классы 
    * (которые имеют класс название-value, начиная с <div class="budget-value"></div> 
    * и заканчивая <div class="yearsavings-value"></div>) 
*/

let budgetValue = document.getElementsByClassName("budget-value"),
    dayBudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthSavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue = document.getElementsByClassName("yearsavings-value");

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let expensesItemInput = document.getElementsByClassName("expenses-item");

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
let buttons = getElementsByTagName("button"),
    approveExpenses = buttons[0],
    approveOptionalExpenses = buttons[1],
    countBudget = buttons[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let chooseIncome = document.querySelector(".choose-income"),
    savingsCheckbox = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    percent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");