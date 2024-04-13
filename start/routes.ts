/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { authRoutes } from './routes/index'

Route.on('/').render('welcome')

Route.get('/news',({view}) => {
  return view.render('news.view')
}).as("news_view") 

Route.patch('/news/:id',({params}) => {
  return { params}
}).as("news_update") 

Route.delete('/news/:id',({params}) => {
  return { params}
}).as("news_delete") 



Route.group(() => {
  Route.get('/', async () => {
    return { API: 'Test Api v1 Tool' }
  }),
  Route.post('/', async ({request, response}) => {
    const body = request.body()
    return response.status(200).json({
      message:"Success",
      data: body
    })
  }).as("api_get"),
  Route.put('/:id', async ({request, response, params}) => {
    const body = request.body()
    const { id } = params
    return response.status(200).json({
      message:"Success",
      data: {
        ...body,
        id: id
      }
    })
  }).where('id', {
    match: /^[0-9]+$/,
    cast: (id) => Number(id)
  }).as("api_update"),
  authRoutes()
}).prefix('api/v1')

