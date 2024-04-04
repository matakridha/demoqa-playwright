import { test, expect, Page } from '@playwright/test';
import { textBox } from '../pages/steps/textBox-page';
import { homePage } from '../pages/locator/home-page';
import { formsPractice } from '../pages/steps/formsPractice';
import { formsPage } from '../pages/locator/forms-page';

const URL = 'https://demoqa.com';

test.describe('Negative Testing',() => {
    test.beforeEach(async ({page}) => {
        await page.goto(URL);
    })
    test ('TextBox - Input TextBox with null value', async ({page}) =>{
        const HomePage = new homePage(page);
        const TextBox = new textBox(page);
        await HomePage.goToElement();
        await TextBox.inputNothing();
    })
    test ('TextBox - Input TextBox with incorrect email format', async ({page}) =>{
        const HomePage = new homePage(page);
        const TextBox = new textBox(page);
        await HomePage.goToElement();
        await TextBox.inputIncorrectEmail();
    })

    test ('Form - Input no Mandatory', async ({page}) =>{
        const HomePage = new homePage(page);
        const FormsPractice = new formsPractice(page);
        await HomePage.goToForm();
        await FormsPractice.notInputMandatory();
        await FormsPractice.verifyErrorMandatory();
    })
});