import { Box, Grid, Modal, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import { useContext, useState } from "react";
import AppContext from "./context";
import { useNavigate } from "react-router-dom";

const ASingleSign = ({ sign }) => {

  const { client } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const delThisSign = (id) => {
    client.deleteSign(id)
    handleClose()
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '1px solid #000',
    backgroundColor: '#F4F2EC',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Grid flexDirection="row" wrap="nowrap" justifyContent="space-between" container
            sx={{ backgroundColor: '#F4F2EC' }} m={2} p={2}>

        <Grid item xs={12} sm={10}>
          <Typography variant="h5">
            {`${sign.title}`}
          </Typography>
          <Typography mb={1} color="text.secondary" sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}>
            {`${sign.description.slice(0, 100)}...`}
          </Typography>
        </Grid>

        <Grid item>
          <Grid container alignItems="flex-end" spacing={1} flexDirection='column'>
            <Grid item>
              <Button sx={{ width: '80px' }} size="small" variant='contained'
                      onClick={() => navigate(`/signs/${sign.id}`)}>View</Button>
            </Grid>
            <Grid item>
              <Button sx={{ width: '80px' }} size="small" variant='contained'
                      onClick={() => navigate(`/edit-sign/${sign.id}`)} data-cy={`edit-sign-${sign.id}`}>Edit</Button>
            </Grid>
            <Grid item>
              <Button sx={{ width: '80px' }} size="small" variant='contained' onClick={handleOpen}
                      data-cy={`delete-sign-${sign.id}`}>Delete</Button>
            </Grid>
            <Grid item>
              <Button sx={{ width: '80px' }} size="small" variant='contained'
                      onClick={() => navigate(`/view-qr/${sign.id}`)} data-cy={`view-code-${sign.id}`}>QR Code</Button>
            </Grid>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                  Delete
                </Typography>
                <Typography id="modal-description" m={1}>
                  Are you sure you want to delete this sign?
                </Typography>
                <Grid container>
                  <Grid item m={1}><Button variant='contained' onClick={handleClose}
                                           data-cy='cancel-del'>Cancel</Button></Grid>
                  <Grid item m={1}><Button variant='contained' onClick={() => delThisSign(sign.id)}
                                           data-cy='confirm-del'>Delete</Button></Grid>
                </Grid>
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ASingleSign;