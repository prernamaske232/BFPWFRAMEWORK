import{test,expect} from '@playwright/test'
import { LoginPage } from "../pages/loginPage";
import data from '../testdata/login.json'


//hooks concept 
let lp: LoginPage
test.beforeEach(async({page})=>{
 lp = new LoginPage(page)
await lp.launchUrl(data.url)   
})

test('valid login', async({page})=>{
// need to create object to run the class by using new keyword
// const lp= new LoginPage(page)
// //to access from loginpage now use lp.
// await lp.launchUrl(url)
await lp.loginintoapplication(data.email,data.password)

await expect(lp.homePageIdentifier).toBeVisible()

})
test('invalid login',async({page})=>{
// const lp = new LoginPage(page)
// await lp.launchUrl(url)
await lp.loginintoapplication(data.email,data.invalidpassword)
await expect(lp.errorMessage).toBeVisible()

})