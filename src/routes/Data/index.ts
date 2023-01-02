import { Router } from "express"
import { handleGetData } from "./controller"

const router = Router()

router.route("/getdata").get(handleGetData)

export default router
