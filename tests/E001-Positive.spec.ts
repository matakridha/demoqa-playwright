import { test, expect, Page } from '@playwright/test';
import { textBox } from '../pages/steps/textBox-page';
import { ElementsPage } from '../pages/locator/elements-page';
import { homePage } from '../pages/locator/home-page';
import { formsPractice } from '../pages/steps/formsPractice';
import { formsPage } from '../pages/locator/forms-page';
import { checkBox } from '../pages/steps/checkBox-page';
import { radioButton } from '../pages/steps/radioButton-page';

const URL = 'https://demoqa.com';

test.describe('Positive Testing',() => {
    test.beforeEach(async ({page}) => {
        await page.goto(URL);
        await expect(page).toHaveURL(URL);
    })
    test ('text box - Input TextBox with correct value', async ({page}) =>{
        const HomePage = new homePage(page);
        const TextBox = new textBox(page);
        await HomePage.goToElement();
        await TextBox.inputCorrectValue();
    })
    test ('form - Input Form with valid value', async ({page}) =>{
        const HomePage = new homePage(page);
        const FormsPractice = new formsPractice(page);
        const FormsPage = new formsPage(page);
        await HomePage.goToForm();
        await FormsPractice.inputValidForm();
        await FormsPage.btnSubmit.click();
        await FormsPractice.verifyFormValue();
    })
    test ('check box - function', async ({page}) => {
        const HomePage = new homePage(page);
        const CheckBox = new checkBox(page);
        await HomePage.goToElement();
        await CheckBox.selectDesktop();
        await CheckBox.verifySelectedDesktop();
        await CheckBox.selectVeu();
        await CheckBox.verifySelectedVeu();
        await CheckBox.selectMultiple();
        await CheckBox.verifySelectedMulti();
    })
    test ('radio box - test function', async ({page}) => {
        const HomePage = new homePage(page);
        const RadioButton = new radioButton(page);
        await HomePage.goToElement();
        await RadioButton.selectYes();
        await RadioButton.verifyRadioYes();
    })
});

