import { Page,Locator } from "playwright";

export class AlretsPage{
    readonly page:Page;
    readonly alretsMenu: { [key: string]: Locator;};
    readonly browserWindow: { [key: string]: Locator;};
    readonly alrets: { [key: string]: Locator;};
    readonly frames: { [key: string]: Locator;};
    readonly nestedFrame: { [key: string]: Locator;};
    readonly modalDialogs: { [key: string]: Locator;};

    constructor(page:Page){
        this.page = page;

        this.alretsMenu = {
            sBrowser : page.locator('//span[text()="Browser Windows"]'),
            sAlrets : page.locator('//span[text()="Alerts"]'),
            sFrames : page.locator('//span[text()="Frames"]'),
            sNested : page.locator('//span[text()="Nested Frames"]'),
            sModal : page.locator('//span[text()="Modal Dialogs"]'),
        }

        this.browserWindow = {
            btnTab : page.locator('#tabButton'),
            btnWindow : page.locator('#windowButton'),
            btnWindowMsg : page.locator('#messageWindowButton'),
        }

        this.alrets = {
            btnDirectAlret : page.locator('#alertButton'),
            btnTimeAlret : page.locator('#timerAlertButton'),
            btnConfirmAlret : page.locator('#confirmButton'),
            btnPromptAlert : page.locator('#promtButton'),
        }

        this.frames = {
            txtIframe1 : page.locator('//h1[@id="sampleHeading"][1]'),
            txtIframe2 : page.locator('//h1[@id="sampleHeading"][2]'),
        }

        this.modalDialogs = {
            smallModal : page.locator('#showSmallModal'),
            largeModal : page.locator('#showLargeModal'),
            
            txtSmallTitle : page.locator('//div[text()="Small Modal"]'),
            txtSmallContent : page.locator('//div[@class="modal-body"]'),
            btnSmallClose : page.locator('#closeSmallModal'),
            txtLargeTitle : page.locator('//div[text()="Large Modal"]'),
            txtLargeContent : page.locator('//div[@class="modal-body"]'),
            btnLargeClose : page.locator('#closeLargeModal'),
        }
    }
}