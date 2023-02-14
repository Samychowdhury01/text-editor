// text style start
getElement('bold').addEventListener('click', function(){
    
    const text = getTextareaValue();

    if(text.style.fontWeight == 'bold'){
        text.style.fontWeight = 'normal';
        backgroundTransparent('bold')

    }
    else{
        text.style.fontWeight = 'bold';
        activeStatus('bold')

    }
    
    
})

getElement('italic').addEventListener('click', function(){
   
    const text = getTextareaValue();

    if(text.style.fontStyle == 'italic'){
        text.style.fontStyle = 'normal';
        backgroundTransparent('italic')

    }
    else{
        text.style.fontStyle = 'italic';
        activeStatus('italic')

    }
    
})

getElement('underline').addEventListener('click', function(){
   
    const text = getTextareaValue();

     if(text.style.textDecoration == 'underline'){
        text.style.textDecoration = 'none';
        backgroundTransparent('underline')

    }
    else{
        text.style.textDecoration = 'underline';
        activeStatus('underline')

    }
    
})


// text style end

// ------------------------------------------------------------------

// text alignment Start

getElement('left').addEventListener('click', function(){
   
    const text = getTextareaValue();

    if(text.style.textAlign == 'left'){
        text.style.textAlign = 'left';
        backgroundTransparent('left')

    }
    else{
        text.style.textAlign = 'left';
        activeStatus('left')

    }
   
})

getElement('center').addEventListener('click', function(){
   
    const text = getTextareaValue();

     if(text.style.textAlign == 'center'){
        text.style.textAlign = 'left';
        backgroundTransparent('center')

    }
    else{
        text.style.textAlign = 'center';
        activeStatus('center')

    }
   
})

getElement('right').addEventListener('click', function(){
   
    const text = getTextareaValue();
    
    if(text.style.textAlign == 'right'){
        text.style.textAlign = 'left';
        backgroundTransparent('right')

    }
    else{
        text.style.textAlign = 'right';
        activeStatus('right')

    }
   
})

getElement('justify').addEventListener('click', function(){
   
    const text = getTextareaValue();

    if(text.style.textAlign == 'justify'){
        text.style.textAlign = 'left';
        backgroundTransparent('justify')

    }
    else{
        text.style.textAlign = 'justify';
        activeStatus('justify')

    }
   
})

// text alignment end

// uppercase

getElement('uppercase').addEventListener('click', function(){
   
    const text = getTextareaValue();

     if(text.style.textTransform == 'uppercase'){
        text.style.textTransform = 'lowercase';
        backgroundTransparent('uppercase')

    }
    else{
        text.style.textTransform = 'uppercase';
        activeStatus('uppercase')

    }
   
})

// -------------------------------------------------------------------

// Color 
getElement('color').addEventListener('change', function(){
    const value = getTextareaValue();
    const fontColor = getInputValue("color");
    value.style.color = fontColor;
})

// -------------------------------------------------------------------

// font Size

getElement('font-size').addEventListener('change', function(){
    const value = getTextareaValue();
    const fontSize = getInputValue("font-size");
    value.style.fontSize = fontSize + 'px';
})