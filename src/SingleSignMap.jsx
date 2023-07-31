import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { css } from "@emotion/css";

const SingleSignMap = ( {lat, lon, title} ) => {

  const position = [lat, lon];

  const mapStyles = css`
    margin-top: 30px;
    width: auto;
    height: 250px;
  `;

  return(
    <MapContainer className={mapStyles} center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default SingleSignMap;