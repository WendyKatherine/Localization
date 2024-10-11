import { useState } from "react";
import PropTypes from "prop-types";

const GeolocationComponent = ({ setLocation, location }) => {
  const [error, setError] = useState(null);

  const handleGetLocation = () => {
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
      setError("La geolocalización no está soportada por este navegador");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="font-sans text-white text-center">
        <h1 className="text-3xl p-2 font-bold">Geolocation Component</h1>
        <h2 className="text-lg p-4 text-center">Ubicación del usuario</h2>

        {error ? (
          <p className="font-serif">Error: {error}</p>
        ) : location.lat !== 0 && location.lon !== 0 ? (
          <p>Latitud: {location.lat}, Longitud: {location.lon}</p>
        ) : (
          <p className="font-serif">Haz clic en el botón para obtener tu ubicación</p>
        )}

        <button
          onClick={handleGetLocation}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-8"
        >
          Obtener mi ubicación
        </button>
      </div>
    </div>
  );
};

GeolocationComponent.propTypes = {
  setLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }).isRequired,
};

export default GeolocationComponent;
