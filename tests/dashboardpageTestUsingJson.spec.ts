import {test,expect}from'@playwright/test'
import { LoginPage} from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import product from '../testdata/product.json'

//need to discuss below step 
for(const p of product){
test.describe(`check for ${p.productName}`,()=>{
let lp:LoginPage
let dp:dashboardPage

test.beforeEach(async({page})=>{

lp=new LoginPage(page)
dp=new dashboardPage(page)
await lp.launchUrl(p.url)
await lp.loginintoapplication(p.email,p.password)

})

test('add to cart',async({page})=>{
await dp.searchAndAddProduct(p.productName,1)
await expect(dp.addtocartMessage).toBeVisible()


})

test('view the product',async({page})=>{
await dp.searchAndAddProduct(p.productName,0)
await expect(dp.viewpageproductname).toHaveText(p.productName)

})



})

}