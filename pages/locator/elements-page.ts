import { Page,Locator } from "playwright";

export class ElementsPage {
    readonly page:Page;
    readonly elementMenu: { [key: string]: Locator; };
    readonly textBox: { [key: string]: Locator; };
    readonly checkBox: { [key: string]: Locator; };
    readonly radioButton: { [key: string]: Locator; };
    readonly webTables: { [key: string]: Locator; };
    readonly buttons: { [key: string]: Locator; };
    readonly links: { [key: string]: Locator; };
    readonly UpDown: { [key: string]: Locator; };
    readonly DynamicProperty: { [key: string]: Locator; };

    constructor (page:Page){
        this.page = page;

        //element
        this.elementMenu = {
            side1 : page.locator('.element-group:nth-child(1)'),
            
            sTextBox : page.locator('//span[text()="Text Box"]'),
            sCheckBox : page.locator('//span[text()="Check Box"]'),
            sRadioBox : page.locator('//span[text()="Radio Button"]'),
            sWebTable : page.locator('//span[text()="Web Tables"]'),
            sButton : page.locator('//span[text()="Buttons"]'),
            sLink : page.locator('//span[text()="Links"]'),
            sBrokenLink : page.locator('//span[text()="Broken Links - Images"]'),
            sUploadDownload : page.locator('//span[text()="Upload and Download"]'),
            sDynamicProperty : page.locator('//span[text()="Dynamic Properties"]'),
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

        this.webTables = {
            btnAdd : page.locator('#addNewRecordButton'),
            txtTitle : page.locator('#registration-form-modal'),
            inputfName : page.locator('#firstName'),
            inputlName : page.locator('#lastName'),
            inputEmail : page.locator('#userEmail'),
            inputAge : page.locator('#age'),
            inputSalary : page.locator('#salary'),
            inputDepartement : page.locator('#department'),
            btnSubmit : page.locator('#submit'),

            inputSearch : page.locator('#searchBox'),
            btnSearch : page.locator('#basic-addon2'),
            btnEdit1 : page.locator('#edit-record-1'),
            btnDelete1 : page.locator('#delete-record-1'),
            
            btnList : page.locator('//span[@class="select-wrap -pageSizeOptions"]'),
            btnOption5 : page.locator('//option[@value="5"]'),
            btnOption10 : page.locator('//option[@value="10"]'),
            btnOption20 : page.locator('//option[@value="20"]'),
            btnOption25 : page.locator('//option[@value="25"]'),
        }

        this.buttons = {
            btnDoubleClick : page.locator('#doubleClickBtn'),
            btnRightClick : page.locator('#rightClickBtn'),
            btnDynamic : page.locator('#ngt6K'),

            textDoubleClick : page.locator('#doubleClickMessage'),
            textRightClick : page.locator('#rightClickMessage'),
            textDynamicClick : page.locator('#dynaimcClickMessage'),
        }

        this.links = {
            linkHome : page.locator('#simpleLink'),
            linkHomeIEE : page.locator('#dynamicLink'),
            apiCreated : page.locator('#created'),
            apiNoContent : page.locator('#no-content'),
            apiMoved : page.locator('#moved'),
            apiBadRequest : page.locator('#bad-request'),
            apiUnauthorized : page.locator('#unauthorized'),
            apiForbidden : page.locator('#forbidden'),
            apiInvalidUrl : page.locator('#invalid-url'),
        }

        this.UpDown = {
            btnDownload : page.locator('#downloadButton'),
            btnUpload : page.locator('#uploadFile'),
        }

        this.DynamicProperty = {
            btnVisibleBefore : page.locator('#enableAfter'),
            btnColor : page.locator('#colorChange'),
            btnVisibleAfter : page.locator('#visibleAfter'),
        }
        
    }
}

