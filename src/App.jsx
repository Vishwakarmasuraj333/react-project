import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import CardSlider from "./CardSlider.jsx";
import Login from "./Login.jsx";
import Blogs from "./Blogs.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import BackToTopButton from "./BackTop.jsx";


function App() {


    return (
        <>
          
            <Header />
            <Banner />
            <CardSlider />
            <Login />
            <Blogs />
            <Contact />
            <Footer />
            <BackToTopButton />
        </>
    );
}

export default App;