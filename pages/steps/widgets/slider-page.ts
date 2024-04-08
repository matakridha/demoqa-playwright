import { Page,Locator } from "playwright";
import { WidgetPage } from "../../locator/widget-page";
import { expect } from "playwright/test";

export class SliderPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToSlider(){
        const widget = new WidgetPage(this.page);
        await widget.widgetMenu.sSlider.isVisible();
        await widget.widgetMenu.sSlider.click();
    }

    async slideTo40(){
        const widget = new WidgetPage(this.page);
        const slider = await this.page.$('.range-slider.range-slider--primary');

        // Check if the slider element is found
        if (slider) {
            // Execute JavaScript to set the value of the slider
            await slider.evaluate((element: any) => {
                // Set the value attribute of the input element to 40
                element.setAttribute('value', '40');
                // Dispatch input event to update the slider visually
                element.dispatchEvent(new Event('input', { bubbles: true }));
                // Dispatch change event to ensure the value is updated
                element.dispatchEvent(new Event('change', { bubbles: true }));
            });
        } else {
            console.error('Slider element not found.');
        
        }
    }

    async verifySlider40(){
        const widget = new WidgetPage(this.page);
        const sliderValue = await this.page.locator('//input[@type="range" and @value="40"]');
        expect (await sliderValue.isVisible()).toBe(true);
    }
}