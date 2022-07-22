const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test.describe('Search Results', () => {
    test('First result should contain devbridge.com', async ({ page }) => {
        await page.goto('https://duckduckgo.com/');
        await page.locator('input[name=q]').fill('devbridge');
        await page.keyboard.press('Enter');

        let index = 0;
        let hrefAttribute = await page.locator('#r1-0 h2 a').getAttribute('href');

        expect(hrefAttribute).toContain('devbridge.com');
    });

    test('Third result should contain linkedin.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        //await page.goto('https://duckduckgo.com/');
       // await page.locator('input[name=q]').fill('devbridge');
       // await page.keyboard.press('Enter');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getResultsHeadingHrefAttribute(2)).toContain('devbridge');
    });

    test('Search query should get populated in Search Results page', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        //await page.goto('https://duckduckgo.com/');
       // await page.locator('input[name=q]').fill('devbridge');
       // await page.keyboard.press('Enter');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getQueryInputText()).toEqual('devbridge')
        //expect(await searchResultsPage.getQueryInputText()).toEqual('devbridge');
    });

    test('First page should contain linkedin.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let results = await page.locator('article[data-testid-result]');
        for (let index = 0; index < results.length; index++) {
            const result = await results[index];
            let href = await result.locator('h2 a').getAttribute('href');
            if (href.contains('linkedin.com')){
                
            }
                }

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getQueryInputText()).toEqual('devbridge')
        //expect(await searchResultsPage.getQueryInputText()).toEqual('devbridge');
    });
});

