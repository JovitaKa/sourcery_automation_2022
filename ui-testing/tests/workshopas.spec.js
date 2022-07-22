const { test, expect } = require('@playwright/test');

test.describe('SearchResults', () => {
    test('First result should contain devbridge.com', async ({page}) => {
       await page.goto('https://duckduckgo.com/');
       await page.locator('input[name=q]').fill('devbridge');
       await page.keyboard.press('Enter');

       await expect(page.locator('#r1-0 div div > a')).toContainText('devbridge.com');

       //await page.pause();
    });

    test('Third result should contain linkedin.com', async ({page}) => {
        await page.goto('https://duckduckgo.com/');
        await page.locator('input[name=q]').fill('devbridge');
        await page.keyboard.press('Enter');

        //let hrefAttribute = await page.locator('#r1-2 div div >a').getAttribute('href');
        //await expect(hrefAttribute).toContain('devbridge');
        let index = 2;
        let hrefAttribute = await page.locator(`#r1-${index} div div >a`).getAttribute('href');
        await expect(hrefAttribute).toContain('devbridge');
        await page.pause();
     });
});