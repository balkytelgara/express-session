const { Router } = require("express")
const path = require("path")

const index = Router()

index.get("/", (request, response) => {
	if (request.session.list) response.send(`
		<h1>The list in a session: ${request.session.list}</h1>
		<a href="/add">Maybe add one?</a>
		<a href="/destroy">Destroy the session</a>
	`)
	else response.send(`
		<h1>You didn't create any list in a session</h1>
		<a href="/add">Try to add one!</a>
	`)
})

module.exports = index