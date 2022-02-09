import React from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import MainSlider from '../components/MainSlider';
import Categories from '../components/Categories';
import ProductSlider from '../components/ProductSlider';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div>
            <Announce />
         <Navbar />
         <MainSlider />
         <Categories />
         <ProductSlider />
         <NewsLetter />
         <Footer />
        </div>
    )
}

export default Home;
