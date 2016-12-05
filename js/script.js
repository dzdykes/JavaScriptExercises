function Question1() {
    var dayOfWeek = "";
    var today = new Date();
    switch (today.getDay()) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
    }
    var hour;
    var minute;
    var second;
    var currentTime
    hour = today.getHours();
    if (hour > 12)
    {
        hour = hour - 12 + " PM";
    } else {
        hour = hour + " AM";
    }
    minute = today.getMinutes();
    second = today.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    currentTime = hour + " : " + minute + " : " + second;
    console.log(dayOfWeek + " Hello" + today.getDay());
    document.getElementById("DayOfWeek").textContent = dayOfWeek;
    document.getElementById("CurrentTime").textContent = currentTime;
}

function Question2() {
    window.print();
}

function Question3() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();
    document.getElementById("CurrentDate").textContent = month + "/" + day + "/" + year;
}

function Question4() {
    document.getElementById("AreaTriangle567").textContent = AreaOfTriangle(5, 6, 7);
}

function AreaOfTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    var Area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return Area;
}

var startMarquee;

function Question5(arg) {
    if (arg == 1) {
        startMarquee = setInterval( function() {
            var str = document.getElementById("Q5String").textContent;
            var arr = str.split('');
            var letter = arr.pop();
            arr.unshift(letter);
            document.getElementById("Q5String").textContent = "";
            for (var i = 0; i < str.length; i++) {
                document.getElementById("Q5String").textContent += arr[i];
            }
        }, 100)
    } else {
        clearInterval(startMarquee);
    }
}

function Question6() {
    var year = document.getElementById("IsLeapYear").value;
    if ((year % 4) == 0 && year % 100 != 0) {
        document.getElementById("Q6Span").textContent = "This is a Leap Year!";
    } else if (year % 100 == 0 && year % 400 == 0) {
        document.getElementById("Q6Span").textContent = "This is a Leap Year!";
    } else {
        document.getElementById("Q6Span").textContent = "This is not a Leap Year!";
    }
}

function Question7() {
    for (var year = 2014; year <= 2050; year++) {
        var date = new Date(year, 0, 1);
        console.log(date.getDay());
        if (date.getDay() == 0) {
            document.getElementById("Q7Span").textContent = date.toDateString();
            year=2050;
        }
    }
}

function Question8() {
    var num = Math.floor((Math.random() * 10 + 1));
    var guess = document.getElementById("UserGuess").value;
    if (num == guess) {
        document.getElementById("Q8Span").textContent = "You got it!";
    } else {
        document.getElementById("Q8Span").textContent = "Wrong! Its " + num;
    }
}

function Question9() {
    var today = new Date();
    var christmas = new Date(today.getFullYear(), 11, 25);
    console.log(today);
    console.log(christmas);
    todayUTF = today.getTime();
    christmasUTF = christmas.getTime();
    var diff = christmasUTF - todayUTF;
    if (diff < 0) {
        christmas = new Date(today.getFullYear() + 1, 11, 25);
        christmasUTF = christmas.getTime();
        diff = christmasUTF - todayUTF;
    }
    var daysTillChristmas = diff / 86400000;
    document.getElementById("Q9Span").textContent = Math.floor(daysTillChristmas);
}

function Question10(opr) {
    var num1 = document.getElementById("Operand1").value;
    var num2 = document.getElementById("Operand2").value;
    if (opr == 1)
    {
        var result = num1 * num2;
        document.getElementById("Q10Span").textContent = result;
    } else if (opr == 2) {
        var result = num1 / num2;
        document.getElementById("Q10Span").textContent = result;
    }
}

function Question11() {
    var isC = document.getElementById("CTemp").checked;
    var isF = document.getElementById("FTemp").checked;
    var degree = String.fromCharCode(parseInt("00B0", 16));
    if (isC) {
        var tC = document.getElementById("Temp").value;
        var tnew = tC * (9 / 5) + 32;
        tnew += degree + "F";
    } else if (isF) {
        var tF = document.getElementById("Temp").value;
        var tnew = (tF - 32) * 5 / 9;
        tnew = tnew + degree +"C";
    } else {
        var tnew = "Hm... Something went wrong."
    }

    document.getElementById("Q11Span").textContent = tnew;

}

function Question12() {
    var url = window.location.protocol;
    url += window.location.host;
    url += window.location.pathname;
    document.getElementById("Q12Span").textContent = url;
}