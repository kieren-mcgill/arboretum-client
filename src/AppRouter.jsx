import { Route, Routes } from "react-router-dom";
import PortalHome from "./PortalHome";
import Login from "./Login";
import Home from "./Home";
import { useContext } from "react";
import AppContext from "./context";
import Sign from "./Sign";
import Signup from "./Signup";
import ChangePassword from "./ChangePassword";
import SignForm from "./SignForm";
import EditSign from "./EditSign";
import ViewSigns from "./ViewSigns";
import QrViewer from './QrViewer';
import AllSignsMap from "./AllSignsMap";

const AppRouter = () => {

  const { token } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/gatehouse" element={token ? <PortalHome/> : <Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signs/:id" element={<Sign/>}/>
      <Route path="/add-new-user" element={token ? <Signup/> : <Login/>}/>
      <Route path="/change-password" element={token ? <ChangePassword/> : <Login/>}/>
      <Route path="/map-of-signs" element={<AllSignsMap/>}/>
      <Route path="/add-sign" element={token ? <SignForm/> : <Login/>}/>
      <Route path="/edit-sign/:id" element={token ? <EditSign/> : <Login/>}/>
      <Route path="/view-signs" element={token ? <ViewSigns/> : <Login/>}/>
      <Route path="/view-qr/:signId" element={token ? <QrViewer/> : <Login/>}/>
    </Routes>
  )
 }

 export default AppRouter;