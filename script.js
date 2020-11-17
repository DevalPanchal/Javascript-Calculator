$(document).ready(function() {

    var currentEntry = [""];
    var dot = ['.'];
    $("a").on("click", function(e){
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (isInteger(buttonPressed)) {
            if (currentEntry === '0') {
                currentEntry = buttonPressed;
            }
            else {
                currentEntry += buttonPressed;
            }
        }
        if (isOperand(buttonPressed))
        {
            currentEntry += buttonPressed;
        }
        else if (buttonPressed === 'AC') 
        {
            currentEntry = '0';
        }
        else if (buttonPressed === "CE")
        {
            currentEntry = currentEntry.substring(0, currentEntry.length-1);
        }
        
        else if ((buttonPressed === '.' && currentEntry[currentEntry.length-1] === '.'))
        {
            currentEntry = currentEntry;
        } 

        else if (buttonPressed === '.')
        {
            currentEntry += buttonPressed;
        }
        
        if(buttonPressed === '=')
        {
            currentEntry = calculateResult(currentEntry);
        }
        
        updateScreen(currentEntry);
    });

    function calculateResult(str)
    {
        return Function(`'use strict'; return (${str})`)()    
    }
    
});

updateScreen = function(displayValue)
{
    $("#steps").html(displayValue);
};

isInteger = function(number)
{
    return !isNaN(number);
};

isOperand = function(operator) 
{
    return operator === '/' || operator === '*' || operator === '+' || operator === "-";
}

