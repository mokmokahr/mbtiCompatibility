let myResults = sessionStorage.getItem("myresult");//데이터 받아오기
let otherResults = sessionStorage.getItem("otherresult");

myResults = myResults.toUpperCase();
otherResults = otherResults.toUpperCase();

const personalTextme = document.getElementById("explain-me");
const personalTextother = document.getElementById("explain-other");

personalTextme.innerHTML = myResults;
personalTextother.innerHTML = otherResults;

document.getElementById("first").innerHTML = myResults;
document.getElementById("second").innerHTML = otherResults;
document.getElementById("text-box").innerHTML = myResults+ "&" + otherResults;

const colorbar = document.querySelector("#color-bar");
const explainText = document.getElementById("combination-explain");
const longText = document.getElementById("detailed-explain");
const personalities = ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP', 'ENTP', 'ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'];

let myresultNum = -1;
let otherresultNum  = -1;

for(let i = 0; i<16; i++){
    if(myResults == personalities[i]){
        myresultNum = i;
    }
    if(otherResults == personalities[i]){
        otherresultNum = i;
    }
}

function getPersonalText(result, isKorean) {
    switch(result) {
        case 0: {
            return isKorean ? "상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형" : '';
        }
        case 1: {
            return isKorean ? "창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자" : '';
        }
        case 2: {
            return isKorean ? "조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자" : '';
        }
        case 3: {
            return isKorean ? "넘치는 카리스마와 영향력으로 청중을 압도하는 리더형" : '';
        }
        case 4: {
            return isKorean ? "상상력이 풍부하며, 철두철미한 계획을 세우는 전략가형" : '';
        }
        case 5: {
            return isKorean ? "대담하면서도 상상력이 풍부한 강한 의지의 소유자로 다양한 방법을 모색하거나 여의치 않을경우 새로운 방안을 창출하는 리더형" : '';
        }
        case 6: {
            return isKorean ? "끊임없이 새로운 지식에 목말라하는 혁신가형" : '';
        }
        case 7: {
            return isKorean ? "지적인 도전을 두려워하지 않는 똑똑한 호기심형" : '';
        }
        case 8: {
            return isKorean ? "항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형" : '';
        }
        case 9: {
            return isKorean ? "주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형" : '';
        }
        case 10: {
            return isKorean ? "대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형" : '';
        }
        case 11: {
            return isKorean ? "벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형" : '';
        }
        case 12: {
            return isKorean ? "소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형" : '';
        }
        case 13: {
            return isKorean ? "타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형" : '';
        }
        case 14: {
            return isKorean ? "사실에 근거하여 사고하며, 이들의 행동이나 결정 사항에 한 치의 의심을 사지않는 현실주의자형" : '';
        }
        case 15: {
            return isKorean ? "현실을 잘 파악하고 리더로서 역할도 잘 수행하는 체계적인 성격의 소유자" : '';
        }
    }
}

function korean(condition) {
    personalTextme.innerHTML = myResults+'</br>' + getPersonalText(myresultNum, true);
    personalTextother.innerHTML = otherResults+'</br>' + getPersonalText(otherresultNum, true);

    switch(condition){
        case 0:
            explainText.innerHTML = "이상적인 ";
            longText.innerHTML = "문제가 생겨도 잘 해결되고 관계가 자연스럽게 발전됩니다.";
            break;
        case 1:
            explainText.innerHTML = "끈끈한 ";
            longText.innerHTML = "약간의 어려움이 있을 수 있지만, 금방 타협점을 찾아 좋은관계가 유지될 수 있습니다.";
            break;
        case 2:
            explainText.innerHTML = "잠재적 ";
            longText.innerHTML = "좋은 관계를 위해서는 서로의 가치관에 변화가 있어야 합니다..";
            break;
        case 3:
            explainText.innerHTML = "충돌";
            longText.innerHTML = "둘은 잘 맞지 않을 수 있지만, 서로에대한 양보와 이해가 있다면 관계가 유지될 수 있습니다";
            break;
        case 4:
            explainText.innerHTML = "위험";
            longText.innerHTML = "서로가 서로를 이해하고 공감해야지만 관계가 유지될 수 있을 것 입니다. 그렇다고 너무 낙심하지는 마세요 테스트는 테스트일 뿐 이니까요!";
            break;
    }

    explainText.innerHTML += '관계'
}

