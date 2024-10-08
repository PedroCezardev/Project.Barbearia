import style from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Home.Comp/Hero/Hero';
import Servicos from '../../components/Home.Comp/Servicos/Servicos';
import About from '../../components/Home.Comp/about/About';
import Address from '../../components/Home.Comp/Address/Address';
import Contact from '../../components/Home.Comp/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Home.Comp/Carousel/Carousel';
import ContactTypes from '../../components/Home.Comp/ContactTypes/ContactTypes';

const Home = () => {
  return (
    <div className={style.home}>
        <Navbar />
        <section id="agendamentos">
          <Hero />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="address">
          <Address />
        </section>
        <section id="contactTypes">
          <ContactTypes />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Carousel />
        <Footer />
    </div>
  )
}

export default Home