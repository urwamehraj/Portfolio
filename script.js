const edu = document.getElementById("edu");
const exp = document.getElementById("Exp");
const skill = document.getElementById("skill");
const project = document.getElementById("Projects");
const Ach = document.getElementById("Ach");
const Expo = document.getElementById("Explore");
Expo.addEventListener('click',()=>{
    window.location.href = "https://www.linkedin.com/in/urwa-shaikh-1aba5433a/";
})
project.addEventListener('click',()=>{
    window.location.href="https://github.com/urwamehraj";
});

edu.addEventListener('click',()=>{
    window.location.href ="edu.html";
});
Ach.addEventListener('click',()=>{
    window.location.href ="ach.html";
});
skill.addEventListener('click',()=>{
    window.location.href ="skill.html";
});
exp.addEventListener('click',()=>{
    window.location.href="exp.html";
});