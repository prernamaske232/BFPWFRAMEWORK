
//this is called as login page class
//here all the locators and methods belongs to login page will be written here

import{Locator,Page} from"@playwright/test";



export class LoginPage{

    page:Page
    email:Locator
    password:Locator
    loginButton: Locator
    errorMessage: Locator
    homePageIdentifier:Locator



//create the constructor
//all locators goes inside the constructor
//this will accept one parameter as page

// the page fixture which created in login.spec.ts file which needs to initialize here
// when we called class this will definately call constructor from page test and constructor have all locators
//locators used on page, page will launch from test page but it is access that from constructor

constructor(page:Page){
this.page = page
this.email= this.page.getByPlaceholder('email@example.com')
this.password= this.page.locator('#userPassword')
this.loginButton= this.page.locator('#login')
this .errorMessage= this.page.locator('#toast-container')
this.homePageIdentifier=this.page.locator('.fa.fa-sign-out')


}

//methds or actions 
// any hardcoded value will not present inside your testclass
async launchUrl(url:string){
    await this.page.goto(url)
}
async loginintoapplication(username:string,password:string){
await this.email.fill(username)
await this.password.fill(password)
await this.loginButton.click()
}





}
