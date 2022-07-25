// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  test.describe(version + ': Add', () => {
    //function calls for addition, not concatenation, in test toHave value is correct. 
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      
      await page.locator('#calculateButton').click({timeout: 100})

      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });

  test.describe(version + ':  Substract', () => {
    test('Substracting 10 and 2 results in 8', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click({timeout: 100});
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('8');
    });
  });
  test.describe(version + ':  Multiply', () => {
    test('Multyplying 10 and 2 results in 20', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click({timeout: 100000});
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('20');
    });
  });
  test.describe(version + ':  Divide', () => {
    test('Dividing 10 and 2 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
  test.describe(version + ':  Concatenate', () => {
    test('Concatenating 10 and 2 results in 102', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('102');
    });
  });
  //test cases that should result in error
  test.describe(version + ':  Division by zero', () => {
    test('substracting 10 and 0 results in Error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toHaveValue('Divide by zero error!');
    });
  });
  test.describe(version + 'Not numerical imput format (Addintion)', () => {
    test('Adding 10 and A results in Error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('A');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#errorMsgField')).toHaveValue('Number 2 is not a number');
    });
  });
//various input cases, will be tested with addition  function. 
test.describe(version + 'White space in the beggining of input number Addition ', () => {
  test('Adding "  10" and "5" results in 15', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('  10');
    await page.locator('#number2Field').type('5');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('15');
  });
});
test.describe(version + 'White space in the end of input number (Addition) ', () => {
  test('Adding "10  " and "5" results in 15', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('  10');
    await page.locator('#number2Field').type('5');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('15');
  });
});
test.describe(version + 'Leaving first number empty', () => {
  test('First number empty , second number 5 results in 5', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number2Field').type('5');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('5');
  });
});
test.describe(version + 'Leaving second number empty', () => {
  test('First number 7 , second number empty  results in 7', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('7');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('7');
  });
});
test.describe(version + 'e as numerical value', () => {
  test('First number 1e+3, second number 4, operation addition results in 1004', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('1e+3');
    await page.locator('#number2Field').type('4');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('1004');
  });
});
//this test is in progress: to really test if integer only works 1. first take an aswer that is not integer, second "integers only" option. check if the results is the integer of first one. maybe math.floor()
//this test doesn't catch just integers only errors,, if operation is calculated not correctly
test.describe(version + 'Integers only option for results', () => {
  test('First number 7.2, sedond number 2', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('7.2');
    await page.locator('#number2Field').type('2');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#integerSelect').click();
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('9');
  });
});
//In progress locator.isVisible([options])

//options? <Object>
//timeout? <number> DEPRECATED This option is ignored. locator.isVisible([options]) does not wait for the element to become visible and returns immediately.#
//returns: <Promise<boolean>>#
//Returns whether the element is visible.
test.describe(version + 'Integers only option for results not available with Concatenete operation', () => {
  test('First number 7A8, sedond number 2c', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('7A8');
    await page.locator('#number2Field').type('2c');
    await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
    
    await page.locator('#calculateButton').click();
    await page.locator('#integerSelect').click();
    await expect(page.locator('#numberAnswerField')).toHaveValue('');
  });
});

});