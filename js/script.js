let step = 0;
let answers = [];

const questions = [
{
q:"Quando você gosta de alguém:",
a:["Se apega rápido","Observa primeiro","Foge"]
},
{
q:"Seu maior medo no amor:",
a:["Ser traído","Não ser amado","Perder liberdade"]
},
{
q:"Em um relacionamento você é:",
a:["Intenso","Equilibrado","Independente"]
}
];

function startTest(){
document.getElementById("landing").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");
showQuestion();
}

function showQuestion(){
let q = questions[step];
document.getElementById("question").innerText = q.q;

let html="";
q.a.forEach((opt,i)=>{
html += `<button onclick="answer(${i})">${opt}</button>`;
});
document.getElementById("answers").innerHTML = html;
}

function answer(i){
answers.push(i);
step++;

if(step < questions.length){
showQuestion();
}else{
document.getElementById("quiz").classList.add("hidden");
document.getElementById("paywall").classList.remove("hidden");
}
}

function fakePay(){
alert("Pagamento teste aprovado ✔");

document.getElementById("paywall").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

let total = answers.reduce((a,b)=>a+b,0);

let perfil="Romântico Intenso ❤️";
if(total>=3) perfil="Emocional Profundo 💘";
if(total>=5) perfil="Coração Independente 🔥";

document.getElementById("profile").innerText = perfil;
}
