let money = +prompt("Ваш бюждет на месяц?",""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");


let appData = {
    budget : money,
    expenses:{},
    optionalExpenses : {},
    income : [],
    timeData : time,
    savings : false
};

for ( let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");

    if (typeof(a)==='string' && typeof(a)!= null && typeof(b)==='string' && typeof(b)!= null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }  else {

    }
}



appData.monetPerDay = appData.budget / 30;

alert("Ежедневный бюждет: " + appData.monetPerDay);

if(appData.monetPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.monetPerDay > 100 && appData.monetPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.monetPerDay > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log ("Произошла ошибка")
}