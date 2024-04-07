import { Page,Locator } from "playwright";
import { AlretsPage } from "../../locator/alrets-page";
import { expect } from "playwright/test";

export class ModalPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToModal(){
        const alret = new AlretsPage(this.page);
        await alret.alretsMenu.sModal.isVisible();
        await alret.alretsMenu.sModal.click();
    }

    async smallModal(){
        const alret = new AlretsPage(this.page);
        await alret.modalDialogs.smallModal.isVisible();
        await alret.modalDialogs.smallModal.click();
    }

    async verifySmallModal(){
        const alret = new AlretsPage(this.page);
        expect (await alret.modalDialogs.txtSmallTitle.isVisible()).toBe(true);
        expect (await alret.modalDialogs.txtSmallContent.isVisible()).toBe(true);
        await alret.modalDialogs.btnSmallClose.click();
        await this.page.waitForTimeout(1000);
        expect (await alret.modalDialogs.txtSmallTitle.isHidden()).toBe(true);
    }
    
}