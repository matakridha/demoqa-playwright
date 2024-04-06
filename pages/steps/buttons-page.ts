import { Page,Locator } from "playwright";
import { ElementsPage } from "../locator/elements-page";
import { expect } from "playwright/test";

export class ButtonsPage {
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async buttonDoubleClick(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sButton.isVisible();
        await element.elementMenu.sButton.click();

        await element.buttons.btnDoubleClick.click();
        expect (await element.buttons.textDoubleClick.isHidden()).toBe(true);
        await element.buttons.btnDoubleClick.dblclick();
    }

    async verifyButtonDbClick(){
        const element = new ElementsPage(this.page);
        await element.buttons.btnDoubleClick.isVisible();
        expect (await element.buttons.textDoubleClick.isVisible()).toBe(true);
    }

    async buttonRightClick(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sButton.isVisible();
        await element.elementMenu.sButton.click();

        await element.buttons.btnRightClick.click();
        expect (await element.buttons.textRightClick.isHidden()).toBe(true);
        await element.buttons.btnRightClick.click({button: 'right'});
    }

    async verifyButtonRightClick(){
        const element = new ElementsPage(this.page);
        await element.buttons.btnRightClick.isVisible();
        expect (await element.buttons.textRightClick.isVisible()).toBe(true);
    }

    async buttonDynamicClick(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sButton.isVisible();
        await element.elementMenu.sButton.click();

        await element.buttons.btnDynamic.click({button: 'right'});
        expect (await element.buttons.textDynamicClick.isVisible()).toBe(true);
        await element.buttons.btnDynamic.click();
    }

    async verifyButtonDynamicClick(){
        const element = new ElementsPage(this.page);
        await element.buttons.btnDynamic.isVisible();
        expect (await element.buttons.textDynamicClick.isVisible()).toBe(true);
    }
}