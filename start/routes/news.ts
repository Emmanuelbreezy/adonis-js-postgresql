import Route from '@ioc:Adonis/Core/Route'


export default () => {
    Route.group(() => {
        Route.get("/", "ArticlesController.view").as("news_view");

          Route.patch("/:id", ({ params }) => {
            return { params };
          }).as("news_update");
          
          Route.delete("/:id", ({ params }) => {
            return { params };
          }).as("news_delete");
    }).prefix('news')
}