import GeolocationComponent  from "./components/GeolocationComponent";
import MapComponent from "./components/MapComponent";
import { useState } from "react";

function App() {

  const [ location, setLocation ] = useState({ lat: 0, lon: 0 });
  
  return (
    <div className="bg-gray-dark p-4">
      <div>
        <div>
          <GeolocationComponent
            setLocation={setLocation}
            location={location}
          />
        </div>
        <div>
          <MapComponent
            userLocation={location}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
