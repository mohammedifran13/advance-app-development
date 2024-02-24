import NavBar from '../Components/NavBar'
import '../assets/css/Homepage.css';
// import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


const Homepage = () => {
  return (
    
    <div>
    <div >
    <NavBar />
    </div>
    <div className='Home'>
    <div className='contentHome'>
    <h1 style={{ paddingTop: "140px", color: "black", marginBottom: "30px" }}>Your boating life, in one app</h1>
    <div className="typeHome" style={{ color: "black", marginBottom: "320px" }}>
    <h3> Travel with us. You wouldn't even regret 1% of your voyage.
    </h3>
    </div>
    </div>
    </div>
    <Footer />
    </div>
    
    
    );
}

export default Homepage;