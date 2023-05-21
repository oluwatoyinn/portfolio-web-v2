// import { MapContainer, TileLayer, Marker } from "react-leaflet";

// const Map = ({ latitude, longitude }) => {
//     return (
//       <div className="w-full h-96">
//         <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
//           />
//           <Marker position={[latitude, longitude]} />
//         </MapContainer>
//       </div>
//     );
//   };

// export default Map;


import { useState, useEffect } from "react";
import loader from "../utils/googleMapsLoader";

const Map = ({ address }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 16,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);
  return <div id="map" style={{ height: "400px" }}></div>;
};
export default Map;