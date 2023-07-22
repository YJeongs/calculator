const out = document.querySelector('.out');
let isoperator = false;

//숫자 화면 띄우기
function numberButton() {
    const numberBtn = document.querySelectorAll('.number');
    numberBtn.forEach(number => {
        number.addEventListener('click', (event) => {
            out.value += event.target.innerText;
            isoperator = true;
        })
    })
}

//연산자 화면에 띄우고 계산
function operatorButton() {
    const operatorBtn = document.querySelectorAll('.operator');
    operatorBtn.forEach(operator => {
        operator.addEventListener('click', (event) => {
            if (event.target.innerText === '=') {
                if (out.value.includes('x')){
                    out.value = out.value.replace('x','*');
                }
                else if(out.value.includes('÷')){
                    out.value = out.value.replace('÷','/');
                }
                out.value = eval(out.value);
            }
            else {
                if (isoperator) {
                    out.value += event.target.innerText;
                }
                else{
                    out.value = 'operator error';
                }
                isoperator = false;
            }
        })
    })
}

//초기화
function clearButton() {
    const clearBtn = document.querySelector('.clear');
    clearBtn.addEventListener('click', () => {
        out.value = '';
        operator = '';
    })
}

//값 하나 지우기
function deleteButton() {
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener('click', ()=>{
        out.value = out.value.slice(0,-1);
    })
}

//함수 실행
function excute() {
    numberButton();
    operatorButton();
    clearButton();
    deleteButton();
}
excute();