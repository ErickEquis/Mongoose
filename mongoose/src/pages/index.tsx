
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// ------Frontend------
export default function Home() {
  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  )
}

// Obteniendo tareas de BD
// -----Backend-----
export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json()

  console.log(tasks)

  return {
    props: {
      tasks
    }
  }

}