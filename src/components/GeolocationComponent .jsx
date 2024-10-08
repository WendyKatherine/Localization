import { useState, useEffect } from "react"

const GeolocationComponent  = () => {

    const [ location, setLocation ] = useState({ lat: null, lon: null });
    const [ error, setError ] = useState(null);

    useEffect(() => {
       
        if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (err) => {
                setError(err.message);
            }
        );

        } else {
            setError('La geolocalización no esta soportada por este navegador');
        }
    }, []);
  return (
    <div className="flex justify-center items-center h-screen">
     <div className="font-sans text-white text-center">
        <h1 className="text-3xl p-2 font-bold"> Geolocation Component </h1>
        <h2 className="text-lg p-4 text-center">Ubicación del usuario</h2>
        { error ? (
                <p className="font-serif">Error: { error }</p>
            ) : location.lat && location.lon ? (
                <p>Latitud: { location.lat }, Longitud: { location.lon }</p>
            ) : (
                <p className="font-serif">Obteniendo ubicación...</p>
            )}
     </div>
    </div>
  );
};

export default GeolocationComponent
