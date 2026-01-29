import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function MapBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <MapContainer
        center={[31.5204, 74.3587]} // change to your location
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[31.5204, 74.3587]} />
      </MapContainer>
    </div>
  );
}
