import calculate from "../logic/calculate";

test('if when "AC" button is pressed the state returns with all values null', () => {
  const state = [
    {
      total: "15",
      next: "22",
      operation: "x",
    }
  ];
  expect(calculate(state, "AC")).toEqual({ "next": null, "operation": null, "total": null });
});

test('if "+/-" button is pressed the and "next" is null, total changes positive to negative and vice versa ', () => {
  const state =
  {
    total: "15",
    next: null,
    operation: "x",
  };

  expect(calculate(state, '+/-').total).toBe('-15');
});

test('if "+/-" button is pressed && "next" is not null, next changes positive to negative and vice versa', () => {
  const state =
  {
    total: "15",
    next: "5",
    operation: "x",
  };

  expect(calculate(state, '+/-').next).toBe('-5');
});

test('if "7" button is pressed && "next" is null && total is NOT null, => next=7', () => {
  const state =
  {
    total: "15",
    next: null,
    operation: "+",
  };

  expect(calculate(state, '7').next).toBe('7');
});

test('if "7" button is pressed && "next" is NOT null, => add 7 to end of next string', () => {
  const state =
  {
    total: "15",
    next: "5",
    operation: "x",
  };

  expect(calculate(state, '7').next).toBe('57');
});

test('if "7" button is pressed && only "total" is NOT null, => next:"7" && "total: null"', () => {
  const state =
  {
    total: "15",
    next: null,
    operation: null,
  };
  expect(calculate(state, '7').next).toBe('7');
  expect(calculate(state, '7').total).toBe(null);
});