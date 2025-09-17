import { useEffect, useState } from 'react'
import { Mascota } from './components/Mascota'
function App() {
  const [mascotas, setMascotas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === '' || tipo.trim() === '') return;
    setMascotas([...mascotas, { nombre, tipo }]);
    setNombre('');
    setTipo('');
  }
  useEffect(() => {
    if(mascotas.length >= 3 ){
      alert('Wow! Tienes muchas mascotas en casa 🐕🐈🐇')
    }
  },[mascotas])

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-6'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center'>Mis mascotas en casa 🐾</h1>
      <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6'>
        <div className='hidden md:block w-72 h-72 rounded-2xl overflow-hidden shadow-lg'>
          <img src="../src/assets/images/dog-green-bg.jpeg" alt="dog-green-bg" className="w-full h-full object-cover border-4 border-white rounded-2xl shadow-xl" />
        </div>
        <div className='flex-1 flex justify-center'>
          <form onSubmit={handleSubmit} className='bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col gap-4'>
            <input type='text'
              placeholder='Nombre de la mascota'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className='px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition'
            />
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className='px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition'
            >
              <option value="">Seleccionar mascota </option>
              <option value="perro">Perro 🐶</option>
              <option value='gato'>Gato 🐱</option>
              <option value='otro'>Otro 🐢</option>
            </select>
            <button type='submit' className='bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-xl shadow-md hover:scale-105 transition font-semibold'> Agregar</button>
          </form>
        </div>
        <div className='hidden md:block w-72 h-72 rounded-2xl overflow-hidden shadow-lg'>
          <img
            src="../src/assets/images/dog-purple-bg.jpg"
            alt="dog-purple-bg"
            className="w-full h-full object-cover border-4 border-white rounded-2xl shadow-xl"
          />
        </div>
      </div>
      <div className='mt-10 w-full max-w-2xl'>
        {mascotas.length === 0 ? (
          <p className='text-gray-600 text-center italic'>No hay mascotas agregadas 🐈‍⬛ 🐩</p>
        ) : (
          <ul className='grid sm:grid-cols-2 gap-6'>
            {mascotas.map((mascota, index) => (
              <Mascota 
              key={index} 
              nombre={mascota.nombre} 
              tipo={mascota.tipo} />
            ))}
          </ul>
        )
        }
      </div>
    </div>
  )
}

export default App