function english(){
    personalTextme.innerHTML = myResults+'</br>' + getPersonalText(myresultNum, false);
    personalTextother.innerHTML = otherResults+'</br>' + getPersonalText(otherresultNum, false);

    switch(condition) {
        case 0: {
            colorbar.style.backgroundColor = "#0000ff";
            explainText.style.backgroundColor = "#0000ff";
            explainText.innerHTML = "ideal relationship";
            longText.innerHTML = "Problems are resolved well and the relationship develops naturally.";
        }
        case 1: {
            colorbar.style.backgroundColor = "#87ceeb";
            explainText.style.backgroundColor = "#87ceeb";
            explainText.innerHTML = "sticky relationship";
            longText.innerHTML = "There may be difficulties, but you find a compromise";
        }
        case 2: {
            colorbar.style.backgroundColor = "#00ff00";
            explainText.style.backgroundColor = "#00ff00";
            explainText.innerHTML = "potential relationship";
            longText.innerHTML = "For a strong relationship, you need to find a change in each other's values.";
        }
        case 3: {
            colorbar.style.backgroundColor = "#e4ae3a";
            explainText.style.backgroundColor = "#e4ae3a";
            explainText.innerHTML = "conflicting relationship";
            longText.innerHTML = "It can only be maintained through compromise and maturity";
        }
        case 4: {
            colorbar.style.backgroundColor = "#ff6969";
            explainText.style.backgroundColor = "#ff6969";
            explainText.innerHTML = "inappropriate relationship";
            longText.innerHTML = "Both of them must give in unconditionally and need empathy.";
        }
    }
}

switch(myresultNum){//competibility
    case 0:
        switch(otherresultNum){
            case 10:
            case 11:
            case 15:
                condition = 0;
                break;
            case 4:
            case 5:
            case 14:
                condition = 1;
                break;
            case 0:
            case 3:
            case 7:
            case 8:
            case 9:
            case 12:
            case 13:
                condition = 2;
                break;
            case 1:
            case 6:
                condition = 3;
                break;
            case 2:
                condition = 4;
                break;
        }
        break;
    //['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP', 'ENTP', 'ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'];
    //   0      1         2      3        4       5       6       7       8       9       10      11      12      13      14      15  
    case 1:
        switch(otherresultNum){
            case 15:
                condition = 1;
            case 5:
                condition = 2;
            case 7:
            case 4:
            case 6:
                condition = 3;
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

function korean() {
    personalTextme.innerHTML = myResults+'</br>' + getPersonalText(myresultNum, true);
    personalTextother.innerHTML = otherResults+'</br>' + getPersonalText(otherresultNum, true);

    switch(condition){
        case 0:
            explainText.innerHTML = "이상적인 ";
            longText.innerHTML = "문제가 생겨도 잘 해결되고 관계가 자연스럽게 발전됩니다.";
            break;
        case 1:
            explainText.innerHTML = "끈끈한 ";
            longText.innerHTML = "약간의 어려움이 있을 수 있지만, 금방 타협점을 찾아 좋은관계가 유지될 수 있습니다.";
            break;
        case 2:
            explainText.innerHTML = "잠재적 ";
            longText.innerHTML = "좋은 관계를 위해서는 서로의 가치관에 변화가 있어야 합니다..";
            break;
        case 3:
            explainText.innerHTML = "충돌";
            longText.innerHTML = "둘은 잘 맞지 않을 수 있지만, 서로에대한 양보와 이해가 있다면 관계가 유지될 수 있습니다";
            break;
        case 4:
            explainText.innerHTML = "위험";
            longText.innerHTML = "서로가 서로를 이해하고 공감해야지만 관계가 유지될 수 있을 것 입니다. 그렇다고 너무 낙심하지는 마세요 테스트는 테스트일 뿐 이니까요!";
            break;
    }

    explainText.innerHTML += '관계'
}

function english(){
    personalTextme.innerHTML = myResults+'</br>' + getPersonalText(myresultNum, false);
    personalTextother.innerHTML = otherResults+'</br>' + getPersonalText(otherresultNum, false);

    switch(condition) {
        case 0: {
            colorbar.style.backgroundColor = "#0000ff";
            explainText.style.backgroundColor = "#0000ff";
            explainText.innerHTML = "ideal relationship";
            longText.innerHTML = "Problems are resolved well and the relationship develops naturally.";
            break;
        }
        case 1: {
            colorbar.style.backgroundColor = "#87ceeb";
            explainText.style.backgroundColor = "#87ceeb";
            explainText.innerHTML = "sticky relationship";
            longText.innerHTML = "There may be difficulties, but you find a compromise";
            break;
        }
        case 2: {
            colorbar.style.backgroundColor = "#00ff00";
            explainText.style.backgroundColor = "#00ff00";
            explainText.innerHTML = "potential relationship";
            longText.innerHTML = "For a strong relationship, you need to find a change in each other's values.";
            break;
        }
        case 3: {
            colorbar.style.backgroundColor = "#e4ae3a";
            explainText.style.backgroundColor = "#e4ae3a";
            explainText.innerHTML = "conflicting relationship";
            longText.innerHTML = "It can only be maintained through compromise and maturity";
            break;
        }
        case 4: {
            colorbar.style.backgroundColor = "#ff6969";
            explainText.style.backgroundColor = "#ff6969";
            explainText.innerHTML = "inappropriate relationship";
            longText.innerHTML = "Both of them must give in unconditionally and need empathy.";
            break;
        }
    }
}

english();

let isKorean = false;

document.querySelector("#english-korean").addEventListener("click", function () {
    isKorean = !isKorean;

    (isKorean ? korean : english)();
});

