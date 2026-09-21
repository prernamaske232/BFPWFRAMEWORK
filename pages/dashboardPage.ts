import { Locator,Page } from "@playwright/test";

export class dashboardPage {

page:Page
products:Locator
homepageproductprice:Locator
viewpageproductprice: Locator
viewpageproductname: Locator
addtocartMessage: Locator
cart:Locator


constructor(page:Page){
this.page=page
this.products=this.page.locator('div.card-body')
this.homepageproductprice= this.page.locator('div.card-body div div')
this.viewpageproductprice=this.page.locator('.col-lg-6.rtl-text h3')
this.viewpageproductname=this.page.locator('.col-lg-6.rtl-text h2')
this.addtocartMessage= this.page.locator('#toast-container')
this.cart=this.page.locator("[routerlink='/dashboard/cart']")

}

async searchAndAddProduct (productName:string,index:number){
await this.products.nth(0).waitFor()
//take the count of the product
const totalproduct= await this.products.count()
console.log(totalproduct);
//use the for loop to iterate through the list of product:
for(let i=0;i<=totalproduct;i++){
//first capture all the text/name of the product present on the page
//below locator chaining mechanism is used 
const productText= await this.products.nth(i).locator('b').textContent()
 if (productText?.trim().toLowerCase()===productName.trim().toLowerCase()){

    await this.products.nth(i).locator('button').nth(index).click()
    break
 }

}

}





}