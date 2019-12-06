let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    question1 = prompt("введите обязательную статью расходов на этот месяц"),
    question2 = +prompt("Во сколько обойдётся?"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {
          question1 : question2  
        },
        // optionalExpenses,
        income:[],
        savings: false,
    };

alert("Ваши свободжные деньги на 1 день: " + (money - question2)/30);