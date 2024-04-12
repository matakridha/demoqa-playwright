import { Page,Locator } from "playwright";
import { WidgetPage } from "../../locator/widget-page";
import { expect } from "playwright/test";

export class AutoPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToAuto(){
        const widget = new WidgetPage(this.page);
        await widget.widgetMenu.sAutoComplate.isVisible();
        await widget.widgetMenu.sAutoComplate.click();
    }

    async inputMultiAuto(){
        const widget = new WidgetPage(this.page);
        await widget.autoComplate.inputMultiAuto.isVisible();
        
        const autoColor = ['ue', 're', 'low'];
        for (const color of autoColor) {
            // Type the current search term
            await widget.autoComplate.inputMultiAuto.type(color);
            // Press 'Enter'
            await widget.autoComplate.inputMultiAuto.press('Enter');
            await this.page.waitForTimeout(200);
        }
    }
    async verifyMutliAuto(){
        const txt1 = await this.page.locator('//div[text()="Blue"]');
        const txt2 = await this.page.locator('//div[text()="Red"]');
        const txt3 = await this.page.locator('//div[text()="Yellow"]');

        expect (await txt1.isVisible()).toBe(true);
        expect (await txt2.isVisible()).toBe(true);
        expect (await txt3.isVisible()).toBe(true);
    }

    async inputSingleAuto(){
        const widget = new WidgetPage(this.page);
        await widget.autoComplate.inputSingleAuto.isVisible();
        
            // Type the current search term
            await widget.autoComplate.inputMultiAuto.type('Pur');
            // Press 'Enter'
            await widget.autoComplate.inputMultiAuto.press('Enter');
            await this.page.waitForTimeout(200);
    }
    async verifySingleAuto(){
        const txt1 = await this.page.locator('//div[text()="Purple"]');
        expect (await txt1.isVisible()).toBe(true);
    }

//Negative
    async inputSingleAutoWithMulti(){
        const widget = new WidgetPage(this.page);
        await widget.autoComplate.inputSingleAuto.isVisible();
        
        const autoColor = ['pur', 're', 'low'];
        for (const color of autoColor) {
            // Type the current search term
            await widget.autoComplate.inputMultiAuto.type(color);
            // Press 'Enter'
            await widget.autoComplate.inputMultiAuto.press('Enter');
            await this.page.waitForTimeout(200);
        }
    }
}