import { expect, Page } from "playwright/test";
import { pageFixture } from "../hooks/pagefixture";
import { PageElement } from "../resources/interface/iPageElement";
import * as bookerPageLocators from "../resources/BookerPage.json"; 

function getResource(resourcesName : string){
    return bookerPageLocators.webElement.find((element : PageElement) => element.elementName == resourcesName) as PageElement
}
export class BookerPage {
    bookerPageLocators = {
        nameField:() => pageFixture.page.locator(getResource('hackme').selectorValue),
        emailField : () => pageFixture.page.locator(getResource('emailname').selectorValue),

    }
public async goToLandingPage():Promise<any>{
        await this.page.goto('https://automationintesting.online/');
    }    
public async goToBookerPage(): Promise<any>{
        await this.bookerPageLocators.nameField().type('AliRaza');
    }
public async typeEmail(): Promise<any>{
    await this.bookerPageLocators.emailField().type('arqureshi.3934@gmail.com')
}
constructor(public page : Page){
  pageFixture.page = page;
}
}