const explainTxt = document.getElementById("subname");
const free = document.getElementById("free");
const startbtn = document.getElementById("gobtn");
const title = document.getElementById("name");

let counter = 0;

function translate(){
    counter++;
    console.log("wow");
}

function repeat(){
    if(counter%2 == 0){
        //english();  
    }
    else{
        korean();
    }
}

setInterval(repeat,1000);

function goNextPage(){
    window.location.href = "index2.html";
}

function korean(){
    title.innerHTML = "MBTI 궁합 계산기";
    explainTxt.innerHTML = "나와 상대방의 MBTI궁합을 간편하게 사이트로 조회하세요";
    free.innerHTML = "모든 서비스는 무료입니다!";
}

//데이터 보내기
sessionStorage.setItem("translateCount", counter);//보낼데이터 설정

document.querySelector("#translation").addEventListener("click", translate);