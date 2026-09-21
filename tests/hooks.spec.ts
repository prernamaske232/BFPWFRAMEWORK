/*
hooks--special method used to performsetupand teardown process
setup -- setting up of process
teardown -- closing of process

Diff hooks in PW
1. test.beforeAll()---it will get executed before any of the testcase (if you have 10 diff testcase then beforeall will executed only once)
  ex. Db connection , initiating log

2. test.beforeEach()---it will run once before running each and every testcase
  if you have 10 testcase then it will 10 time 
  ex launching browser , url

3. test.aftereach()---it will run once after every testcase is completed 
  ex.logout 

4.  test.afterall()---it will get executed only once after all testcase is completed 
  ex . report generation, logs generation, db closer


  order of execution will be as per below
  beforeAll  >>>  beforeEach  >>>  afterEach >>> afterAll

  we are mostly using beforeEach()

*/

import {test,expect}from'@playwright/test'

//execution flow
test.beforeEach(async()=>{
console.log ('beforeEach');
})
test.afterAll(async()=>{
console.log ('after All');
})
test.beforeAll(async()=>{
console.log ('before all ');
})
test.afterEach(async()=>{
console.log ('after Each');
})

test('test1', async()=>{
    console.log('testcase1')
})
test('test2', async()=>{
    console.log('testcase2')
})
test('test3', async()=>{
    console.log('testcase3')
})
