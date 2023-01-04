class Calculator{
    constructor(element){
        this.element = element;
        this.currentScreen = this.element.querySelector('.display-1');  
        this.previousScreen = this.element.querySelector('.display-2');
        this.numberBtn = this.element.querySelectorAll('.number');        
        this.clearEntryBtn = this.element.querySelector('.clearEntry');
        this.clearAllBtn = this.element.querySelector('.clear');
        this.deleteBtn = this.element.querySelector('.delete');
        this.signChangeBtn = this.element.querySelector('.signChange');
        this.operatorBtn = this.element.querySelectorAll('.operator');
        this.equalBtn = this.element.querySelector('.equals');     
        this.currentOperand = '';
        this.previousOperand = '';
        this.currentOperator = '';
        this.result = '';
        this.init()
    }

   init(){    
    this.numberBtn.forEach(num => {
        num.addEventListener('click', () => {
            console.log(num.textContent);
            const {textContent: number} = num;
            //prevent the operand from having more than 1 decimal point
            if(this.currentOperand.includes('.') && number === '.') return 

            if(this.currentOperand.length > 24) return

            if(this.previousOperand && !this.currentOperand){
                this.currentOperand = '';
            }

            //update the value of the currentOperand with the number clicked.
            this.currentOperand += number;
            this.currentOperand = this.currentOperand.replace(/^00/, '0')
            if(this.currentOperand.match(/^00/) && number === "0" && this.currentOperand.match(/^00/)) return
                this.updateDisplay();
            })  
    })

    this.operatorBtn.forEach(op => {
        op.addEventListener('click', () => {
            //use object destructuring to store the value of the operator clicked in the variable operator
            const {textContent: operator} = op;        
            //prevent the operator from being selected if we do not have any operand
            if(!this.currentOperand) return
        
            //if we have the two operands, run the calculate function
            if(this.currentOperand && this.previousOperand && this.currentOperator){
                this.calculate();            
            }else{
                this.result = this.currentOperand;            
            }
            this.currentOperator = operator;
            this.previousOperand += this.currentOperand + ' ' + this.currentOperator + " ";
            this.currentOperand = '';
            this.updateDisplay();
            this.currentScreen.textContent = '0'; 
        })
    }) 

    this.equalBtn.addEventListener('click', () => {    
        if(!this.result) return       
        this.calculate();
        this.previousOperand += this.currentOperand;
        this.currentOperand = this.result;
        this.result = '';
        this.updateDisplay()
        this.previousOperand = '';      
    })

    //reset everything once clear all btn is clicked
    this.clearAllBtn.addEventListener('click', () => {
        this.previousOperand = '';
        this.currentOperand = '';    
        this.currentOperator = '';
        this.result = '';    
        this.updateDisplay()
        this.currentScreen.textContent = '0';
    })

    this.clearEntryBtn.addEventListener('click', () => {   
        this.currentOperand = '';
        this.updateDisplay()
        this.currentScreen.textContent = '0';
    })

    this.deleteBtn.addEventListener('click', () => {
        if(this.currentOperand.length < 1){
        this.currentScreen.value = '0';
        return
        }
        this.currentOperand = this.currentOperand.slice(0, -1);
        this.updateDisplay()    
    })

    this.signChangeBtn.addEventListener('click', () => {
        this.currentOperand = Number(this.currentOperand) * -1;
        this.updateDisplay()
    }) 
   }

   updateDisplay(){
        if(isNaN(this.result) || isNaN(this.currentOperand)) return
        if(this.currentOperand.length > 16){
            this.currentScreen.style.fontSize = '2rem'
        }else if(this.currentOperand.length > 14){
            this.currentScreen.style.fontSize = '3rem'
        }
        else{
            this.currentScreen.style.fontSize = '3.5rem'
        }
        this.previousScreen.textContent = this.previousOperand;
        this.currentScreen.textContent = this.currentOperand;   
    }
    calculate(){
        if(this.currentOperator === '-'){
            this.result = Number(this.result) - Number(this.currentOperand);
        }else if(this.currentOperator === '÷'){
            this.result = Number(this.result) / Number(this.currentOperand);
        }else if(this.currentOperator === '+'){
            this.result = Number(this.result) + Number(this.currentOperand);
        }else if(this.currentOperator === '%'){
            this.result = Number(this.result) % Number(this.currentOperand);
        }else if(this.currentOperator === '×'){
            this.result = Number(this.result) * Number(this.currentOperand);
        }
    }
}
 
const calculatorEl = document.querySelector('.calculator-container');
const calculator = new Calculator(calculatorEl);
