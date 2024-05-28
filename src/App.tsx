import { useNavigate } from "react-router-dom"

function App() {

  const onNavigate = useNavigate();

  return (
    <main className="bg-custom-gradient h-screen p-10 gap-8 flex flex-col justify-end md:w-2/6"> 
      <h1 className="font-title text-5xl md:text-6xl">DRAW A <br/> NAME.</h1>
      <button className="bg-white py-4 rounded-md w-full font-bold text-xl" onClick={() => onNavigate('/register')}>START</button>
    </main>
  )
}

export default App
