const maxWordLength = 10;
const minResults = 1;
const maxResults = 25;
const forbiddenWords = ["sex", "porn", "violence", "murder"];

//Please , don't remove the following code 
if (typeof window !== 'undefined') {
    window.onload = function() {
        //update the code that handles the form submit
        let form = document.querySelector("form");
        form.onsubmit =function(){
            let qValue = document.getElementById("q").value;
            let numValue = document.getElementById("num").value;

            console.log(document.getElementById("q").value);
            console.log(document.getElementById("num").value);
            console.log("is it a number? :" + qValue +" :"+ isNumber(qValue) );
            console.log("is it has a to long word? :" + qValue +" :"+ hasATooLongWord(qValue) );
            console.log("is it has a forbidden word? :" + qValue +" :"+ hasForbidenWord(qValue) );
            console.log("is rang? " + "num value: "  + isInRange(numValue));

            return isValidFormData(qValue,numValue);
            
        };
    }
}

function isValidFormData(qValue,numValue){

    if(validateQ(qValue) != null){
        alert(validateQ(qValue));
        return false;
    }
    else if (validateNum(numValue) != null){
        alert(validateNum(numValue));
        return false;
    }
    else return true;

    
   
}
//
//return a validation message in case the input is invalid
function validateQ(qValue) {
    let postfix = 'the search box';
    console.log("hasChar(qValue) : "+ hasChar(qValue) + "  qValue.trim().length : " + qValue.trim().length );
    if (hasChar(qValue) && qValue.trim().length > 1) {
        if(isNumber(qValue))    
            return '*Please enter only text ' + postfix;
        else if (hasATooLongWord(qValue)) 
            return `*Please enter words not longer then ${maxWordLength} ${postfix}`;
        else if (hasForbidenWord(qValue)) 
            return `*Please enter words other then ${forbidenWords} ${postfix}`;
    }
    else{
        return `*Please enter at least 2 characters ${postfix}`;
    }
    return null;
}
//return a validation message in case the input is invalid
function validateNum(numValue) {
    if (!isInRange(numValue))    
        return `*Please enter number ${minResults} to ${maxResults} to tell google how many search results we want`;    
    else{
        return null;
    }
}
//
function isInRange(text){
    if(text > 25 || text < 1 || text == null) return false;
    else return true;
}
//
function hasForbidenWord(text) { 
    
    if(/sex/.exec(text) || /porn/.exec(text) || /violence/.exec(text) || /murder/.exec(text)) return true;
    else return false;
}
// 
function hasATooLongWord(text) { 
    
    let words = text.split(' ');

    for(let i=0 ; i < words.length ; i++){
        console.log(words[i].split('').length);
        if((words[i].split('').length) > 10) return true;
    }   
    return false;
}
//
function hasChar(text) {
    if(text != ""){
        if(text == " " || text == undefined || text == null) return false;
    }
    else if(text == "") return false;

    return true;
}
//
function isNumber(text) {
    return (!isNaN(text));
        
}
//Please , don't remove the following code 
if (typeof module !== 'undefined') {
    module.exports = {
        isInRange,
        hasChar,
        isNumber,
        hasForbidenWord,
        hasATooLongWord,
    };
}
