let check = 0; //숫자 함수 입력 자릿수 카운팅 위한 변수
//let click = true; //부호 함수 체크 위한 boolean

function number(num) { //숫자 함수
    if (check <= 2) {
        check++;
        let display = document.getElementById("display");
        display.value = display.value + num;
        click = true; //여기에 click값 true 초기화해도 된다고? 왜?
    }
    //console.log(check);
}

//숫자 입력이 2보다 작거나 같을 때
//check를 +1해줌 ; 
//display에 입력값 띄워주고
//누르는 값 이어서 다 띄워줌
//현재 check값은 3!

function sign(sn) { //부호 함수   
    //if (click) {
        let display = document.getElementById("display");
        display.value = display.value + sn;
        //click = false;
        check=0;       
    // } else {
    //      console.log("부호 입력 끝");        
    // }
}

//숫자 부호 입력 후 숫자 다시 입력되게...
//check값 현재 3 이라서 부호 1번 입력 후 숫자 입력이 안됨 -> check=0; 리셋? 어디서?

//숫자 3자리, 부호 1개, 숫자 3자리까지 누르면 그대로 끝 반복 진행 안됨. -> 또 리셋해주기? 어디서?

function calculate() {
    let display = document.getElementById("display");
    let result = eval(display.value);
    let displayResult = document.getElementById("result");
    displayResult.value = (Math.floor(result));
}

function reset() {
    let display = document.getElementById("display");
    display.value = "";
    let displayResult = document.getElementById("result");
    displayResult.value = "";

    check=0; 
    click=true; 
    //숫자 부호 숫자 결과 c누르면 리셋까지 됨. check랑click=0이라서 다시 계산 시작 가능.
    //두번째 계산 : 처음 숫자 세자리 입력 가능. 부호 입력 안됨. 부호 입력 끝남. click=false라서
    //sign=0; 리셋해줘야되는데 어디에서?  click을 true로 리셋.
    
    //c로 눌러서 계산 재진행 다 가능 그런데
    //c 누르지 않고 결과값에서 바로 부호 입력이 불가능
    //c 루느면 click=true로 바꿔줫는데 왜 안 되지. c를 안 누른 상황이기 때문 click이 아직 false.
    //그럼 c를 안눌렀을때/ 바로 연산 부호 누를 때. 어디지

    //0은 처음에 1회는 입력 안되게 해야함..?
    //첫자리에 부호가 입력되는것도 안되게 해야함? ㄴㄴ괜찮

    //부호 잘못 눌렀을때 다른 부호로 입력되기. 
    //onclick 발생할때마다 boolean값 리셋되기?
    //onclick 1회 -> sign값 입력받음 -> 다음 onclick 2회 -> sign값 리셋되고 다시 새값 입력받기
    //현재 sign onclick 클릭하면 click=false되어있는 상태. 이걸 다시 true로 리셋? 어디서?
}