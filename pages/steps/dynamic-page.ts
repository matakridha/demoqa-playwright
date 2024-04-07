import { Page,Locator } from "playwright";
import { ElementsPage } from "../locator/elements-page";
import { expect } from "playwright/test";

export class DynamicPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToDynamicProperty(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sDynamicProperty.isVisible();
        await element.elementMenu.sDynamicProperty.click();
    }

    async waitToEnable(){
        const element = new ElementsPage(this.page);
        expect (await element.DynamicProperty.btnVisibleBefore.isDisabled()).toBe(true);
        expect (await element.DynamicProperty.btnVisibleAfter.isHidden()).toBe(true);
        await this.page.waitForTimeout(5000);
        expect (await element.DynamicProperty.btnVisibleBefore.isEnabled()).toBe(true);
    }

    async verifyDifferent(){
        const element = new ElementsPage(this.page);
        expect (await element.DynamicProperty.btnVisibleAfter.isVisible()).toBe(true);
        expect (await element.DynamicProperty.btnColor.isVisible()).toBe(true);
    }
}
