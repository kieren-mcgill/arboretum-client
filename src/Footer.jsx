import { Box, Container, Typography } from "@mui/material";
import { css } from "@emotion/css";
import eyupLogo from './img/eyup-logo.png'

const Footer = () => {

  return (
    <Box mx={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '30px'}}
               className={css`height: 60px;
                 border-top: solid #AEB491 2px`
               }>
      <Box sx={{display: 'flex'}}>
        <img src={eyupLogo} width="20" height="20" alt='Eyup Logo'/>
        <Typography align='center'
                    variant='subtitle2'
                    className={css`color: #d8602a; padding-left: 10px`
        }>
          Created by the Eyup team 2023</Typography>
      </Box>
    </Box>
  )
}

export default Footer

