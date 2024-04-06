import { Page,Locator } from "playwright";

export class ElementsPage {
    readonly page:Page;
    readonly elementMenu: { [key: string]: Locator; };
    readonly textBox: { [key: string]: Locator; };
    readonly checkBox: { [key: string]: Locator; };
    readonly radioButton: { [key: string]: Locator; };

    constructor (page:Page){
        this.page = page;

        //element
        this.elementMenu = {
            side1 : page.locator('.element-group:nth-child(1)'),
            
            sTextBox : page.locator('//span[text()="Text Box"]'),
            sCheckBox : page.locator('//span[text()="Check Box"]'),
            sRadioBox : page.locator('//span[text()="Radio Button"]'),
            sWebTable : page.locator('li#item-0.btn.btn-light'),
            sButton : page.locator('li#item-0.btn.btn-light'),
            sLink : page.locator('li#item-0.btn.btn-light'),
            sBrokenLink : page.locator('li#item-0.btn.btn-light'),
            sUploadDownload : page.locator('li#item-0.btn.btn-light'),
            sDynamicProperty : page.locator('li#item-0.btn.btn-light'),
        };

        this.textBox = {
            inputFullName : page.locator('#userName'),
            inputEmail : page.locator('#userEmail'),
            inputCurrentAddress : page.locator('#currentAddress'),
            inputPermaAddress : page.locator('#permanentAddress'),
            btnSubmit : page.locator('button[id=submit]'),
        };

        this.checkBox = {
            //note : precending-sibling to select the first and following-sibling to select the second one
            dropHome : page.locator('//label[@for="tree-node-home"]/preceding-sibling::button[@class="rct-collapse rct-collapse-btn"]'),
            checkHome : page.locator('//span[@class="rct-title" and text()="Home"]/following-sibling::span[@class="rct-checkbox"]'),
            dropDesktop : page.locator('//button[@class="rct-collapse rct-collapse-btn"]/preceding-sibling::label[@for="tree-node-desktop"]'),
            checkDesktop : page.locator ('//span[text()="Desktop"]'),
            dropDocuments : page.locator('//label[@for="tree-node-documents"]/preceding-sibling::button[@class="rct-collapse rct-collapse-btn"]'),
            checkDocuments : page.locator ('//span[text()="Documents"]'),
            dropWorkspaces : page.locator('//label[@for="tree-node-workspace"]/preceding-sibling::button[@class="rct-collapse rct-collapse-btn"]'),
            checkWorkspaces : page.locator ('//span[text()="WorkSpace"]'),
            checkVeu : page.locator('//span[text()="Veu"]'),
            checkAngular : page.locator('//span[text()="Angular"]'),
            dropDownloads : page.locator('//label[@for="tree-node-documents"]/preceding-sibling::button[@class="rct-collapse rct-collapse-btn"]'),
            checkDownloads : page.locator ('//span[text()="Downloads"]'),
        }

        this.radioButton = {
            radioYes : page.locator('#yesRadio'),
            radioImpressive : page.locator('#impressiveRadio'),
            radioDisable : page.locator('#noRadio'),
        }
    }
}

