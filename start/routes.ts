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

import Route from "@ioc:Adonis/Core/Route";
//import Database from "@ioc:Adonis/Lucid/Database";

import { authRoutes, newsRoutes } from "./routes/index";

Route.on("/").render("welcome");

// Route.get("/news", async ({ view }) => {
//   const articles = await Database.from("articles").select('*');
//   return view.render("news.view", {articles});
// }).as("news_view");


// Route.patch("/news/:id", ({ params }) => {
//   return { params };
// }).as("news_update");


// Route.delete("/news/:id", ({ params }) => {
//   return { params };
// }).as("news_delete");

Route.group(() => {
  Route.get("/", async () => {
    return { API: "Test Api v1 Tool" };
  }),
    newsRoutes()
    authRoutes();
}).prefix("api/v1");
