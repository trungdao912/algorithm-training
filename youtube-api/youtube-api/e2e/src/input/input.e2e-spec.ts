import { InputPage } from "./input.po";

describe('InputPage', () => {
  let input: InputPage;

  beforeEach(() => {
    input = new InputPage();
  });

  it('Input work perfectly', () => {
    const inputVal = input.getTheInput();
    inputVal.sendKeys('Test');
    expect(inputVal.getAttribute('value')).toEqual('Test');
  });
});
