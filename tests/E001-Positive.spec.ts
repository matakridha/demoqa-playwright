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
import { SliderPage } from '../pages/steps/widgets/slider-page';
import { AutoPage } from '../pages/steps/widgets/autoComplate-page';


test.describe('Positive Testing Elements',() => {
    test.beforeEach(async ({page}) => {
        const HomePage = new homePage(page);
        test.setTimeout(120000);
        await page.goto(global.BASE_URL);
        await expect(page).toHaveURL(global.BASE_URL);
       // test.setTimeout(2000);
        await HomePage.goToElement();
    })
    test ('text box - smoke test function', async ({page}) =>{
        const TextBox = new textBox(page);
        await TextBox.inputCorrectValue();
        console.log("text box done tested");
    })
    test ('form - smoke test fucntion', async ({page}) =>{
        const FormsPractice = new formsPractice(page);
        const FormsPage = new formsPage(page);
        await FormsPractice.inputValidForm();
        await FormsPage.btnSubmit.click();
        await FormsPractice.verifyFormValue();
        console.log("form done tested");
    })
    test ('check box - smoke test function', async ({page}) => {
        const CheckBox = new checkBox(page);
        await CheckBox.selectDesktop();
        await CheckBox.verifySelectedDesktop();
        await CheckBox.selectVeu();
        await CheckBox.verifySelectedVeu();
        await CheckBox.selectMultiple();
        await CheckBox.verifySelectedMulti();
        console.log("Check box done tested");
    })
    test ('radio box - smoke test function', async ({page}) => {
        const RadioButton = new radioButton(page);
        await RadioButton.selectYes();
        await RadioButton.verifyRadioYes();
        console.log("radio box done tested");
    })
    test ('web tables - smoke test function', async ({page}) => {
        const WebTables = new webTables(page);
        await WebTables.addNewData();
        await WebTables.verifyNewData();
        await WebTables.searchData();
        await WebTables.verifySearchData();
        await WebTables.faker5data();
        await WebTables.limitListAndVerify();
        console.log("web tables done tested");
    })
    test ('buttons - smoke test function', async ({page}) => {
        const buttonsPage = new ButtonsPage(page);
        await buttonsPage.buttonDoubleClick();
        await buttonsPage.verifyButtonRightClick();
        await buttonsPage.buttonDoubleClick();
        await buttonsPage.verifyButtonDbClick();
        await buttonsPage.buttonDynamicClick();
        await buttonsPage.verifyButtonDynamicClick();
        console.log("buttons done tested");
    })
    test ('links - smoke test function', async ({page}) => {
        const linksPage = new LinksPage(page);
        await linksPage.goToLink();
        //click link that open new page and verify it
        await linksPage.openSimpleNewPage();
        await linksPage.verifyNewPage();
        await linksPage.openDynamicNewPage();
        await linksPage.verifyNewPage();
        //call and verify API responds
        await linksPage.callAPIandVerify();
        console.log("links done tested");
    })
    test ('udDown - smoke test function', async ({page}) => {
        const updown = new UpDownPage(page);
        await updown.goToUpDown();
        //download a file and verify it
        await updown.downloadFile();
        //inject a file to upload input
        await updown.injectUpload();
        await updown.verifyUpdload();
        console.log("upload download done tested");
    })
    test ('dynamic property - smoke test function', async ({page}) => {
        const dynamic = new DynamicPage(page);
        await dynamic.goToDynamicProperty();
        await dynamic.waitToEnable();
        await dynamic.verifyDifferent();
        console.log("dynamic property done tested");
    })
});
test.describe('Positive Testing - Alrets',() => {
    test.beforeEach(async ({page}) => {
        const HomePage = new homePage(page);
        test.setTimeout(120000);
        await page.goto(global.BASE_URL);
        await expect(page).toHaveURL(global.BASE_URL);
        await page.waitForTimeout(2000);
        await HomePage.goToAlrets();
    })
    test ('alret - smoke test function', async ({page}) => {
        const alret = new AlretPage(page);
        //issue - alret doesn't appear
        await alret.goToAlret();
        await alret.directAlret();
        console.log("alret done tested");
    })
    test ('modal - smoke test function', async ({page}) => {
        const modal = new ModalPage(page);
        await modal.goToModal();
        await modal.smallModal();
        await modal.verifySmallModal();
        console.log("modal done tested");
    })
});
test.describe('Positive Testing - Widget',() => {
    test.beforeEach(async ({page}) => {
        const HomePage = new homePage(page);
        test.setTimeout(120000);
        await page.goto(global.BASE_URL);
        await expect(page).toHaveURL(global.BASE_URL);
        await page.waitForTimeout(2000);
        await HomePage.goToWidget();
    })
    test ('progress bar - smoke test function', async ({page}) => {
        const progressBar = new ProgressPage(page);
        //issue - alret doesn't appear
        await progressBar.goToProgressBar();
        await progressBar.progress70();
        await progressBar.verifyProgress70();
        await progressBar.progress100();
        await progressBar.verifyProgress100();
        await progressBar.resetProgress();
        await progressBar.verifyresetProgress();
        console.log("progress bar done tested");
    })
    test ('slide bar - smoke test function', async ({page}) => {
        const slidebar = new SliderPage(page);
        await slidebar.goToSlider();
        await slidebar.slideTo40();
        await slidebar.verifySlider40();
        console.log("slide bar done tested");
    })
    test ('auto complate - smoke test function', async ({page}) => {
        const auto = new AutoPage(page);
        await auto.goToAuto();
        await auto.inputMultiAuto();
        await auto.verifyMutliAuto();
        await auto.inputSingleAuto();
        await auto.verifySingleAuto();
        console.log("auto complate done tested");
    })
});

