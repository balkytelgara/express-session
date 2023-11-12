const { Router } = require("express")
const path = require("path")

const addRouter = Router()

addRouter.get("/add", (request, response) => {
	response.sendFile(path.join(__dirname, "../templates/add.htm"))
})

addRouter.post("/add", (request, response) => {
	const item = request.body.item

	if (!request.session.list)
		request.session.list = []

	request.session.list.push(item)

	response.redirect("/")
})

module.exports = addRouter