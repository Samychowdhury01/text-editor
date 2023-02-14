function getElement(id){
    const element = document.getElementById(id);
    return element;
}

function getTextareaValue(){
    const textareaElement = document.getElementById('text-area');
    return textareaElement;
}

function activeStatus(id){
    
    const element = document.getElementById(id);
    element.style.backgroundColor = '#7DD3FC';
    element.style.borderRadius = '10px'
    element.style.padding = '5px 10px'
    element.style.border = '2px solid black';
}


function backgroundTransparent(id){
    getElement(id).style.background = 'transparent'
    getElement(id).style.border = '0px'
} 

function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}


