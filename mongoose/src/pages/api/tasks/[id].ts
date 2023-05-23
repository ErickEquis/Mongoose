// Muestra la tarea en una pagina con ruta de [id]

import { NextApiRequest, NextApiResponse } from "next"
import Task from "../../../../models";

type Data = {
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
 
    // Destructuracion de metodos 'req'
    const {method, body, query: { id }} = req;
    
    // Manejo de peticiones
    switch (method) {
        
        // Obtener tareas
        case 'GET':
            try {
                // Busqueda por 'id'
                const task = await Task.findById(id)
                if (!task) return res.status(400).json({ msg: "Tarea no encontrada" })
                return res.status(200).json(task)
            } catch (error) {
                return res.status(500).json({ msg: error })
            }
        
        // Actualizar tareas
        case 'PUT':
            try {
                const updatedTask = await Task.findByIdAndUpdate(id , body, {new: true})
                if (!updatedTask) return res.status(400).json({ msg: "Tarea no encontrada"})
                return res.status(200).json(updatedTask)
            } catch (error) {   
                return res.status(500).json({ msg: error })
            }

        // Eliminar tareas
        case 'DELETE':
            try {
                const deletedTask = await Task.findByIdAndDelete(id)
                if (!deletedTask) return res.status(404).json({ msg: "Tarea no encontrada" })
                return res.status(204).json(deletedTask)
            } catch (error) {
                return res.status(204).json({ msg: error })
            }

        default:
            return res.status(400).json({msg: "Este metodo no es soportado"})
    }

}