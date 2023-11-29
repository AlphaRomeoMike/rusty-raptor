const { prisma } = require('../config/prisma');

module.exports = function UserController() {

    /**
     * # Signup
     * ---
     * @name signup
     * @param {{body: Object, user: Object, headers: Object}} request 
     * @param {{json: Object}} reply 
     */
    const signup = async (request, reply) => {
        console.log(request.body);
        reply.json(body).status(200);
    }

    return { signup }
}