//api testing 

/*

use below url for api testing 
https://reqres.in/
generate api key 
it is type of testing that involve testing api directly using postman or bruno as part of integration testing 

get : retrive data from server 
post : is used to create the details on server 
put : is used to update the existing value on server(modification)
delete : is used to delete the existing record on server
patch : is used to update the existing resources(partial modification)


different status code for api testing
200 : ok
201 : created
400 : bad request
401 : unauthorized
403 : forbidden
404 : not found
500 : internal server error

*/

import {test,expect }from '@playwright/test'
const API_KEY = 'free_user_3Jkms3zKjudtuynaWtHYF65OGqW'

test('get api testing',async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2',{
        headers:{
'x-api-key':API_KEY
        }
    })
expect(response.status()).toBe(200)
const jsondata = await response.json()
console.log(jsondata)
        })

// post: create the details on server

test('post api testing',async({request})=>{
    const response = await request.post('https://reqres.in/api/users',{
        headers:{
            'x-api-key':API_KEY,
            //along with header we need to send datat that will create the details on server
            //data here is nothing but payloads
            data:{
                   "name": "john",
                    "job": "Tutor",
            } 
        }
    })
    console.log('status code to be ', response.status())
    console.log(await response.status())
    expect(response.status()).toBe(201)
})



test('put api testing',async({request})=>{
    const response = await request.put('https://reqres.in/api/users/2',{
        headers:{
            'x-api-key':API_KEY,
            //along with header we need to send datat that will create the details on server
            //data here is nothing but payloads
            data: {
                "name": "john",
                "job": "QA engineer",
            }
        }
    })
   const bodyResponse = await response.json()
   console.log('status code to be ', response.status())
   console.log('response body is: ', bodyResponse)
    
})



test('delete api testing',async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/2',{
        headers:{
            'x-api-key':API_KEY
        }
    })
    console.log('status code to be ', response.status())
    expect(response.status()).toBe(204)
})

        
 
    
