import operate from "../logic/operate";


test('the operation "+" return a sum', () => {
    expect(operate("5","6", "+")).toBe("11");
});

test('the operation "-" return a minus', () => {
    expect(operate("5","6", "-")).toBe("-1");
});

test('the operation "x" return a Multiplication', () => {
    expect(operate("5","6", "x")).toBe("30");
});

test('the operation "÷" return a division', () => {
    expect(operate("6","3", "÷")).toBe("2");
});

test('the operation "%" return a modular division', () => {
    expect(operate("5","3", "%")).toBe("2");
});
