/**
 * A set of functions called "actions" for `email`
 */

export default {
  send: async (ctx) => {
    const { body } = ctx.request;
    const { to, from, subject, text } = JSON.parse(body);

    try {
      await strapi.plugins["email"].services.email.send({
        to,
        from,
        subject,
        text,
      });
      ctx.body = { data: "form has sent!" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
