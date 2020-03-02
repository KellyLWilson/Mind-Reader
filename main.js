

function getRandom() {
    var charArray = ['!', '@', '#', '%', '^', '&', '*'];
    var random = "";
    str = charArray[Math.floor(Math.random() * charArray.length)];
    for (let i = 0; i <= 99; i++) {
        if (i % 9 === 0) {
            random = "<span>" + i + ":" + str + "</span><br />";
        } else {
            random = "<span>" + i + ":" + charArray[Math.floor(Math.random() * charArray.length)] + "</span><br />";
        }
        randomStrings.push(random);
        let singleStr = str;
        
        
    }
    //additional.push(str);
}


//pseudocode

// I need to change state of a variable 

var view = 0;


headings = ["I can read your mind", "Pick a number from 01-99", "Add both digits together to get a new number", "Subtract your new number from the original number"];
paragraph = ["", "when you have your number click next", "Ex: 14 is 1 + 4 = 5", "Ex: 14 - 5 = 9", "Find your new number.", "Your symbol is:"];
additional = ["", "", "click next to proceed", "click next to proceed", "Note the symbol beside the number"];
button2 = ["Go, Home, Home, Home, Home, Home"];
randomStrings = [];

numbers = [];
for (var i = 1; i <= 20; i++) {
    numbers.push(i);
}

// sButton = ["", "NEXT", "NEXT", "NEXT", "REVEAL", ""];

// var sButton_container = document.getElementById("sButtom")
// for(i = 0; i < sButton.length; i++){
//     sButton_container.textContent = "";
// }

//var hidden = false;
//function hideNext() {
//  hidden = !hidden;
//if(view >= 6) {
//  document.getElementById('next').style.visibility = 'hidden';
//} else {
//  document.getElementById('next').style.visibility = 'visible';
//}
//}


//scroll this
function populateRandom() {
    var paragraph_container = document.getElementById("randomStrings");
    if (view == 4) {

        getRandom();
        paragraph_container.style.display = "block";
        paragraph_container.innerHTML = randomStrings.toString().split(',').join("");

    } else {
        paragraph_container.style.display = "none";
    }

}

function viewStr() {  
    if (view == 5) {       
        document.getElementById("singleStr").style.visibility = "visible";        
    } else {
        document.getElementById("singleStr").style.visibility = "hidden";       
    }
}


function hideButton1() {
    var btn = document.getElementById('nextButton');
    if (view >= 6 || view == 0) {
        btn.style.visibility = 'hidden';
    } else {
        btn.style.visibility = 'visible';
    }
}


function hideButtonGo() {
    var btn = document.getElementById('go');
    if (view == 0) {
        btn.style.visibility = 'visible';
    } else {
        btn.style.visibility = 'hidden';
    }
}



function hideButtonRestart() {
    var btn = document.getElementById('restart');
    if (view == 0) {
        btn.style.visibility = 'hidden';
    } else {
        btn.style.visibility = 'visible';
    }
}


function nextView() {
    view++;
    build();
}

function previousView() {
    view--;
    build();
}


function restart() {
    if (view != 0) {
        view = 0;
        build();
    }
}

function build() {
    console.log(
        headings[view], paragraph[view], additional[view], randomStrings[view]);
    var headings_container = document.getElementById("headings");
    headings_container.textContent = headings[view];
    var paragraph_container = document.getElementById("paragraph");
    paragraph_container.textContent = paragraph[view];
    var additional_container = document.getElementById("additional");
    additional_container.textContent = additional[view];

    hideButton1();
    populateRandom();
    hideButtonGo();
    hideButtonRestart();
    viewStr()
}

build();
