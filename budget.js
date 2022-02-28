function calculate(){
    //parse user input values
    var income = parseInt(document.getElementById("income").value);
    var exp1 = parseInt(document.getElementById("exp1").value);
    var exp2 = parseInt(document.getElementById("exp2").value);
    var exp3 = parseInt(document.getElementById("exp3").value);
    var exp4 = parseInt(document.getElementById("exp4").value);
    
    //calculate sum of expenses
    var total = exp1 + exp2 + exp3 + exp4;
    
    //total expenses must be greater than zero
    if (total <= 0){
        alert("invalid input");
        return false;
    }
    else if (total >income){
        alert("Total Expenses Cannont Be Greater Than Your Income");
        return false;
    }
    else{
        //calculates budget
        var budget = income - total;
        //displays message
        document.getElementById("message").innerHTML = budget;
    }
    
}

