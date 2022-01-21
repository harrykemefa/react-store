import React from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import ProductSlider from '../components/ProductSlider';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';



const Home = () => {
    return (
        <div>
            <Announce />
         <Navbar />
         <Slider />
         <Categories />
         <ProductSlider />
         <NewsLetter />
         <Footer />
        </div>
    )
}

export default Home;
