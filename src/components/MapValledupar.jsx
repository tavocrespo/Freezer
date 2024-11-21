import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Componente para centrar el mapa en el artículo seleccionado
function CenterMarker({ coordinates }) {
  const map = useMap();
  
  useEffect(() => {
    if (coordinates) {
      map.setView(coordinates, 16);
    }
  }, [coordinates, map]);

  return null;
}

function MapValledupar({ selectedArticle }) {
  const defaultPosition = [10.4631, -73.2532]; // Coordenadas de Valledupar

  return (
    <MapContainer 
      center={defaultPosition} 
      zoom={13} 
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Marcador por defecto de Valledupar */}
      <Marker position={defaultPosition}>
        <Popup>
          Valledupar, Colombia
        </Popup>
      </Marker>

      {/* Marcador del artículo seleccionado */}
      {selectedArticle && (
        <Marker position={selectedArticle.coordinates}>
          <Popup>
            <div>
              <h3>{selectedArticle.name}</h3>
              <p>Estado: {selectedArticle.status}</p>
              <p>Ubicación: {selectedArticle.location}</p>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Componente para centrar el mapa */}
      {selectedArticle && <CenterMarker coordinates={selectedArticle.coordinates} />}
    </MapContainer>
  );
}

export default MapValledupar;
