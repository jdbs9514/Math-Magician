import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "../components/calculator"; 

test('test if display show correctly after user interation', () => {
    render(<Calculator />);
    const display = document.querySelector('.display');
    const numberTwo = screen.getByText('2');
    fireEvent.click(numberTwo);
    expect(display.textContent).toBe('2');
    
})