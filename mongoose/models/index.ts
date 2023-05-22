import { Schema, model, models } from "mongoose";

// 'Schema' permite crear el esquema que tendran los documentos en la BD
const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido'],
        unique: true,
        trim: true,
        maxlenght: [40, 'Titulo debe contener menos de 40 caracteres']
    },
    description: {
        type: String,
        requiered: true,
        trim: true,
        maxlenght: [200, 'Descripcion debe contener menos de 200 caracteres']
    },
}, {
        timestamps: true,
        versionKey: false
})

// Modelo que se basa en el esquema
// Permite operar sobre la BD
// Crea u opcupa el modelo 'Task'
export default models.Task || model("Task", taskSchema)