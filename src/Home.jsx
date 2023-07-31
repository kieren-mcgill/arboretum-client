import { Typography } from "@mui/material";
import Image from "mui-image";

import scanningCodeImage from './img/scanning-code.png'
import { css } from "@emotion/css";

const Home = () => {

  const containerStyle = css`
    max-width: 400px;
    margin: auto;
  `;

  return (
    <div className={containerStyle}>
      <Typography variant='h4' align="center">QR Code Trail</Typography>
      <Typography mb={3} mt={1}>
        As you walk around the Yorkshire Arboretum you will see QR codes on trees or other points of interest.
        Scan these to find out more about your current location.
      </Typography>
      <Typography align='center' fontWeight='bold'>Scanning a QR code</Typography>
      <Typography mb={1} mt={1}>
        To scan a QR code with your phone, open your camera app and point your camera at the code.
        The code doesn't need to fill the entire screen, but all four corners must be visible.
        A pop-up banner should appear; tap the banner or a yellow QR code icon to see the information about your location.
      </Typography>
      <Typography>
        If you are using an older Android phone you may need to use the Google lens app instead of the camera.
      </Typography>

      <Image
        src={scanningCodeImage}
        style={{ width: "90%", height: 'auto', paddingTop: '2rem' }}
      />
    </div>
  );
};

export default Home;
