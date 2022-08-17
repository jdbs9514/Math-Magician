import React, { useState } from 'react';

export const Components = () => {
    const [result, setResult] = useState('0');
    return (
        <div className='container'>
            <form>
                <input type="text" value={result} />
            </form>
            <div className='keypad'>
                <button type='button' className='firstline'>AC</button>
                <button type='button' className='firstline'>+/-</button>
                <button type='button' className='firstline'>%</button>
                <button type='button' className='extra'>&divide;</button>
                <button type='button' className='secondline'>7</button>
                <button type='button' className='secondline'>8</button>
                <button type='button' className='secondline'>9</button>
                <button type='button' className='extra'>x</button>
                <button type='button' className='thirdline'>4</button>
                <button type='button' className='thirdline'>5</button>
                <button type='button' className='thirdline'>6</button>
                <button type='button' className='extra'>&ndash;</button>
                <button type='button' className='fourthline'>1</button>
                <button type='button' className='fourthline'>2</button>
                <button type='button' className='fourthline'>3</button>
                <button type='button' className='extra'>+</button>
                <button type='button' className='cero'>0</button>
                <button type='button' className='dot'>.</button>
                <button type='button' className='equal'>=</button>
            </div>
        </div>
    )
}
