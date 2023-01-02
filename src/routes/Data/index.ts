import { Router } from "express"
import { handleGetAllData, handleGetDataBykeyValue } from "./controller"

const router = Router()

router.route("/getAllData").get(handleGetAllData)

router.route("/getDataBykeyValue").get(handleGetDataBykeyValue)

export default router
