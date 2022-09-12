import "./homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedHotelRating from "../../components/FeaturedHotelRating/FeaturedHotelRating";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guest love</h1>
        <FeaturedHotelRating/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Homepage;
