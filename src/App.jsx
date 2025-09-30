import ListaMascota from "./components/ListaMascotas";
import FormularioMascota from "./components/FormularioMascota";
import { MascotaProvider } from "./context/MascotaProvider";
function App() {
  return (
    <MascotaProvider>
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Mis mascotas en casa 🐾
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6">
          <div className="hidden md:block w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="../src/assets/images/dog-green-bg.jpeg"
              alt="dog-green-bg"
              className="w-full h-full object-cover border-4 border-white rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <FormularioMascota />
          </div>
          <div className="hidden md:block w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="../src/assets/images/dog-purple-bg.jpg"
              alt="dog-purple-bg"
              className="w-full h-full object-cover border-4 border-white rounded-2xl shadow-xl"
            />
          </div>
        </div>
        <hr className="my-6" />
        <ListaMascota />
      </div>
    </MascotaProvider>
  );
}

export default App;
