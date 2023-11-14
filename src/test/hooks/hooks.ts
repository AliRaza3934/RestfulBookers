import { Browser ,BrowserContext ,chromium, Page } from "playwright";
import { After,AfterAll,Before,BeforeAll,Status } from "@cucumber/cucumber";
import{ pageFixture} from "./pagefixture";
import{ config } from "../../../playwright.config"

let browser : Browser;
let context : BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch(config);
});
Before (async function () {
    context = await browser.newContext({recordVideo:{dir : 'videos/'}});
    const page = await context.newPage();
    pageFixture.page = page ;

    
});
After(async function ({ pickle, result}){
    console.log(result?.status);
    if(result?.status == Status.PASSED){
        const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" })
        await this.attach(img, "image/png")
    }    
});
AfterAll(async function () {
    await browser.close();
})