# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.ts >> put api testing
- Location: tests\api.spec.ts:63:5

# Error details

```
Error: apiRequestContext.put: headers[1].value: expected string, got object
```

# Test source

```ts
  1  | //api testing 
  2  | 
  3  | /*
  4  | 
  5  | use below url for api testing 
  6  | https://reqres.in/
  7  | generate api key 
  8  | it is type of testing that involve testing api directly using postman or bruno as part of integration testing 
  9  | 
  10 | get : retrive data from server 
  11 | post : is used to create the details on server 
  12 | put : is used to update the existing value on server(modification)
  13 | delete : is used to delete the existing record on server
  14 | patch : is used to update the existing resources(partial modification)
  15 | 
  16 | 
  17 | different status code for api testing
  18 | 200 : ok
  19 | 201 : created
  20 | 400 : bad request
  21 | 401 : unauthorized
  22 | 403 : forbidden
  23 | 404 : not found
  24 | 500 : internal server error
  25 | 
  26 | */
  27 | 
  28 | import {test,expect }from '@playwright/test'
  29 | const API_KEY = 'free_user_3Jkms3zKjudtuynaWtHYF65OGqW'
  30 | 
  31 | test('get api testing',async({request})=>{
  32 |     const response = await request.get('https://reqres.in/api/users?page=2',{
  33 |         headers:{
  34 | 'x-api-key':API_KEY
  35 |         }
  36 |     })
  37 | expect(response.status()).toBe(200)
  38 | const jsondata = await response.json()
  39 | console.log(jsondata)
  40 |         })
  41 | 
  42 | // post: create the details on server
  43 | 
  44 | test('post api testing',async({request})=>{
  45 |     const response = await request.post('https://reqres.in/api/users',{
  46 |         headers:{
  47 |             'x-api-key':API_KEY,
  48 |             //along with header we need to send datat that will create the details on server
  49 |             //data here is nothing but payloads
  50 |             data:{
  51 |                    "name": "john",
  52 |                     "job": "Tutor",
  53 |             } 
  54 |         }
  55 |     })
  56 |     console.log('status code to be ', response.status())
  57 |     console.log(await response.status())
  58 |     expect(response.status()).toBe(201)
  59 | })
  60 | 
  61 | 
  62 | 
  63 | test('put api testing',async({request})=>{
> 64 |     const response = await request.put('https://reqres.in/api/users/2',{
     |                                    ^ Error: apiRequestContext.put: headers[1].value: expected string, got object
  65 |         headers:{
  66 |             'x-api-key':API_KEY,
  67 |             //along with header we need to send datat that will create the details on server
  68 |             //data here is nothing but payloads
  69 |             data: {
  70 |                 "name": "john",
  71 |                 "job": "QA engineer",
  72 |             }
  73 |         }
  74 |     })
  75 |    const bodyResponse = await response.json()
  76 |    console.log('status code to be ', response.status())
  77 |    console.log('response body is: ', bodyResponse)
  78 |     
  79 | })
  80 | 
  81 | 
  82 | 
  83 | test('delete api testing',async({request})=>{
  84 |     const response = await request.delete('https://reqres.in/api/users/2',{
  85 |         headers:{
  86 |             'x-api-key':API_KEY
  87 |         }
  88 |     })
  89 |     console.log('status code to be ', response.status())
  90 |     expect(response.status()).toBe(204)
  91 | })
  92 | 
  93 |         
  94 |  
  95 |     
  96 | 
```