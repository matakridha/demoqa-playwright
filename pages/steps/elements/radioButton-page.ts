import { Page, Locator } from "playwright";
import { ElementsPage } from "../../locator/elements-page";
import { expect } from "playwright/test";

export class radioButton {
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async selectYes(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sRadioBox.click();
        await element.radioButton.radioYes.isVisible();
        await element.radioButton.radioYes.click();
    }

    async verifyRadioYes(){
        const text1 = await this.page.locator('//span[contains(text(), "Yes")]');
        expect (await text1.isVisible()).toBe(true);
    }
}