import Route from '@ioc:Adonis/Core/Route'


export default () => {
    Route.group(() => {
        Route.post('login', () => {
            return {'Login': true}
        })
    }).prefix('auth')
}