import { Page,Locator } from "playwright";

export class WidgetPage{
    readonly page:Page;
    readonly widgetMenu : { [key: string]: Locator;};
    readonly progressBar : { [key: string]: Locator;};
    readonly sliderBar : { [key: string]: Locator;};
    readonly autoComplate : { [key: string]: Locator;};
    readonly toolTips : { [key: string]: Locator;};

    constructor(page:Page){
        this.page = page;

        this.widgetMenu = {
            sAutoComplate : page.locator('//span[text()="Auto Complete"]'),
            sDatePicker : page.locator('//span[text()="Date Picker"]'),
            sSlider : page.locator('//span[text()="Slider"]'),
            sProgressBar : page.locator('//span[text()="Progress Bar"]'),
            sToolTips : page.locator('//span[text()="Tool Tips"]'),
            sSelectMenu : page.locator('//span[text()="Select Menu"]'),
        }

        this.progressBar = {
            barProgress : page.locator('//div[@role="progressbar"]'),
            btnContorl : page.locator('#startStopButton'),
            btnReset : page.locator('#resetButton'),
        }

        this.sliderBar = {
            barSlider : page.locator('//input[@type="range"]'),
            sliderValue : page.locator('#sliderValue'),
        }

        this.autoComplate = {
            inputMultiAuto : page.locator('#autoCompleteMultipleInput'),
            inputSingleAuto : page.locator('#autoCompleteSingleInput'),
        }

        this.toolTips = {
            btnHoover : page.locator('#toolTipButton'),
            inputHoover : page.locator('#texFieldToolTopContainer'),
            linkHoover : page.locator('//a[text()="1.10.32"]'),
        }
    }
}