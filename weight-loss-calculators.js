/*
    GET REFERENCES TO ALL THE NECESSARY ELEMENTS.
*/
const calculator = document.getElementById("calculator"),
calculatorSelect = document.getElementById("calculator-select"),
calculatorMeasurement = document.getElementById("calculator-measurement"),
calculatorGender = document.getElementById("calculator-gender"),
calculator1Input = document.getElementById("calculator-1-input"),
calculator1TextA = document.getElementById("calculator-1-text-a"),
calculator1TextB = document.getElementById("calculator-1-text-b"),
calculator2InputA = document.getElementById("calculator-2-input-a"),
calculator2TextA = document.getElementById("calculator-2-text-a"),
calculator2InputB = document.getElementById("calculator-2-input-b"),
calculator2TextB = document.getElementById("calculator-2-text-b"),
weightLabel = document.getElementById("weight-label"),
ageContainer = document.getElementById("age-container"),
calculator3Input = document.getElementById("calculator-3-input"),
submitButton = document.getElementById("submit-button"),
weightResults = document.getElementById("weight-results");

/*
    ADD EVENT LISTENERS TO THE NECESSARY ELEMENTS.
*/
[calculatorSelect, calculatorMeasurement, calculatorGender].forEach((e) => {
        e.addEventListener("change", () => {
        prepareCalculator();
    });
});
submitButton.addEventListener("click", () => {
    calculateWeight();
});

/*
    PREPARE THE CALCULATOR DEPENDING ON WHICH CALCULATOR AND MEASUREMENT WERE CHOSEN.
*/
function prepareCalculator() {
    
    // If the BMI Calculator was chosen.
    if (calculatorSelect.value === "BMI Calculator") {
        calculator1TextA.textContent = "Weight:";
        // weightLabel.style.marginLeft = "70px";
        ageContainer.style.display = "none";
        calculatorGender.parentNode.style.display = "none";
        submitButton.textContent = "Calculate BMI";
        
        // If the BMI Calculator AND imperial measurement were chosen.
        if (!calculatorMeasurement.checked) {
            calculator1Input.value = "160";
            calculator1Input.max = "999";
            calculator1TextB.textContent = "\u00A0lbs";
            calculator2InputA.value = "5";
            calculator2InputA.max = "10";
            calculator2TextA.textContent = "\u00A0ft";
            calculator2InputB.value = "5";
            calculator2InputB.max = "12";
            calculator2InputB.style.display = "inline-block";
            calculator2TextB.textContent = "\u00A0in";
            calculator2TextB.style.display = "inline-block";
        
        // If the BMI Calculator AND metric measurement were chosen.
        } else {
            calculator1Input.value = "70";
            calculator1Input.max = "635";
            calculator1TextB.textContent = "\u00A0kg";
            calculator2InputA.value = "165";
            calculator2InputA.max = "272";
            calculator2TextA.textContent = "\u00A0cm";
            calculator2InputB.style.display = "none";
            calculator2TextB.style.display = "none";
        }
    
    // If the BAI Calculator was chosen.    
    } else {
        calculator1TextA.textContent = "Hip circumference:";
        // weightLabel.style.marginLeft = "187px";
        ageContainer.style.display = "block";
        calculatorGender.parentNode.style.display = "flex";
        submitButton.textContent = "Calculate BAI";
        
        // If the BAI Calculator AND imperial measurement were chosen.
        if (!calculatorMeasurement.checked) {
            calculator1Input.value = "35";
            calculator1Input.max = "999";
            calculator1TextB.textContent = "\u00A0in";
            calculator2InputA.value = "5";
            calculator2InputA.max = "10";
            calculator2TextA.textContent = "\u00A0ft";
            calculator2InputB.value = "5";
            calculator2InputB.max = "12";
            calculator2InputB.style.display = "inline-block";
            calculator2TextB.textContent = "\u00A0in";
            calculator2TextB.style.display = "inline-block";
        
        // If the BAI Calculator AND metric measurement were chosen.
        } else {
            calculator1Input.value = "90";
            calculator1Input.max = "635";
            calculator1TextB.textContent = "\u00A0cm";
            calculator2InputA.value = "165";
            calculator2InputA.max = "272";
            calculator2TextA.textContent = "\u00A0cm";
            calculator2InputB.style.display = "none";
            calculator2TextB.style.display = "none";
        }
    }
    
    /*
        Reset the weightResults div.
    */
    weightResults.innerHTML = "Your result is…";

    /* 
        Get the first input of the calculator ready for insertion.
    */
    calculator1Input.focus();
    calculator1Input.select();
} 

