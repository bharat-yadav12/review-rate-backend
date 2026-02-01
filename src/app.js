import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//import { ApiError } from "./utils/ApiError.js"
import helmet from "helmet";
const app = express()


app.use(helmet());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser());



import companyRoutes from "./routes/company.routes.js";
import reviewRoutes from "./routes/review.routes.js";


app.use("/api/v1/companies", companyRoutes);
app.use("/api/v1/reviews", reviewRoutes);

export {app}
