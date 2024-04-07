import { Page, Locator } from "playwright";
import { ElementsPage } from "../../locator/elements-page";
import { expect } from "playwright/test";
import { text } from "stream/consumers";

export class checkBox {
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async selectDesktop(){
        const elements = new ElementsPage(this.page);
        await elements.elementMenu.sCheckBox.isVisible();
        await elements.elementMenu.sCheckBox.click();
        await elements.checkBox.dropHome.click();
        await elements.checkBox.dropDesktop.isVisible();
        await elements.checkBox.checkDesktop.click();
    }

    async selectVeu(){
        const elements = new ElementsPage(this.page);
        await elements.checkBox.checkDesktop.click();
        await elements.checkBox.dropDocuments.click();
        await elements.checkBox.dropWorkspaces.click();
        await elements.checkBox.checkVeu.click();
    }

    async selectMultiple(){
        const elements = new ElementsPage(this.page);
        await elements.checkBox.checkVeu.click();
        await elements.checkBox.checkAngular.click();
        await elements.checkBox.checkDownloads.click();
    }

    async verifySelectedDesktop(){
        const text1 = await this.page.locator('//span[contains(text(), "desktop")]');
        const text2 = await this.page.locator('//span[contains(text(), "notes")]');
        const text3 = await this.page.locator('//span[contains(text(), "commands")]');
        expect (await text1.isVisible()).toBe(true);
        expect (await text2.isVisible()).toBe(true);
        expect (await text3.isVisible()).toBe(true);
    }
    
    async verifySelectedVeu(){
        const text1 = await this.page.locator('//span[contains(text(), "veu")]')
        expect (await text1.isVisible()).toBe(true);
    }
    async verifySelectedMulti(){
        const text1 = await this.page.locator('//span[contains(text(), "angular")]')
        const text2 = await this.page.locator('//span[contains(text(), "downloads")]')
        const text3 = await this.page.locator('//span[contains(text(), "wordFile")]')
        const text4 = await this.page.locator('//span[contains(text(), "excelFile")]')
        expect (await text1.isVisible()).toBe(true);
        expect (await text2.isVisible()).toBe(true);
        expect (await text3.isVisible()).toBe(true);
        expect (await text4.isVisible()).toBe(true);
    }

}