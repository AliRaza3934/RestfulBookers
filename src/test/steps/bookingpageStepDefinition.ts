import {Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pagefixture";
import { BookerPage } from "../pages/BookingPage";

setDefaultTimeout(15000);
let bookerPage = new BookerPage(pageFixture.page);

Given('User Navigates to the page',async function() {
    let bookerLo = new BookerPage(pageFixture.page);
    await bookerLo.goToLandingPage()
});

When('User is able to write name',async function() {
   await bookerPage.goToBookerPage()
});

Then('User is able enter Email',async function() {
    await bookerPage.typeEmail()
});

Then ('User is able to enter Phone',async function() {
   await bookerPage.typePhone()
    
});

Then('User is able to enter Subject',async function () {
    await bookerPage.typeSubject()
})

Then('User is able to enter Message',async function () {
    await bookerPage.typeMessageField()
});

Then('User is able select button',async function() {
    await bookerPage.buttonFiled()
    
});


