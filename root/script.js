let p_money = prompt("Ваш бюждет на месяц?"),
    p_time = prompt("Введите дату в формате YYYY-MM-DD");
    p_expenses = prompt("Введите обязательную статью расходов в этом месяце");
    p_budget = prompt("Во сколько обойдется?");
    
let appData = {
    budget : p_money,
    timeData : p_time,
    expenses : p_expenses + " " + p_budget,
    optionalExpenses : null,
    income : null,
    savings : false
}
alert(appData.budget - p_budget / 30);