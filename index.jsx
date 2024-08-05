import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import Login from "./Pages/Login";
import VanDetail from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Host/Dashbord";
import Income from "./Pages/Host/Income";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetail from "./Pages/Host/HostVanDetail";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import Reviews from "./Pages/Host/Reviews";
import NotFound from "./Pages/NotFound";
import Layout from "./Components/Layout"
import HostLayout from "./Components/HostLayout";
import "./style.css";
import "./server";
import AuthRequired from "./Components/AuthRequired";


function App() {
  return (
    <BrowserRouter>
      <Routes >

        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />}/>
            <Route path="vans/:id" element={<VanDetail />}/>
            <Route path="login" element={<Login/>}/>
          
        <Route element={<AuthRequired/>}>
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />}/>

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="photo" element={<HostVanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>   
          </Route>
        </Route>
           
            <Route path="*" element= {<NotFound/>}/>
          </Route>

      </Routes> 

    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
