import { Request, Response } from "express"
import { DataSchema } from "../../schema"

export const handleGetData = async (req: Request, res: Response) => {

    const { key, value } = req.query
    
    const records = await DataSchema.find({ [key as string]: value })

    const noOfRecords = records.length

    res.json({ noOfRecords, records })
    
}