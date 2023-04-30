
import './components/assets/Home.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home(){
    return(
    <>
    <div id="sections">
        <section className="home-section-1">
            <video src={`https://www.yulu.bike/wp-content/uploads/2019/08/banner_mini.mp4`} loop autoPlay muted id="myVideo"></video>   
            <div className="content">
                <div className="container">
                    <h1 className="text-1">Let's Move </h1>
                    <span className="text-2">towards a </span>
                    <span className="text-3">sustainable future</span>
                    <p className="text-4">Micro-mobility solutions that help reduce traffic congestion and air pollution</p>
                </div>
            </div>
        </section>
    </div>

    <About/>

    <Contact/>
    <Footer/>
    </>
    );
}