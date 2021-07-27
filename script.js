let lastOperand = 0;
let operation = null;
let history=[];
const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
    history.push(' ');

})


document.getElementById('btn_dot').addEventListener('click', function () {
    operation = 'dot';
    inputWindow.value+= '.';
    history.push('.');

})


document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
    history.push( "+")

})


document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
    history.push( '-')

})


document.getElementById('btn_prod').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'prod';
    inputWindow.value = '';
    history.push( '*')

})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    operation = 'sqrt';
    inputWindow.value = ''
    history.push(' √');

})

document.getElementById('btn_quot').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'quot';
    inputWindow.value = '';
    history.push( '/');

})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';

    history.push( '-');
})


document.getElementById('btn_journal').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'journal';
     inputWindow.value =history.join('').slice(-15);
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if(operation==='sum'){
    const result=lastOperand+parseFloat(inputWindow.value);
    operation=null;
    lastOperand=0;
    inputWindow.value=result;
    history.push( '=')

    history.push( inputWindow.value)

}

    if(operation==='sqrt'){
        const result=Math.sqrt(parseFloat(inputWindow.value));
        operation=null;
        lastOperand=0;
        inputWindow.value=result;
        history.push( '=')

        history.push( inputWindow.value)
        }
    if(operation==='def'){
        const result=lastOperand-parseFloat(inputWindow.value);
        operation=null;
        lastOperand=0;
        inputWindow.value=result;
        history.push( '=')

        history.push( inputWindow.value)

        }

    if(operation==='prod'){
    const result=lastOperand*parseFloat(inputWindow.value);
    operation=null;
    lastOperand=0;
    inputWindow.value=result;
    history.push( '=')

    history.push( inputWindow.value)

     }
    if(operation==='quot'){
     const result=lastOperand/parseFloat(inputWindow.value);
     operation=null;
    lastOperand=0;
     inputWindow.value=result;
     history.push( '=')

     history.push( inputWindow.value)


    }           
})

document.getElementById('btn_1').addEventListener('click', function () {

    if(inputWindow.value==0){
        inputWindow.value='';
    } 

    inputWindow.value += '1';
    history.push( inputWindow.value)
})


document.getElementById('btn_2').addEventListener('click', function () {

    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '2';
    history.push( inputWindow.value)
})

document.getElementById('btn_3').addEventListener('click', function () {
    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '3';
    history.push( inputWindow.value)

})

document.getElementById('btn_4').addEventListener('click', function () {
    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '4';
    history.push( inputWindow.value)

})

document.getElementById('btn_5').addEventListener('click', function () {
    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '5';
    history.push( inputWindow.value)

})

document.getElementById('btn_6').addEventListener('click', function () {
    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '6';
    history.push( inputWindow.value)

})

document.getElementById('btn_7').addEventListener('click', function () {
    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '7';
    history.push( inputWindow.value)

})

document.getElementById('btn_8').addEventListener('click', function () {
    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '8';
    history.push( inputWindow.value)

})

document.getElementById('btn_9').addEventListener('click', function () {
    if(inputWindow.value==0){
        inputWindow.value='';
    } 
    inputWindow.value += '9';
    history.push( inputWindow.value)

})


document.getElementById('btn_0').addEventListener('click', function () {

    inputWindow.value += '0';
    history.push( inputWindow.value)

})


