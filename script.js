const explainTxt = document.getElementById("subname");
const free = document.getElementById("free");
const startbtn = document.getElementById("gobtn");
const title = document.getElementById("name");
const gobtn = document.getElementById("gobtn");
const develops = document.getElementById("developer");

let isKorean = true;
function translate(){
    isKorean = !isKorean;
    (isKorean?korean:english)();
}

function goNextPage(){
    window.location.href = "index2.html";
}

function korean(){
    title.innerHTML = "MBTI 궁합 계산기";
    explainTxt.innerHTML = "나와 상대방의 MBTI궁합을 간편하게 사이트로 조회하세요";
    free.innerHTML = "모든 서비스는 무료입니다!";
    gobtn.innerHTML = "궁합 확인하기";
    develops.innerHTML = "개발:jbmok";
}

function english(){
    title.innerHTML = '"256"combinations';
    explainTxt.innerHTML = "Check out you and other person's compatibility";
    free.innerHTML = "All service is free!";
    gobtn.innerHTML = "Check compatibility";
    develops.innerHTML = "develiper: jbmok";
}

document.querySelector("#translation").addEventListener("click", translate);

korean();