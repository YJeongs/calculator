//에러 메시지 정의
const ERROR_MESSAGES = {
    INVALID_OPERATOR: 'operator error'
};
   
   // calculator 객체를 정의합니다.
const calculator = {
    // 출력을 관리하는 DOM 요소를 선택합니다.
    out: document.querySelector('.out'),
   
    // 연산자가 입력되었는지 여부를 판단하는 변수입니다.
    isOperator: false,
   
    // 연산자가 유효한지 확인하는 메서드입니다.
    // 입력된 연산자가 유효한지 판단하여 true 또는 false를 반환합니다.
    isValidOperation(operator) {
        return this.isOperator || operator === '=';
    },
   
    // 연산자에 따른 동작을 처리하는 메서드입니다.
    // '=' 연산자의 경우, 수식을 계산하고 그 외 연산자는 수식에 추가합니다.
    processOperator(operator, currentValue) {
        if (operator !== '=') {
            return currentValue + operator;
        } else {
            currentValue = currentValue.replace(/x/g, '*').replace(/÷/g, '/');
            return math.evaluate(currentValue);
        }
    },
   
    // 숫자 버튼을 클릭했을 때의 동작을 처리하는 메서드입니다.
    // 숫자 버튼을 클릭하면 해당 숫자를 출력에 추가하고, 연산자 입력 상태를 true로 설정합니다.
    numberButtonClick() {
        const numberBtn = document.querySelectorAll('.number');
        numberBtn.forEach(number => {
            number.addEventListener('click', (event) => {
                this.out.value += event.target.innerText;
                this.isOperator = true;
            })
        })
    },
   
    // 연산자 버튼을 클릭했을 때의 동작을 처리하는 메서드입니다.
    // 연산자가 유효한 경우 연산자를 처리하고, 그렇지 않은 경우 에러 메시지를 출력합니다.
    operatorButtonClick() {
        const operatorBtn = document.querySelectorAll('.operator');
        operatorBtn.forEach(operator => {
            operator.addEventListener('click', (event) => {
                const operator = event.target.innerText;
                if (this.isValidOperation(operator)) {
                    this.out.value = this.processOperator(operator, this.out.value);
                    this.isOperator = true;
                } else {
                    this.out.value = ERROR_MESSAGES.INVALID_OPERATOR;
                }
            })
        })
    },
   
    // clear 버튼을 클릭했을 때의 동작을 처리하는 메서드입니다.
    // clear 버튼을 클릭하면 출력을 초기화합니다.
    clearButtonClick() {
        const clearBtn = document.querySelector('.clear');
        clearBtn.addEventListener('click', () => {
        this.out.value = '';
        })
    },
   
    // delete 버튼을 클릭했을 때의 동작을 처리하는 메서드입니다.
    // delete 버튼을 클릭하면 출력의 마지막 문자를 제거합니다.
    deleteButtonClick() {
        const deleteBtn = document.querySelector('.delete');
        deleteBtn.addEventListener('click', ()=>{
        this.out.value = this.out.value.slice(0,-1);
        })
    },
   
    // 초기 설정을 진행하는 메서드입니다.
    // 각 버튼의 동작을 설정합니다.
    init() {
        this.numberButtonClick();
        this.operatorButtonClick();
        this.clearButtonClick();
        this.deleteButtonClick();
    },
   }
   
   // calculator 객체를 초기화합니다.
   calculator.init();