/*
    CALCULATE THE RESULT.
*/
function calculateWeight() {
    
    // If the BMI Calculator was chosen.
    if (calculatorSelect.value === "BMI Calculator") {

        /* 
            Calculate the BMI index and the lower and upper healthy weight ranges.
        */
        weight = calculator1Input.value;
        // If imperial measurement was chosen.
        if (!calculatorMeasurement.checked) {
            weight = weight * 703;
            height = (+calculator2InputA.value * 12) + +calculator2InputB.value, // Get the height in inches.
            lowerWeightRange = ((18.5 * Math.pow(height,2)) / 703).toFixed(1);
            upperWeightRange = ((24.9 * Math.pow(height,2)) / 703).toFixed(1);
        // If metric measurement was chosen.
        } else {
            height = (+calculator2InputA.value) / 100; // Convert centimetres into metres.
            lowerWeightRange = (18.5 * Math.pow(height,2)).toFixed(1);
            upperWeightRange = (24.9 * Math.pow(height,2)).toFixed(1);
        }
        weightResult = (weight / Math.pow(height,2)).toFixed(1); // BMI is calculated as kg/m² or (lbs x 703)/in²
        
        weightResult < 18.5 ? weightInterpretation = "underweight"
        : weightResult < 25 ? weightInterpretation = "being at your healthy weight"
        : weightResult < 30 ? weightInterpretation = "overweight"
        : weightInterpretation = "obese";

        
        /* 
            Prepare the output text.
        */
        weightCalculator="BMI";
        weightUnit="";
        furtherInfo=`According to the BMI, your healthy weight range is <span style="font-weight:800">${+lowerWeightRange}</span> to <span style="font-weight:800">${+upperWeightRange}</span> ${calculator1TextB.textContent}`;
    
    
    // If the BAI Calculator was chosen.
    } else {

        /* 
            Calculate the BAI index.
        */
        // If imperial measurement was chosen.
        if (!calculatorMeasurement.checked) {
            hipCircumference = calculator1Input.value * 2.54, // Convert inches to centimetres.
            height = (+calculator2InputA.value * 12) + +calculator2InputB.value, // Get the height in inches.
            height = height  / 39.37; // Convert inches to metres.
        // If metric measurement was chosen.
        } else {
            hipCircumference = calculator1Input.value,
            height = (+calculator2InputA.value) / 100; // Convert centimetres into metres.
        }
        weightResult = ((hipCircumference / Math.pow(height, 1.5)) - 18).toFixed(1); // BAI is calculated as (cm / m¹⁵) - 18
        
        /* 
            Interpret the BAI index.
        */
        age = calculator3Input.value; // Get the age of the person.
        // If female was chosen.
        if (calculatorGender.checked) {
            if (age < 40) {
                weightGuideline = `<span style="font-weight:800">21%</span> to <span style="font-weight:800">33%</span>`;
                if (weightResult < 21) {              
                    weightInterpretation = "underweight";
                } else if (weightResult <= 33) {
                    weightInterpretation = "being at your healthy weight";
                } else if (weightResult <= 39) {
                    weightInterpretation = "overweight";
                } else if (weightResult > 39) {
                    weightInterpretation = "obese";
                }
            } else if (age < 60) {
                weightGuideline = `<span style="font-weight:800">23%</span> to <span style="font-weight:800">35%</span>`;
                if (weightResult < 23) {              
                    weightInterpretation = "underweight"; 
                } else if (weightResult <= 35) {
                    weightInterpretation = "being at your healthy weight";
                } else if (weightResult <= 41) {
                    weightInterpretation = "overweight";
                } else if (weightResult > 41) {
                    weightInterpretation = "obese";
                }
            } else if (age < 80) {
                weightGuideline = `<span style="font-weight:800">25%</span> to <span style="font-weight:800">38%</span>`;
                if (weightResult < 25) {              
                    weightInterpretation = "underweight"; 
                } else if (weightResult <= 38) {
                    weightInterpretation = "being at your healthy weight";
                } else if (weightResult <= 43) {
                    weightInterpretation = "overweight";
                } else if (weightResult > 43) {
                    weightInterpretation = "obese";
                }
            }
        }
        // If male was chosen.
        else {
            if (age < 40) {
                weightGuideline = `<span style="font-weight:800">8%</span> to <span style="font-weight:800">21%</span>`;
                if (weightResult < 8) {              
                    weightInterpretation = "underweight";
                } else if (weightResult <= 21) {
                    weightInterpretation = "being at your healthy weight";
                } else if (weightResult <= 26) {
                    weightInterpretation = "overweight";
                } else if (weightResult > 26) {
                    weightInterpretation = "obese";
                } 
            } else if (age < 60) {
                weightGuideline = `<span style="font-weight:800">11%</span> to <span style="font-weight:800">23%</span>`;
                if (weightResult < 11) {              
                    weightInterpretation = "underweight"; 
                } else if (weightResult <= 23) {
                    weightInterpretation = "being at your healthy weight";
                } else if (weightResult <= 29) {
                    weightInterpretation = "overweight";
                } else if (weightResult > 29) {
                    weightInterpretation = "obese";
                }
            } else if (age < 80) {
                weightGuideline = `<span style="font-weight:800">13%</span> to <span style="font-weight:800">25%</span>`;
                if (weightResult < 13) {              
                    weightInterpretation = "underweight"; 
                } else if (weightResult <= 25) {
                    weightInterpretation = "being at your healthy weight";
                } else if (weightResult <= 31) {
                    weightInterpretation = "overweight";
                } else if (weightResult > 31) {
                    weightInterpretation = "obese";
                }
            }
        }

        /* 
            Prepare the output text.
        */
        weightCalculator="BAI";
        weightUnit="%";
        furtherInfo=`Your estimated healthy BAI is ${weightGuideline}`

    }

    /* 
        Shoot out the output text.
    */
    weightResults.innerHTML = `<div style="padding-right:2px;padding-left:2px;text-align:center">Your ${weightCalculator} is <span style="font-weight:800">${+weightResult}${weightUnit}</span>, which classes you as ${weightInterpretation}. ${furtherInfo}.</div>`;

}
