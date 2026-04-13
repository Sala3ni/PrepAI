const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: (origin, callback) => {
        const raw = process.env.CLIENT_ORIGIN || "http://localhost:5173"
        const allowed = raw.split(",").map(s => s.trim()).filter(Boolean)

        // Allow non-browser requests (no Origin header)
        if (!origin) return callback(null, true)

        if (allowed.includes(origin)) return callback(null, true)

        return callback(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true,
}))

app.get("/health", (req, res) => {
    res.status(200).json({ ok: true })
})

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app