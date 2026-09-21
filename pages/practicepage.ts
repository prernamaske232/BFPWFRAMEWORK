

// import {Locator,Page}from"@playwright/test";
//  export class login {

//     page:Page
//     email:Locator
//     password:Locator
//     Loginbutton:Locator
//     errormassage:Locator
//     homepageidentifier:Locator

//     constructor(page:Page){
//  this.page = page
//  this.email= this.page.locator('#userEmail')
//  this.password= this.page.locator('#userPassword')
//  this.Loginbutton=this.page.locator('#login')
//  this.errormassage=this.page.locator('#toast-container')
// this.homepageidentifier=this.page.locator('.fa.fa-sign-out')

//     }
// //actions 
// async LaunchUrl(url:string){
// await this.page.goto(url)
// }
// async loginfunctionality(username:string,password:string){
//     await this.email.fill(username)
//     await this.password.fill(password)
//     await this.Loginbutton.click()
// }

//  }

// import { Locator,Page } from "@playwright/test";

//  export class Login {

//   page:Page
//   email:Locator
//   password:Locator
//   loginbutton:Locator
//   errormassage :Locator
//   homepageidentifier:Locator


//   constructor(page:Page){
// this.page=page
// this.email=this.page.locator('#userEmail')
// this.password= this.page.locator('#userPassword')
// this.loginbutton=this.page.locator('#login')
// this.errormassage=this.page.locator('#toast-container')
// this.homepageidentifier=this.page.locator('.fa.fa-sign-out')
//   }

//  async Launchurl(url:string){
//     await this.page.goto(url)
//  }
// async loginfunctionality(username:string, password:string){
// await this.email.fill(username)
// await this.password.fill(password)
// await this.loginbutton.click()
// }
// }

// import { Locator,Page } from "@playwright/test";

//  export class LoginPage {


// page:Page 
// email:Locator
// password: Locator 
// loginButton: Locator 
// errormassage : Locator 
// homepageidentity: Locator 

// constructor(page:Page){
// this.page= page
// this.email = this.page.locator('#userEmail')
// this.password = this.page.locator('#userPassword')
// this.loginButton= this.page.locator('#login')
// this.errormassage= this.page.locator('#toast-container')
// this.homepageidentity=this.page.locator('.fa.fa-sign-out')

// }

// async LaunchUrl (url:string){
//   await this.page.goto(url)
// }
// async loginfunctinality (username:string,password:string){
//   await this.email.fill(username)
//   await this.password.fill(password)
//   await this.loginButton.click()
// }

// }

// import xlsx from 'xlsx'

// export class ExcelUtils {

// static getExcelData(filepath:string, sheetname:string){
//   try{
// const wb = xlsx.readFile(filepath)
// const sheet= wb.Sheets[sheetname]
// xlsx.utils.sheet_to_json(sheet)
// return data

//   }catch(error){

//   console.log(error)

//   }
// }


// }