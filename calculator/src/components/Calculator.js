/* Copyright (c) 2022 gparap */

function Calculator() {
  return(
    <div>
          {/* result */}
          <textarea id="result-text" rows="1">0</textarea>

          {/* buttons 9,8,7,/ */}
          <div>
            <button id="button-9" onclick="" className="button-input" type="button">9</button>
            <button id="button-8" onclick="" className="button-input" type="button">8</button>
            <button id="button-7" onclick="" className="button-input" type="button">7</button>
            <button id="button-divide" onclick="" className="button-input" type="button">/</button>
          </div>

          {/* buttons 6,5,4,* */}
          <div>
            <button id="button-6" onclick="" className="button-input" type="button">6</button>
            <button id="button-5" onclick="" className="button-input" type="button">5</button>
            <button id="button-4" onclick="" className="button-input" type="button">4</button>
            <button id="button-multiply" onclick="" className="button-input" type="button">*</button>
          </div>

          {/* buttons 3,2,1,- */}
          <div>
            <button id="button-3" onclick="" className="button-input" type="button">3</button>
            <button id="button-2" onclick="" className="button-input" type="button">2</button>
            <button id="button-1" onclick="" className="button-input" type="button">1</button>
            <button id="button-minus" onclick="" className="button-input" type="button">-</button>
          </div>

          {/* buttons C,0,=,+ */}
          <div>
            <button id="button-clear" onclick="" class="button-input" type="button">C</button>
            <button id="button-0" onclick="" class="button-input" type="button">0</button>
            <button id="button-equals" onclick="" class="button-input" type="button">=</button>
            <button id="button-add" onclick="" class="button-input" type="button">+</button>
          </div>
    </div>
  );
}

export default Calculator;
