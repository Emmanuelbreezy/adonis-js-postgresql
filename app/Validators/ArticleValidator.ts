import { schema, validator } from "@ioc:Adonis/Core/Validator";

class ArticleValidator {
  public create(payload) {
    return validator.validate({
      schema: schema.create({
        title: schema.string(),
        content: schema.string(),
        image: schema.string(),
      }),
      data: payload,
    });
  }
}

export default new ArticleValidator();
