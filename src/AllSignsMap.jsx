import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { css } from "@emotion/css";
import { useContext, useEffect } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link, Typography } from "@mui/material";
import AppContext from "./context";

const AllSignsMap = () => {
  const { signs, client } = useContext(AppContext)

  useEffect(() => {
    client.getSigns()
  }, [])

  const centrePosition = [54.1187, -0.9289]

  const mapStyles = css`
    margin: auto;
    margin-top: 30px;
    width: auto;
    max-width: 1000px;
    height: 750px;
  `;

  return(
    <MapContainer className={mapStyles} center={centrePosition} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {signs.map((sign, i) => {
        const position = [sign.lat, sign.lon]
        return(
          <Marker key={i} position={position}>
            <Popup>
              <Link href={`/signs/${sign.id}`}>
                <Typography display="inline">{sign.title}</Typography>
                <OpenInNewIcon sx={{paddingTop: "5px"}} fontSize="small"/>
              </Link>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default AllSignsMap;