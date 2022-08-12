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

let isKorean = false;

document.querySelector("#english-korean").addEventListener("click", function(){
    isKorean = !isKorean;

    (isKorean ? korean : english)();
})

function getPersonalText(result, isKorean) {
    switch(result) {
        case 0: {//infp
            return isKorean ? "항상 선을 행할 준비가 되어있는 부드럽고 친절한 이타주의자" : 'Poetric, kind, and altruistic people, always eager to help a good cause';
        }
        case 1: {//enfp
            return isKorean ? "열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼" : 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile';
        }
        case 2: {//infj
            return isKorean ? "차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람에게 의욕을 불어넣어주는 이상주의자" : 'Quiet and mystical, yet very inspiring and tireless idealists.';
        }
        case 3: {//enfj
            return isKorean ? "청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자" : 'Charismatic and inspiring leaders, able to memorize their listeners';
        }
        case 4: {//intj
            return isKorean ? "모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가" : 'Imaginative and strategic thinkers, with a plan for everythinig';
        }
        case 5: {//entj
            return isKorean ? "항상 문제해결 방법을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강력한 지도자" : 'Bold, imaginative and strong-willed leaders, always finding a way - or making one';
        }
        case 6: {//intp
            return isKorean ? "모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가" : 'Innovate inventors with an unquenchable thirst for knowledge.';
        }
        case 7: {//entp
            return isKorean ? "지적 도전을 즐기는 영리하고 호기심이 많은 사색가" : 'Smart and curious thinkers who cannot resist an intellectual challenge.';
        }
        case 8: {//isfp
            return isKorean ? "항시 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가" : 'Flexible and charming artists, always ready to explore and experience something new.';
        }
        case 9: {//esfp
            return isKorean ? "즉흥적이고 넘치는 에너지와 열정으로 주변 사람을 즐겁게 하는 연예인" : 'Spontaneous, energetic and enthusiastic people - life is never boring around them.';
        }
        case 10: {//istp
            return isKorean ? "대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인" : 'Bold and practical experimenters, masters of all kinds of tools.';
        }
        case 11: {//estp
            return isKorean ? "위험을 기꺼이 감수하는 성격으로, 영리하고 에너지 넘치며 관찰력이 뛰어난 사업가" : 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.';
        }
        case 12: {//isfj
            return isKorean ? "주변 사람을 보호할 준비가 되어 있는 헌신적이고 따뜻한 수호자" : 'Very dedicated and warm protectors, always ready to defend their loved ones.';
        }
        case 13: {//esfj
            return isKorean ? "배려심이 넘치고 항상 다른 사람을 도울 준비가 되어있는 성격으로, 인기가 많고 사교성이 높은 마당발" : 'Extraordinarily caring, social and popular people, always eager to help.';
        }
        case 14: {//istj
            return isKorean ? "사실을 중시하는 믿음직한 현실주의자" : 'practical and fact-minded individuals, whose relativity cannot be doubted';
        }
        case 15: {//estj
            return isKorean ? "사물과 사람을 관리하는 데 뛰어난 능력을 지닌 경영자" : 'Excellent administrators, unsurpassed at managing things - or people.';
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
