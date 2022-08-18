import React from 'react';
import calculate from '../logic/calculate';

class Components extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState((state) => calculate(state, event.target.textContent));
      }

    render() {
        const { next, total } = this.state;
        return (
            <div className='container'>
                <form>
                    <input type="text" value={next || total || 0}/>
                </form>
                <div className='keypad'>
                    <button type='button' className='firstline' onClick={this.handleClick}>AC</button>
                    <button type='button' className='firstline' onClick={this.handleClick}>+/-</button>
                    <button type='button' className='firstline' onClick={this.handleClick}>%</button>
                    <button type='button' className='extra' onClick={this.handleClick}>&divide;</button>
                    <button type='button' className='secondline' onClick={this.handleClick}>7</button>
                    <button type='button' className='secondline' onClick={this.handleClick}>8</button>
                    <button type='button' className='secondline' onClick={this.handleClick}>9</button>
                    <button type='button' className='extra' onClick={this.handleClick}>x</button>
                    <button type='button' className='thirdline' onClick={this.handleClick}>4</button>
                    <button type='button' className='thirdline' onClick={this.handleClick}>5</button>
                    <button type='button' className='thirdline' onClick={this.handleClick}>6</button>
                    <button type='button' className='extra' onClick={this.handleClick}>-</button>
                    <button type='button' className='fourthline' onClick={this.handleClick}>1</button>
                    <button type='button' className='fourthline' onClick={this.handleClick}>2</button>
                    <button type='button' className='fourthline' onClick={this.handleClick}>3</button>
                    <button type='button' className='extra' onClick={this.handleClick}>+</button>
                    <button type='button' className='cero' onClick={this.handleClick}>0</button>
                    <button type='button' className='dot' onClick={this.handleClick}>.</button>
                    <button type='button' className='equal' onClick={this.handleClick}>=</button>
                </div>
            </div>
        )
    }
}

export default Components;
