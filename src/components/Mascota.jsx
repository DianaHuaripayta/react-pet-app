export function Mascota({nombre, tipo}) {
    return(
        <li className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center justify-center text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-3">
                {tipo === 'perro' ? '🐶' : tipo === 'gato' ? '🐱' : '🐢'}
            </div>
            <strong className="text-lg text-gray-800">{nombre}</strong>
            <em className="text-sm text-gray-500 capitalize">{tipo}</em>
        </li>
    )
}