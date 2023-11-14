import {Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pagefixture";
import { BookerPage } from "../pages/BookingPage";

setDefaultTimeout(15000);
//let bookerPage = new BookerPage(pageFixture.page);

Given('User Navigates to the page',async function() {
    let landingPage = new BookerPage(pageFixture.page);
    await landingPage.goToLandingPage();
});

When('User is able to write name',async function() {
    let bookerPage = new BookerPage(pageFixture.page);
    await bookerPage.goToBookerPage();
});

Then('User is able enter Email',async function() {
    let mailPage = new BookerPage(pageFixture.page);
    await mailPage.typeEmail();
});


