const { Router } = require("express")

const destroy = Router()

destroy.get("/destroy", (request, response) => {
	if (request.session) {
		request.session.destroy()
		response.send("<h1>Session is destroyed!</h1>")
	}
	else response.send("<h1>You have no session history.</h1>")
})

module.exports = destroy