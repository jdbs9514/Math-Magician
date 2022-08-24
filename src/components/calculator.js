import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
    const [state, setState] = useState(0);
    const handleClick = (event) => {
        setState((state) => calculate(state, event.target.innerHTML));

    };
    return (
        <div className='container'>
            <span className='spantitle'> Let's do some math!</span>
            <form>
                <input type="text" value={state.next || state.total || 0} />
            </form>
            <div className='keypad'>
                <button type='button' className='firstline' onClick={handleClick}>AC</button>
                <button type='button' className='firstline' onClick={handleClick}>+/-</button>
                <button type='button' className='firstline' onClick={handleClick}>%</button>
                <button type='button' className='extra' onClick={handleClick}>&divide;</button>
                <button type='button' className='secondline' onClick={handleClick}>7</button>
                <button type='button' className='secondline' onClick={handleClick}>8</button>
                <button type='button' className='secondline' onClick={handleClick}>9</button>
                <button type='button' className='extra' onClick={handleClick}>x</button>
                <button type='button' className='thirdline' onClick={handleClick}>4</button>
                <button type='button' className='thirdline' onClick={handleClick}>5</button>
                <button type='button' className='thirdline' onClick={handleClick}>6</button>
                <button type='button' className='extra' onClick={handleClick}>-</button>
                <button type='button' className='fourthline' onClick={handleClick}>1</button>
                <button type='button' className='fourthline' onClick={handleClick}>2</button>
                <button type='button' className='fourthline' onClick={handleClick}>3</button>
                <button type='button' className='extra' onClick={handleClick}>+</button>
                <button type='button' className='cero' onClick={handleClick}>0</button>
                <button type='button' className='dot' onClick={handleClick}>.</button>
                <button type='button' className='equal' onClick={handleClick}>=</button>
            </div>
        </div>
    );

}

export default Calculator;
