class Calculator{
    constructor(element){
        this.element = element;
        this.currentScreen = this.element.querySelector('.display-1');  
        this.previousScreen = this.element.querySelector('.previousvalue');
        this.numberBtn = this.element.querySelectorAll('.number');
        this. currentOperand = '';
        this.previousOperand = '';
        this.currentOperator = '';
        this.result = '';
        this.init()
    }

   init(){
    // const currentScreen = this.element.querySelector('.display-1');
    // console.log('war')
    // this.currentScreen.textContent = 'pussy'
    console.log(this.numberBtn)
    this.numberBtn.forEach(num => {
        console.log(num.textContent)
    })
    // this.numberBtn.forEach(num=> {
    //     //use object destruction to save the value of any clicked button to the variable called number
    //     const {textContent: number} = num;

    //     //prevent the operand from having more than 1 decimal point
    //     if(this.currentOperand.includes('.') && number === '.') return 
        
    //     if(this.currentOperand.length > 24) return
        
         
    //     if(this.previousOperand && !this.currentOperand){
    //         this.currentOperand = '';
    //     }
        
    //     //update the value of the currentOperand with the number clicked.
    //     this.currentOperand += number;
    //     this.currentOperand = this.currentOperand.replace(/^00/, '0')
    //     // if(currentOperand.match(/^00/) && number === "0" && currentOperand.match(/^00/)) return
    //     updateDisplay();  
    // })
   }

//    updateDisplay(){
//     // if(isNaN(result) || isNaN(currentOperand)) return
//     if(this.currentOperand.length > 16){
//         this.currentScreen.style.fontSize = '2rem'
//     }else if(this.currentOperand.length > 14){
//         this.currentScreen.style.fontSize = '3rem'
//     }
//     else{
//         this.currentScreen.style.fontSize = '3.5rem'
//     }
//     this.previousScreen.textContent = previousOperand;
//     this.currentScreen.textContent = currentOperand;   
//     }

}


//Store all the html elements i want to manipulate in variables.


// const currentScreen = document.querySelector('.currentvalue');
// const previousScreen = document.querySelector('.previousvalue');
// const clearEntryBtn = document.querySelector('.clearEntry');
// const clearAllBtn = document.querySelector('.clear');
// const deleteBtn = document.querySelector('.delete');
// const signChangeBtn = document.querySelector('.signChange');
// const operatorBtn = document.querySelectorAll('.operator');
// const numberBtn = document.querySelectorAll('.number');
// const equalBtn = document.querySelector('.equals');




// const currentScreen = calculator.querySelector('.currentvalue'); 
const calculatorEl = document.querySelector('.calculator-container');
const calculator = new Calculator(calculatorEl);
// calculator.update()
// console.log(calculatorEl)