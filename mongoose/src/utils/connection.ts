// 'connect' permite conectar base de datos 
// 'connection' permite capturar eventos de la BD
import { connect, connection } from "mongoose";

// Constante que inicializa estado de coneccion.
// Se inicia en 'false' ya que app empieza sin coneccion
const conn = {
    isConnected: 0
}

// Coneccion a BD
export async function dbConnect(){

    // Si ya se encuentra conectada BD no se vuelve a hacer una nueva coneccion.
    if(conn.isConnected) return;

    // Coneccion asincrona
    const db = await connect('mongodb://localhost:27017/Mongoose')
    

    // Asigna el estado de coneccion a la constante iniciada
    conn.isConnected = db.connections[0].readyState

    // Nombre de BD que se conecta
    console.log(db.connection.db.databaseName, "----")

}

// Muestra evento de coneccion
connection.on("connected", () => {
    console.log("MongoDB esta conectado")
})

// Muestra evento de error
connection.on("error", (err) => {
    console.log(err)
})