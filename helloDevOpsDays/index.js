module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". ¡Bienvenido a la demo del DevOpsDays Medellín!"
        : "¡Bienvenido a la demo del DevOpsDays Medellín!";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}