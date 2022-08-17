let resultMe = ['','','',''];
let resultOther = ['','','',''];

let resultMe_ = "";
let resultOther_ = "";

let compare = ['infp','enfp','infj','enfj','intj','entj','intp','entp','isfp','esfp','istp','estp','isfj','esfj','istj','estj'];


function goNextPage(){
    window.location.href = "index3.html";
}

function getResult(){
    let e_i_1 = document.getElementsByName('e/i-1');
    let e_i_2 = document.getElementsByName('e/i-2');
    let s_n_1 = document.getElementsByName('s/n-1');
    let s_n_2 = document.getElementsByName('s/n-2');
    let t_f_1 = document.getElementsByName('t/f-1');
    let t_f_2 = document.getElementsByName('t/f-2');
    let j_p_1 = document.getElementsByName('j/p-1');
    let j_p_2 = document.getElementsByName('j/p-2');

    for(let i = 0; i<2; i++){
        if(e_i_1[i].checked){
            resultMe[0] = e_i_1[i].value;
        }        
        if(s_n_1[i].checked){
            resultMe[1] = s_n_1[i].value;
        }        
        if(t_f_1[i].checked){
            resultMe[2] = t_f_1[i].value;
        }        
        if(j_p_1[i].checked){
            resultMe[3] = j_p_1[i].value;
        }
    }
    console.log(resultMe);
    
    for(let i = 0; i<4; i++){
        resultMe_ +=resultMe[i];
    }
    console.log(resultMe_);

    for(let i = 0; i<2; i++){
        if(e_i_2[i].checked){
            resultOther[0] += e_i_2[i].value;
        }
        if(s_n_2[i].checked){
            resultOther[1] +=s_n_2[i].value;
        }
        if(t_f_2[i].checked){
            resultOther[2] += t_f_2[i].value;
        }
        if(j_p_2[i].checked){
            resultOther[3] += j_p_2[i].value;
        }
    }
    console.log(resultOther);

    for(let i = 0; i<4; i++){
        resultOther_ += resultOther[i];
    }
    console.log(resultOther_);

    //코드 javascript3.html로 보내기
    let myResults = resultMe_;
    let otherResults = resultOther_;

    sessionStorage.setItem("myresult", myResults);//보낼데이터 설정
    sessionStorage.setItem("otherresult", otherResults);
}

document.querySelector("#text-box").style.color = "white";

function korean(){
    document.getElementById("you").innerHTML = "나";
    document.getElementById("other").innerHTML = "상대";
    document.getElementById("text-box").innerHTML = "MBTI를 체크해주세요";
}
function english(){
    document.getElementById("you").innerHTML = "ME";
    document.getElementById("other").innerHTML = "OTHER";
    document.getElementById("text-box").innerHTML = "Let me know you and other person's MBTI.";
}

let isKorean = true;
function translate(){
    isKorean = !isKorean;
    (isKorean?korean:english)();
}
document.querySelector("#translation").addEventListener("click", translate);

korean();