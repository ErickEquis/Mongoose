import { NextApiRequest, NextApiResponse } from "next"
import Task from "../../../../models";

type Data = {
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
 
    const {method, body, query: { id }} = req;
    switch (method) {
        case 'GET':
            try {
                const task = await Task.findById(id)
                if (!task) return res.status(400).json({ msg: "Tarea no encontrada" })
                return res.status(200).json(task)    
            } catch (error) {
                return res.status(500).json({ msg: error })
            }
        default:
            return res.status(400).json({msg: "Este metodo no es soportado"})
    }

}