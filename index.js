// 13.1

// var number = 10;

// var countdownInterval = setInterval(function() {
//     if(number === 0){
//        console.log("happy New Year!");
//        clearInterval(countdownInterval);
//     }else {
//         console.log(number);
//         number--;
//     }
// }, 1000)


// 13.2

function calculateYearsToRetirment(pension){
    var currentYear = new Date().getFullYear();
    var retirmentAge = 65;
    var yearsToRetirment = retirmentAge - pension;

    if(yearsToRetirment <= 0){
        console.log("Congratulations! you can retire now!");
    }else{
        console.log("You have" + yearsToRetirment + "years until retirment")
    }
}

calculateYearsToRetirment(15);
calculateYearsToRetirment(27);