import { Page, Locator } from "playwright";

export class formsPage {
    readonly page:Page;
    readonly form: { [key: string]: Locator};
    readonly datePicker: { [key: string]: Locator};
    readonly btnSubmit:Locator;

    constructor (page:Page) {
        this.page = page;
        this.form = {

            side2 : page.locator('.element-group:nth-child(2)'),
            sForm : page.locator('//span[text()="Practice Form"]'),

            fName : page.locator('#firstName'),
            lName : page.locator('#lastName'),
            email : page.locator('#userEmail'),
            gMale : page.locator('//label[@for="gender-radio-1" and @class="custom-control-label"]'),
            gFemale : page.locator('#gender-radio-2'),
            gOther : page.locator('#gender-radio-3'),
            pNumber : page.locator('#userNumber'),
            dateOfBirth : page.locator('#dateOfBirthInput'),
            subject : page.locator('input#subjectsInput'),
            hobby1 : page.locator('hobbies-checkbox-1'),
            hobby2 : page.locator('hobbies-checkbox-2'),
            hobby3 : page.locator('hobbies-checkbox-3'),
            uploadPicture : page.locator('#uploadPicture'),
            currentAddress : page.locator('#currentAddress'),
            state : page.locator('#state'),
            city : page.locator('#city'),
        }
        this.datePicker = {
            monthDD : page.locator('select.react-datepicker__month-select'),
            yearDD : page.locator('select.react-datepicker__year-select'),
            weekDD : page.locator('select.react-datepicker__day-select'),
            dayPic : page.locator('.react-datepicker__day[aria-label="Choose Tuesday, February 20th, 2024"]'),

        }
        this.btnSubmit = page.locator('#submit');
    }
}