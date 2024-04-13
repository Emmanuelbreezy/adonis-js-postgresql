import Route from '@ioc:Adonis/Core/Route'


export default () => {
    Route.group(() => {
        Route.get("/", async () => {
            return { API: "Authentication routes" };
        }),
        Route.post("/", async ({ request, response }) => {
            const body = request.body();
            return response.status(200).json({
              message: "Success",
              data: body,
            });
          }).as("api_get"),
          Route.put("/:id", async ({ request, response, params }) => {
            const body = request.body();
            const { id } = params;
            return response.status(200).json({
              message: "Success",
              data: {
                ...body,
                id: id,
              },
            });
          })
            .where("id", {
              match: /^[0-9]+$/,
              cast: (id) => Number(id),
            })
            .as("api_update")
    }).prefix('auth')
}