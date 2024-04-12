import { Page,Locator } from "playwright";
import { ElementsPage } from "../../locator/elements-page";
import { expect } from "playwright/test";

const faker = require('faker');

export class webTables {
    readonly page:Page;
    constructor (page:Page){this.page = page;}

    async addNewData() {
        const element = new ElementsPage (this.page);
        await element.elementMenu.sWebTable.isVisible();
        await element.elementMenu.sWebTable.click();

        await element.webTables.btnAdd.click();
        expect (await element.webTables.txtTitle.isVisible()).toBe(true);

        await element.webTables.inputfName.type('Shion');
        await element.webTables.inputlName.type('Kridha');
        await element.webTables.inputEmail.type('shion@email.com');
        await element.webTables.inputAge.type('18');
        await element.webTables.inputSalary.type('12000000');
        await element.webTables.inputDepartement.type('Shion Service');
        await element.webTables.btnSubmit.click();
    }

    async verifyNewData(){
        const element = new ElementsPage (this.page);
        const text1 = await this.page.locator('//div[text()="Shion"]');  
        expect (await element.webTables.txtTitle.isVisible()).toBe(true);
        expect (await text1.isVisible()).toBe(true);
    }

    async searchData(){
        const element = new ElementsPage(this.page);
        await element.webTables.inputSearch.type('Shion');
        await element.webTables.btnSearch.click();
    }

    async verifySearchData(){
        const text1 = await this.page.locator('//idv[text()="Alden"]');
        expect (await text1.isHidden()).toBe(true);
    }

    async faker5data(){
        const element = new ElementsPage(this.page);
        await element.elementMenu.sWebTable.isVisible();
        await element.elementMenu.sWebTable.click();
    
        for (let i = 0; i < 5; i++) {
            await element.webTables.btnAdd.click();
            expect(await element.webTables.txtTitle.isVisible()).toBe(true);
    
            await element.webTables.inputfName.type(faker.name.firstName());
            await element.webTables.inputlName.type(faker.name.lastName());
            await element.webTables.inputEmail.type(faker.internet.email());
            await element.webTables.inputAge.type(String(faker.datatype.number({ min: 18, max: 65 })));
            await element.webTables.inputSalary.type(String(faker.datatype.number({ min: 50000, max: 200000 })));
            await element.webTables.inputDepartement.type(faker.commerce.department());
    
            await element.webTables.btnSubmit.click();
        }
    }

    async limitListAndVerify(){
        const element = new ElementsPage(this.page);
        const list6 = await this.page.locator('//div[@class="rt-tr-group"][6]');
        const list11 = await this.page.locator('//div[@class="rt-tr-group"][11]');
        const list21 = await this.page.locator('//div[@class="rt-tr-group"][21]');
        const list26 = await this.page.locator('//div[@class="rt-tr-group"][26]');
        
        await element.webTables.btnList.isVisible();
        await element.webTables.btnList.click();
        await element.webTables.btnOption.selectOption({ value: '5' });
        expect (await list6.isHidden()).toBe(true);

        await element.webTables.btnList.isVisible();
        await element.webTables.btnList.click();
        await element.webTables.btnOption.selectOption({ value: '10' });
        expect (await list11.isHidden()).toBe(true);
        expect (await list6.isVisible()).toBe(true);

        await element.webTables.btnList.isVisible();
        await element.webTables.btnList.click();
        await element.webTables.btnOption.selectOption({ value: '20' });
        expect (await list6.isVisible()).toBe(true);
        expect (await list11.isVisible()).toBe(true);
        expect (await list21.isHidden()).toBe(true);

        await element.webTables.btnList.isVisible();
        await element.webTables.btnList.click();
        await element.webTables.btnOption.selectOption({ value: '25' });
        expect (await list6.isVisible()).toBe(true);
        expect (await list11.isVisible()).toBe(true);
        expect (await list26.isHidden()).toBe(true);
    }
}