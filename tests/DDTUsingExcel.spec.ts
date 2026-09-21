
import {test,expect}from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import { ExcelUtils } from '../utils/excelUtils'
import path from 'path'

// provide the filepath

const filepath = path.join(__dirname, "../testdata/Login.xlsx")
console.log(__dirname);

// take the sheetname from excel

const sheetname = "LoginData"
let datas:any
try{
    //now call the static method from utils
 datas= ExcelUtils.getExcelData(filepath,sheetname)

}
catch(e){
    console.log(e);
}
//reference value
let lp:LoginPage
let dp:dashboardPage
//object 
test.beforeEach(async({page})=>{
lp=new LoginPage(page)
dp=new dashboardPage(page)
})

for(let product of datas){
test(`add an item to cart ${product.productName}`,async()=>{
await lp.launchUrl(product.url)
await lp.loginintoapplication(product.username, product.password)
await expect(lp.homePageIdentifier).toBeVisible
dp.searchAndAddProduct(product.productName,1)
await expect(dp.addtocartMessage).toHaveText('Product Added To Cart')

})

}