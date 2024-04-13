import Route from '@ioc:Adonis/Core/Route'
import Database from "@ioc:Adonis/Lucid/Database";



export default () => {
    Route.group(() => {
        Route.get("/", async ({ view }) => {
            const articles = await Database.from("articles").select('*');
            return view.render("news.view", {articles});
          }).as("news_view");

          Route.patch("/:id", ({ params }) => {
            return { params };
          }).as("news_update");
          
          Route.delete("/:id", ({ params }) => {
            return { params };
          }).as("news_delete");
    }).prefix('news')
}