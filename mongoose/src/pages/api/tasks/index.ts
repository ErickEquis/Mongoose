import type { NextApiRequest, NextApiResponse } from 'next'

// Importando coneccion
import { dbConnect } from '@/utils/connection'
import Task from "../../../../models";

// Coneccion a BD
dbConnect()

type Data = {
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const { method, body } = req;

    // Manejo de peticiones
    switch (method) {
        // Obteniendo tareas
        case 'GET':
            try {
                const tasks = await Task.find()
                console.log(tasks)
                return res.status(200).json(tasks)
            } catch (error) {
                return res.status(500).json({ error: error })
            }

        // Mandando tareas
        case "POST":
            try {
                const newTask = new Task(body)
                const savedTask = await newTask.save()
                return res.status(201).json(savedTask)
            } catch (error) {
                return res.status(500).json({ error: error })
            }

        default:
            return res.status(400).json({ msg: 'Este metodo no es soportado'});
    }
    
}