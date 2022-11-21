const formElement = document.getElementById("form");
const resultElement = document.getElementById("result");
const inputElement = document.getElementById("input-field");

formElement.addEventListener("submit", function(e){
    e.preventDefault();

    const DOB = inputElement.value;
    const arr = DOB.split("-");
    const day1 = parseInt(arr[2])
    const month1 = parseInt(arr[1])
    const year1 = parseInt(arr[0])

    const date = new Date();
    const day2 = date.getDate();
    const month2 = 1 + date.getMonth();
    const year2 = date.getFullYear();
    const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(day1 > day2){
        day2 = day2 + monthDays[m2 - 1];
        month2 = month2 - 1;
    }
    if(month1 > month2){
        month2 = month2 + 12;
        year2 = year2 - 1;
    }
    const day = day2 - day1;
    const month = month2 - month1;
    const year = year2 - year1;
    resultElement.innerText = "You are " + year + " years "
    + month +" months "+ day+" days old";
});