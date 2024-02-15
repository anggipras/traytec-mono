/**
 * A set of functions called "actions" for `email`
 */

export default {
  send: async (ctx) => {
    const { body } = ctx.request;
    const { to, from, replyTo, subject, text } = JSON.parse(body);

    try {
      ctx.body = { data: "form has sent!" };
      // await strapi.plugins["email"].services.email.send({
      //   to,
      //   from,
      //   replyTo,
      //   subject,
      //   text,
      // });
    } catch (err) {
      ctx.body = err;
    }
  },
};
