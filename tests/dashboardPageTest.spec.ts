import {test,expect}from'@playwright/test'
import { LoginPage} from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'


 const url= "https://rahulshettyacademy.com/client/#/auth/login"
 const email= "jegow99556@flosek.com"
 const  password="Test@123"
 const productName ="ADIDAS ORIGINAL"
 
let lp:LoginPage
let dp:dashboardPage

test.beforeEach(async({page})=>{

lp=new LoginPage(page)
dp=new dashboardPage(page)
await lp.launchUrl(url)
await lp.loginintoapplication(email,password)

})

test('add to cart',async({page})=>{
await dp.searchAndAddProduct(productName,1)
await expect(dp.addtocartMessage).toBeVisible()


})

test('view the product',async({page})=>{
await dp.searchAndAddProduct(productName,0)
await expect(dp.viewpageproductname).toHaveText(productName)

})