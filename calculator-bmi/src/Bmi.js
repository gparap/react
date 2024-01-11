/* Created by gparap (c) 2024 */

import { useState } from 'react';

function Bmi() {

    //state vars
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(0.0);

    //update height state when input changes
    const UpdateHeightState = (event) => {
        setHeight(event.target.value);
    }

    //update weight state when input changes
    const UpdateWeightState = (event) => {
        setWeight(event.target.value);
    }

    //calculate the body max index based on the formula: BMI = kg / (m * m)
    const Calculate = () => {
        if (isValidated()) {
            setBmi(weight / ((height / 100) * (height / 100)));
        }
    }

    //checks if values are empty
    const isValidated = () => {
        if (height.trim() === '' || weight.trim() === '') {
            alert("Please, enter values...");
            return false;
        }
        return true;
    }

    return {
        height, weight, bmi,
        UpdateHeightState, UpdateWeightState, Calculate,
    };
}

export default Bmi;
