let input = document.querySelector("#name");
let btn = document.querySelector("#next");
let result = document.querySelector("#result");

btn.addEventListener("click", function () {
    let username = input.value;   // Input se name lena

    result.innerText = "Welcome"+" "+username;  // 
    
step2.style.display = "block";

});

let yesBtn = document.querySelector("#yes");
let noBtn = document.querySelector("#no");
let output = document.querySelector("#output");

yesBtn.addEventListener("click", function () {

    output.innerText = "";

    let count = 10;

    let timer = setInterval(function () {

        output.innerText += `Countdown ${count} 😊\n`;

        count--;

        if (count < 0) {
            clearInterval(timer);

            output.innerText += `
Good Bye 2025 👋
Welcome 2K26 😊🎉
Happy New Year 2K26 ✨🌟
`;

 step3.style.display = "block";

}},100);
  
});

noBtn.addEventListener("click", function () {
    output.innerText = "You are not ready. You can leave it 😔";
});

let data = {
    family: [
        "Wishing our family a year full of love, health and happiness ❤️",
        "May this New Year bring peace, togetherness and endless smiles to our family ✨",
        "Cheers to another year of love, laughter and family bonding 🎉",
        "May our family stay blessed, united andd strong throughout the year 🙏",
        "Happy New Year to a family that makes every moment special 💫"
    ],

    friend: [
        "Wishing you a year full of success, laughter and great memories my friend 🎉",
        "May this New Year bring new opportunities and endless fun into your life ✨"",
        "Cheers to another year of friendship, growth and crazy moments 😄,
        "Happy New Year to a friend who makes life more awesome 💫",
        "May this year strengthen our bond and bring happiness all around 🤝"
    ]
};

let relationBtns = document.querySelectorAll("#relationship button");
let numberDiv = document.querySelector("#numbers");
let numberBtns = document.querySelectorAll("#numbers button");
let finalresult = document.querySelector("#finalresult");

let current = "";

relationBtns.forEach(function(btn){

    btn.addEventListener("click", function(){

        current = btn.id;
        numberDiv.style.display = "block";

    });

});

numberBtns.forEach(function(btn,index){

    btn.addEventListener("click", function(){

        finalresult.innerText = data[current][index];

    });

});