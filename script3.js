let myResults = sessionStorage.getItem("myresult");//데이터 받아오기
let otherResults = sessionStorage.getItem("otherresult");
let transNum = 0;

myResults = myResults.toUpperCase();
otherResults = otherResults.toUpperCase();

const text = myResults+ " and " + otherResults+"'s compatability.";
document.getElementById("text-box").innerHTML += text;

const personalTextme = document.getElementById("explain-me");
const personalTextother = document.getElementById("explain-other");

personalTextme.innerHTML = myResults;
personalTextother.innerHTML = otherResults;
document.getElementById("first").innerHTML = myResults;
document.getElementById("second").innerHTML = otherResults;

const colorbar = document.querySelector("#color-bar");
const explainText = document.getElementById("combination-explain");
const longText = document.getElementById("detailed-explain");
const compare = ['infp','enfp','infj','enfj','intj','entj','intp','entp','isfp','esfp','istp','estp','isfj','esfj','istj','estj'];
myResults = myResults.toLowerCase();
otherResults = otherResults.toLowerCase();
let myresultNum = -1;
let otherresultNum  = -1;

for(let i = 0; i<16; i++){
    if(myResults == compare[i]){
        myresultNum = i;
        console.log(i);
    }
    if(otherResults == compare[i]){
        otherresultNum = i;
        console.log(i);
    }
}

function translate(){
    transNum ++;
}


function isKorean(){
    if(transNum % 2 == 1){
        korean();
    }
    else{
        english();
    }
}

setInterval(isKorean,100);

document.querySelector("#english-korean").addEventListener("click", translate);

function korean(){
    switch(myresultNum){
        case 0:
            personalTextme.innerHTML += "</br>상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형";
            break;
        case 1:
            personalTextme.innerHTML += "</br>창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자";
            break;
        case 2:
            personalTextme.innerHTML += "</br>조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자";
            break;
        case 3:
            personalTextme.innerHTML += "</br>넘치는 카리스마와 영향력으로 청중을 압도하는 리더형";
            break;
        case 4:
            personalTextme.innerHTML += "</br>상상력이 풍부하며, 철두철미한 계획을 세우는 전략가형";
            break;
        case 5:
            personalTextme.innerHTML += "</br>대담하면서도 상상력이 풍부한 강한 의지의 소유자로 다양한 방법을 모색하거나 여의치 않을경우 새로운 방안을 창출하는 리더형";
            break;
        case 6:
            personalTextme.innerHTML += "</br>끊임없이 새로운 지식에 목말라하는 혁신가형";
            break;
        case 7:
            personalTextme.innerHTML += "</br>지적인 도전을 두려워하지 않는 똑똑한 호기심형";
            break;
        case 8:
            personalTextme.innerHTML += "</br>항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형";
            break;
        case 9:
            personalTextme.innerHTML += "</br>주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형";
            break;
        case 10:
            personalTextme.innerHTML += "</br>대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형";
            break;
        case 11:
            personalTextme.innerHTML += "</br>벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형";
            break;
        case 12:
            personalTextme.innerHTML += "</br>소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형";
            break;
        case 13:
            personalTextme.innerHTML += "</br>타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형";
            break;
        case 14:
            personalTextme.innerHTML += "</br>사실에 근거하여 사고하며, 이들의 행동이나 결정 사항에 한 치의 의심을 사지않는 현실주의자형";
            break;
        case 15:
            personalTextme.innerHTML += "</br>현실을 잘 파악하고 리더로서 역할도 잘 수행하는 체계적인 성격의 소유자";
            break;
    }
    switch(otherresultNum){
        case 0:
            personalTextother.innerHTML += "</br>상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형";
            break;
        case 1:
            personalTextother.innerHTML += "</br>창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자";
            break;
        case 2:
            personalTextother.innerHTML += "</br>조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자";
            break;
        case 3:
            personalTextother.innerHTML += "</br>넘치는 카리스마와 영향력으로 청중을 압도하는 리더형";
            break;
        case 4:
            personalTextother.innerHTML += "</br>상상력이 풍부하며, 철두철미한 계획을 세우는 전략가형";
            break;
        case 5:
            personalTextother.innerHTML += "</br>대담하면서도 상상력이 풍부한 강한 의지의 소유자로 다양한 방법을 모색하거나 여의치 않을경우 새로운 방안을 창출하는 리더형";
            break;
        case 6:
            personalTextother.innerHTML += "</br>끊임없이 새로운 지식에 목말라하는 혁신가형";
            break;
        case 7:
            personalTextother.innerHTML += "</br>지적인 도전을 두려워하지 않는 똑똑한 호기심형";
            break;
        case 8:
            personalTextother.innerHTML += "</br>항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형";
            break;
        case 9:
            personalTextother.innerHTML += "</br>주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형";
            break;
        case 10:
            personalTextother.innerHTML += "</br>대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형";
            break;
        case 11:
            personalTextother.innerHTML += "</br>벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형";
            break;
        case 12:
            personalTextother.innerHTML += "</br>소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형";
            break;
        case 13:
            personalTextother.innerHTML += "</br>타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형";
            break;
        case 14:
            personalTextother.innerHTML += "</br>사실에 근거하여 사고하며, 이들의 행동이나 결정 사항에 한 치의 의심을 사지않는 현실주의자형";
            break;
        case 15:
            personalTextother.innerHTML += "</br>현실을 잘 파악하고 리더로서 역할도 잘 수행하는 체계적인 성격의 소유자";
            break;
    }
    switch(condition){
        case 0:
            explainText.innerHTML = "이상적인 관계";
            longText.innerHTML = "문제가 생겨도 잘 해결되고 관계가 자연스럽게 발전됩니다.";
            break;
        case 1:
            explainText.innerHTML = "끈끈한 관계";
            longText.innerHTML = "약간의 어려움이 있을 수 있지만, 금방 타협점을 찾아 좋은관계가 유지될 수 있습니다.";
            break;
        case 2:
            explainText.innerHTML = "잠재적 관계";
            longText.innerHTML = "좋은 관계를 위해서는 서로의 가치관에 변화가 있어야 합니다..";
            break;
        case 3:
            explainText.innerHTML = "충돌관계";
            longText.innerHTML = "둘은 잘 맞지 않을 수 있지만, 서로에대한 양보와 이해가 있다면 관계가 유지될 수 있습니다";
            break;
        case 4:
            explainText.innerHTML = "위험관계";
            longText.innerHTML = "서로가 서로를 이해하고 공감해야지만 관계가 유지될 수 있을 것 입니다. 그렇다고 너무 낙심하지는 마세요 테스트는 테스트일 뿐 이니까요!";
            break;
    }
}

