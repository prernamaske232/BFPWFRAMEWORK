// here we need to import the page class and use method and locator


/*
const url= "https://rahulshettyacademy.com/client/#/auth/login"
const email= 'jegow99556@flosek.com'
const password= 'Test@123'
let error massage ="Incorrect email or password"
*/

import{test,expect} from '@playwright/test'
import { LoginPage } from "../pages/loginPage";

// for the first time we will hardcode the value
const url= "https://rahulshettyacademy.com/client/#/auth/login"
const email= 'jegow99556@flosek.com'
const password= 'Test@123'
let errormassage ="Incorrect email or password"
let invalidpassword = "tfghjki"

//hooks concept 
let lp: LoginPage
test.beforeEach(async({page})=>{
 lp = new LoginPage(page)
await lp.launchUrl(url)   
})

test('valid login', async({page})=>{
// need to create object to run the class by using new keyword
// const lp= new LoginPage(page)
// //to access from loginpage now use lp.
// await lp.launchUrl(url)
await lp.loginintoapplication(email,password)

await expect(lp.homePageIdentifier).toBeVisible()

})
test('invalid login',async({page})=>{
// const lp = new LoginPage(page)
// await lp.launchUrl(url)
await lp.loginintoapplication(email,invalidpassword)
await expect(lp.errorMessage).toBeVisible()

})
