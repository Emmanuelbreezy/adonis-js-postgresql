import Route from '@ioc:Adonis/Core/Route'


export default () => {
    Route.group(() => {
        Route.get("/", "ArticlesController.view").as("news_view");

        Route.get("/create", "ArticlesController.view_create").as("news_view_create");

        Route.post("/", "ArticlesController.create").as("news_create");


        Route.patch("/:id", ({ params }) => {
            return { params };
        }).as("news_update");
          
          Route.delete("/:id", ({ params }) => {
            return { params };
          }).as("news_delete");
    }).prefix('news')
}