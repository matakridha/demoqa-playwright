import { test, expect, Page } from '@playwright/test';
import { textBox } from '../pages/steps/elements/textBox-page';
import { ElementsPage } from '../pages/locator/elements-page';
import { homePage } from '../pages/locator/home-page';
import { formsPractice } from '../pages/steps/elements/formsPractice';
import { formsPage } from '../pages/locator/forms-page';
import { checkBox } from '../pages/steps/elements/checkBox-page';
import { radioButton } from '../pages/steps/elements/radioButton-page';
import { webTables } from '../pages/steps/elements/webTables-page';
import { ButtonsPage } from '../pages/steps/elements/buttons-page';
import { LinksPage } from '../pages/steps/elements/links-page';
import { link } from 'fs';
import { UpDownPage } from '../pages/steps/elements/upDown-page';
import { DynamicPage } from '../pages/steps/elements/dynamic-page';
import { AlretPage } from '../pages/steps/alrets/alrets-page';
import { ModalPage } from '../pages/steps/alrets/modal-page';
import { WidgetPage } from '../pages/locator/widget-page';
import { ProgressPage } from '../pages/steps/widgets/progress-page';

const URL = 'https://demoqa.com';

test.describe.only('Positive Testing Elements',() => {
    test.beforeEach(async ({page}) => {
        await page.goto(URL);
        await expect(page).toHaveURL(URL);
    })
    test ('text box - smoke test Input TextBox with correct value', async ({page}) =>{
        const HomePage = new homePage(page);
        const TextBox = new textBox(page);
        await HomePage.goToElement();
        await TextBox.inputCorrectValue();
    })
    test ('form - smoke test Input Form with valid value', async ({page}) =>{
        const HomePage = new homePage(page);
        const FormsPractice = new formsPractice(page);
        const FormsPage = new formsPage(page);
        await HomePage.goToForm();
        await FormsPractice.inputValidForm();
        await FormsPage.btnSubmit.click();
        await FormsPractice.verifyFormValue();
    })
    test ('check box - smoke test function', async ({page}) => {
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
    test ('radio box - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const RadioButton = new radioButton(page);
        await HomePage.goToElement();
        await RadioButton.selectYes();
        await RadioButton.verifyRadioYes();
    })
    test ('web tables - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const WebTables = new webTables(page);
        await HomePage.goToElement();
        await WebTables.addNewData();
        await WebTables.verifyNewData();
        await WebTables.searchData();
        await WebTables.verifySearchData();
        await WebTables.faker5data();
        await WebTables.limitListAndVerify();
    })
    test ('buttons - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const buttonsPage = new ButtonsPage(page);
        await HomePage.goToElement();
        await buttonsPage.buttonDoubleClick();
        await buttonsPage.verifyButtonRightClick();
        await buttonsPage.buttonDoubleClick();
        await buttonsPage.verifyButtonDbClick();
        await buttonsPage.buttonDynamicClick();
        await buttonsPage.verifyButtonDynamicClick();
    })
    test ('links - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const linksPage = new LinksPage(page);
        await HomePage.goToElement();
        await linksPage.goToLink();
        //click link that open new page and verify it
        await linksPage.openSimpleNewPage();
        await linksPage.verifyNewPage();
        await linksPage.openDynamicNewPage();
        await linksPage.verifyNewPage();
        //call and verify API responds
        await linksPage.callAPIandVerify();
    })
    test ('udDown - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const updown = new UpDownPage(page);

        await HomePage.goToElement();
        await updown.goToUpDown();
        //download a file and verify it
        await updown.downloadFile();
        //inject a file to upload input
        await updown.injectUpload();
        await updown.verifyUpdload();
    })
    test ('dynamic property - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const dynamic = new DynamicPage(page);

        await HomePage.goToElement();
        await dynamic.goToDynamicProperty();
        await dynamic.waitToEnable();
        await dynamic.verifyDifferent();
    })
});

test.describe('Positive Testing - Alrets',() => {
    test.beforeEach(async ({page}) => {
        await page.goto(URL);
        await expect(page).toHaveURL(URL);
    })
    test ('alret - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const alret = new AlretPage(page);
        //issue - alret doesn't appear
        await HomePage.goToAlrets();
        await alret.goToAlret();
        await alret.directAlret();
    })
    test ('modal - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const modal = new ModalPage(page);
        
        await HomePage.goToAlrets();
        await modal.goToModal();
        await modal.smallModal();
        await modal.verifySmallModal();
    })
});
test.describe('Positive Testing - Widget',() => {
    test.beforeEach(async ({page}) => {
        await page.goto(URL);
        await expect(page).toHaveURL(URL);
    })
    test ('progress bar - smoke test function', async ({page}) => {
        const HomePage = new homePage(page);
        const progressBar = new ProgressPage(page);
        //issue - alret doesn't appear
        await HomePage.goToWidget();
        await progressBar.goToProgressBar();
        await progressBar.progress70();
        await progressBar.verifyProgress70();
        await progressBar.progress100();
        await progressBar.verifyProgress100();
        await progressBar.resetProgress();
        await progressBar.verifyresetProgress();
    })
});

