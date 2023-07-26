import { Box } from "@mui/material";
import Header from "./Header";
import AppRouter from "./AppRouter";
import Footer from "./Footer";

const App = () => {

  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Box>
        <Header/>
        <Box sx={{ width: '90vw', margin: 'auto' }}>
          <AppRouter/>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default App;
