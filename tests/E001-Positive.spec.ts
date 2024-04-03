import { test, expect, Page } from '@playwright/test';
import { textBox } from '../pages/steps/textBox-page';
import { elementsPage } from '../pages/locator/elements-page';
import { homePage } from '../pages/locator/home-page';
import { formsPractice } from '../pages/steps/formsPractice';
import { formsPage } from '../pages/locator/forms-page';

const URL = 'https://demoqa.com';

let TextBox: textBox;
let HomePage: homePage;
let FormsPractice: formsPractice;
let FormsPage: formsPage;
// Initialize elements in a function before using it
export async function initializeElements(page: Page) {
    TextBox = new textBox(page);
    HomePage = new homePage(page);
    FormsPractice = new formsPractice(page);
    FormsPage = new formsPage(page);
}

test.describe('Positive Testing',() => {
    test.beforeEach(async ({page}) => {
        await page.goto(URL);
        await expect(page).toHaveURL(URL);
    })
    test ('Input TextBox with correct value', async ({page}) =>{
        await HomePage.goToElement();
        await TextBox.inputCorrectValue();
    })
    test ('Input Form with valid value', async ({page}) =>{
        await HomePage.goToElement();
        await FormsPractice.inputValidForm();
        await FormsPage.btnSubmit.click();
        await FormsPractice.verifyFormValue();
    })
});

