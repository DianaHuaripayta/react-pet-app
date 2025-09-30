import { useState } from "react";
import { MascotaContext } from "./MascotaContext";

export const MascotaProvider = ({ children }) => {
  const [mascotas, setMascotas] = useState([]);
  const [hogares, setHogares] = useState(["Casa Principal", "Hogar Temporal"]);

  const agregarMascota = (nuevaMascota) => {
    setMascotas([...mascotas, nuevaMascota]);
  };

  const agregarHogar = (hogar) => {
    setHogares([...hogares, hogar]);
  };

  return (
    <MascotaContext.Provider value={{ mascotas, agregarMascota, hogares, agregarHogar }}>
      {children}
    </MascotaContext.Provider>
  );
};