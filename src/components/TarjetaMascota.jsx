export default function TarjetaMascota({ mascota }) {
    return (
            <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center justify-center text-center hover:shadow-2xl transition">
                <h3>{mascota.nombre} 🐾</h3>
                <p>Tipo: {mascota.tipo}</p>
                <p>Raza: {mascota.raza}</p>
                <p>Responsable: {mascota.responsable}</p>
                <p>Hogar: {mascota.hogar}</p>
            </div>
    )
}