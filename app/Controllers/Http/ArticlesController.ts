// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import ArticleValidator from "App/Validators/ArticleValidator";

export default class ArticlesController {
  public async view({ view }) {
    const articles = await Database.from("articles").select("*");
    return view.render("article/view", { articles });
  }

  public async view_create({ view }) {
    return view.render("article/create");
  }

  public async create({ request, response }) {

    const payload = request.body()  ;
    const articleVal = await ArticleValidator.create({ ...payload, slug: payload.title });

    await Database.table("articles").insert(articleVal);
    return response.redirect().back();
  }
}
