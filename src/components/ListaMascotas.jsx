import { useContext } from "react";
import { MascotaContext } from "../context/MascotaContext";
import TarjetaMascota from "./TarjetaMascota";
export default function ListaMascotas(){
    const { mascotas } = useContext(MascotaContext);
    if(mascotas.length === 0) return <h2>No hay mascotas registradas</h2>
    return(
        <div className="grid sm:grid-cols-3 gap-6">
            {mascotas.map((mascota, index) => (
                <TarjetaMascota key={index} mascota={mascota}/>
            ))}
        </div>
    )
}