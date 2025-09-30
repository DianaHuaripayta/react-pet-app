import { useFormulario } from "../hooks/useFormulario";
import { useContext } from "react";
import { MascotaContext } from "../context/MascotaContext";
export default function FormularioMascota() {
  const { agregarMascota, hogares } = useContext(MascotaContext);
  const { form, handleChange, resetForm } = useFormulario({
    nombre: "",
    tipo: "perro",
    raza: "",
    responsable: "",
    hogar: hogares[0] || "",
  });
  const razas = {
    perro: ["Labrador", "Bulldog", "Pug", "Otro"],
    gato: ["Persa", "Siames", "Maine Coon", "Otro"],
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mascota registrada:", form);
    agregarMascota(form);
    resetForm();

  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex flex-col gap-4"
    >
      <input
        name="nombre" //lo correcto es usar siempre la propiedad name.
        type="text"
        placeholder="Nombre de la mascota"
        value={form.nombre}
        onChange={handleChange}
        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
      />
      <select
        name="tipo"
        value={form.tipo}
        onChange={handleChange}
        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
      >
        <option value="">Seleccionar mascota </option>
        <option value="perro">Perro 🐶</option>
        <option value="gato">Gato 🐱</option>
      </select>
      <select
        name="raza"
        value={form.raza}
        onChange={handleChange}
        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
      >
        <option value="">Seleccionar raza</option>
        {razas[form.tipo]?.map((raza) => (
          <option key={raza} value={raza}>
            {raza}
          </option>
        ))}
      </select>
      <input
        name="responsable"
        type="text"
        placeholder="Nombre del responsable"
        value={form.responsable}
        onChange={handleChange}
        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
      />
      <select
        name="hogar"
        value={form.hogar}
        onChange={handleChange}
        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
      >
        <option value="">Seleccionar hogar</option>
        {hogares.map((hogar) => (
          <option key={hogar} value={hogar}>
            {hogar}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={!form.nombre || !form.tipo}
        className="bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-xl shadow-md hover:scale-105 transition font-semibold"
      >
        {" "}
        Agregar
      </button>
    </form>
  );
}