switch(myresultNum){//competibility
    case 0:
        switch(otherresultNum){
            case 0:
                condition = 2;
                break;
            case 1:
                condition = 3;
                break;
            case 2:
                condition = 4;
                break;
            case 3:
                condition = 2;
                break;
            case 4:
                condition = 1;
                break;
            case 5:
                condition = 1;
                break;
            case 6:
                condition = 0;
                break;
            case 7:
                condition = 0;
                break;
            case 8:
                condition = 0;
                break;
            case 9:
                condition = 0;
                break;
            case 10:
                condition = 0;
                break;
            case 11:
                condition = 0;
                break;
            case 12:
                condition = 0;
                break;
            case 13:
                condition = 0;
                break;
            case 14:
                condition = 0;
                break;
            case 15:
                condition = 0;
                break;
        }
        break;
    case 1:
        switch(otherresultNum){
            case 0:
                condition = 1;
                break;
            case 1:
                condition = 2;
                break;
            case 2:
                condition = 0;
                break;
            case 3:
                condition = 0;
                break;
            case 4:
                condition = 0;
                break;
            case 5:
                condition = 0;
                break;
            case 6:
                condition = 0;
                break;
            case 7:
                condition = 0;
                break;
            case 8:
                condition = 0;
                break;
            case 9:
                condition = 0;
                break;
            case 10:
                condition = 0;
                break;
            case 11:
                condition = 0;
                break;
            case 12:
                condition = 0;
                break;
            case 13:
                condition = 0;
                break;
            case 14:
                condition = 0;
                break;
            case 15:
                condition = 0;
                break;
        }
        break;
    case 2:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 3:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 4:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 5:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 6:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 7:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 8:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 9:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 10:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 11:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 12:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 13:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 14:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
    case 15:
        switch(otherresultNum){
            case 0:
                condition = 1
                break;
            case 1:
                condition = 2
            case 2:
                condition = 0
            case 3:
                condition = 10
            case 4:
                condition = 0
            case 5:
                condition = 0
            case 6:
                condition = 0
            case 7:
                condition = 0
            case 8:
                condition = 0
            case 9:
                condition = 0
            case 10:
                condition = 0
            case 11:
                condition = 0
            case 12:
                condition = 0
            case 13:
                condition = 0
            case 14:
                condition = 0
            case 15:
                condition = 0
        }
        break;
}

function english(){
    if (condition == 0){//color and font
        colorbar.style.backgroundColor = "blue";
        explainText.innerHTML = "ideal relationship";
        explainText.style.backgroundColor = "blue";
        longText.innerHTML = "Problems are resolved well and the relationship develops naturally.";
    }
    else if(condition == 1){
        colorbar.style.backgroundColor = "skyblue";
        explainText.innerHTML = "sticky relationship";
        explainText.style.backgroundColor = "skyblue";
        longText.innerHTML = "There may be difficulties, but you find a compromise";
    }
    else if(condition == 2){
        colorbar.style.backgroundColor = "green";
        explainText.innerHTML = "potential relationship";
        explainText.style.backgroundColor = "green";
        longText.innerHTML = "For a strong relationship, you need to find a change in each other's values.";
    }
    else if(condition == 3){
        colorbar.style.backgroundColor = "#e4ae3a";
        explainText.innerHTML = "conflicting relationship";
        explainText.style.backgroundColor = "#e4ae3a";
        longText.innerHTML = "It can only be maintained through compromise and maturity";
    }
    else if(condition == 4){
        colorbar.style.backgroundColor = "rgb(255, 105, 105)";
        explainText.innerHTML = "inappropriate relationship";
        explainText.style.backgroundColor = "rgb(255, 105, 105)";
        longText.innerHTML = "Both of them must give in unconditionally and need empathy.";
    }
}