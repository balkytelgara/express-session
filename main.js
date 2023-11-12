const express = require("express")
const session = require("express-session")
const app = express()


const indexRouter = require("./routes/index")
const addRouter = require("./routes/add")

const PORT = 8000

app.use(express.urlencoded())
app.use(express.json())

app.use(session({
	secret: "ABBAABBAABBA",
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60
	}
}))


app.use(indexRouter)
app.use(addRouter)

app.listen(PORT, () => {
	console.log(`+ server is running at ${PORT}`)
})