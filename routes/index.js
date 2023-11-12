const { Router } = require("express")
const path = require("path")

const index = Router()

index.get("/", (request, response) => {
	if (request.session.list) response.send(`
		<p>The list in a session: ${request.session.list}</p>
		<a href="/add">Maybe add one?</a>
	`)
	else response.send(`
		<p>You didn't create any list in a session</p>
		<a href="/add">Try to add one!</a>
	`)
})

module.exports = index