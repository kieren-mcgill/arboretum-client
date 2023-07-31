import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AppContext from './context';
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/css";
import SingleSignMap from "./SingleSignMap";
import Button from "@mui/material/Button";
import * as React from "react";
import AllSignsMap from "./AllSignsMap";


const Sign = () => {
  const { client, sign, baseUrl, token } = useContext(AppContext)
  const { id } = useParams()
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    client.getSign(id);
    const delay = 2000;
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [id])

  const loggedIn = Boolean(token);
  const navigate = useNavigate();

  const textStyles = css`
    font-family: 'Asap', sans-serif;
    font-size: 28px
  `
  const signContainerStyles = css`
    max-width: 400px;
    @media (min-width: 751px) {
      border: 4px dashed grey;
      padding: 20px;
    }
  `;

  const signImageStyles = css`
    width: 100%;
    object-fit: cover;
  `;

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        {loggedIn && (
          <Button
            sx={{ marginBottom: '30px' }}
            size="small"
            variant='contained'
            onClick={() => navigate(`/view-signs`)}
          >
            Back to View/Edit Signs
          </Button>
        )}
        {sign ? (
          <Box className={signContainerStyles}>
            {sign.signImageId && (
              <img
                data-cy="signImageEl"
                src={`${baseUrl}/sign-images/${sign.signImageId}`}
                alt={sign.title}
                className={signImageStyles}
              />
            )}
            <p className={textStyles}>{sign.title}</p>
            <Typography>{sign.description}</Typography>
            <SingleSignMap lat={sign.lat} lon={sign.lon} title={sign.title}/>
          </Box>
        ) : (
          showFallback && (
            <Box>
              <Typography>Sorry, I couldn't find that, check out the map to find what you're looking for.</Typography>
              <AllSignsMap/>
            </Box>
          )
        )}
      </Box>
    </>
  );
}

export default Sign;