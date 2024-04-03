import { test, expect, Page } from '@playwright/test';
import { textBox } from '../pages/steps/textBox-page';
import { homePage } from '../pages/locator/home-page';

const URL = 'https://demoqa.com';

let TextBox: textBox;
let HomePage: homePage;
// Initialize elements in a function before using it
export async function initializeElements(page: Page) {
    TextBox = new textBox(page);
    HomePage = new homePage(page);
}

test.describe('Negative Testing',() => {
    test.beforeEach(async ({page}) => {
        await page.goto(URL);
    })
    test ('Input TextBox with null value', async ({page}) =>{
        await HomePage.goToElement();
        await TextBox.inputNothing();
    })
    test ('Input TextBox with incorrect email format', async ({page}) =>{
        await HomePage.goToElement();
        await TextBox.inputIncorrectEmail();
    })
});