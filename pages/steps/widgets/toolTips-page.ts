import { test, expect, Page } from '@playwright/test';
import { WidgetPage } from '../../locator/widget-page';

export class ToolTipsPage{
    readonly page:Page;
    constructor(page:Page){this.page = page;}

    async goToTool(){
        const tool = new WidgetPage(this.page);
        await tool.widgetMenu.sToolTips.isVisible();
        await tool.widgetMenu.sToolTips.click();
    }

    async hooverAndVerify(){
        
    }
}