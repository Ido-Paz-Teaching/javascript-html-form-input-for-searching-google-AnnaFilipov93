//Please , don't remove the following code 
if (typeof window !== 'undefined') {
    window.onload = function() {
        //update the code that handles the form submit
        let form = null;
        form.onsubmit =null;
    }
}
//
//return a validation message in case the input is invalid
function validateQ(qValue) {
    let postfix = 'the search box';
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
    return false;
}
//
function hasForbidenWord(text) {    
    return false;
}
// 
function hasATooLongWord(text) {    
    return false;
}
//
function hasChar(text) {
    return false;
}
//
function isNumber(text) {
    return false;
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
