import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AppContext from './context';
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/css";
import ListOfSigns from "./ListOfSigns";


const Sign = () => {
  const { client, sign, baseUrl} = useContext(AppContext)
  const { id } = useParams()
  useEffect(() => {
    client.getSign(id)
  }, [id])

  const textStyles = css`
    font-family: 'Asap', sans-serif;
    font-size: 28px 
  `
  const signImageContainerStyles = css`
    max-width: 400px;
  `;

  const signImageStyles = css`
    width: 100%;
    object-fit: cover;
  `

  return (
    <>
      {sign ? (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Box className={signImageContainerStyles}>
            {sign.signImageId && (
              <img
                data-cy="signImageEl"
                src={`${baseUrl}/sign-images/${sign.signImageId}`}
                alt={`${sign.title}`}
                className={signImageStyles}
              />
            )}
          <p className={textStyles}>{sign.title}</p>
          <Typography>{sign.description}</Typography>
          </Box>
        </Box>
      ) : (
        <>
          <Typography>Sorry, but that page was not found.</Typography>
          <ListOfSigns/>
        </>
      )}
    </>
  )
}

export default Sign;