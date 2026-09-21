// import{test,expect}from '@playwright/test'
// import { Login } from '../pages/practicepage'
// import data from '../testdata/login.json'

// let lp:Login
// test.beforeEach(async({page})=>{
//     lp= new Login(page)
//    await lp.LaunchUrl(data.url) 
// })


// test('valid login',async({page})=>{
// // const lp= new login(page)
// // await lp.LaunchUrl(data.url)
// await lp.loginfunctionality(data.email,data.password)
// await expect (lp.homepageidentifier).toBeVisible()

// })

// test('invalid login',async({page})=>{
// // const lp =new login(page)
// // await lp.LaunchUrl(data.url)
// await lp.loginfunctionality(data.email,data.invalidpassword)
// await expect(lp.errormassage).toBeVisible()

// })

// import{test,expect}from'@playwright/test'
// import { Login } from '../pages/practicepage'
// import data from '../testdata/login.json'

// let lp:Login
// test.beforeEach(async({page})=>{
//   lp = new Login(page)
//  await lp.Launchurl(data.url)
// })

// test('valid login',async({page})=>{
// await lp.loginfunctionality(data.email, data.password)
// await expect (lp.homepageidentifier).toBeVisible()
// })
// test('invalid login',async({page})=>{
// lp.loginfunctionality(data.email,data.invalidpassword)
// await expect (lp.errormassage).toBeVisible()


// })

// import{test,expect}from '@playwright/test'
// import { LoginPage } from '../pages/practicepage'
// import data from '../testdata/login.json'

// test('valid login',async({page})=>{
//  const lp = new LoginPage(page) 
// await lp.LaunchUrl(data.url)
// await lp.loginfunctinality(data.email,data.password)
// })

import {test,expect} from'@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import { ExcelUtils } from '../utils/excelUtils'




