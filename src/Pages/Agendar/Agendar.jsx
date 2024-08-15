  import Footer from '../../components/Footer/Footer'
  import Navbar from '../../components/Navbar/Navbar'
  import style from './Agendar.module.css'

  const Agendar = () => {
    return (
      <div className={style.agendar}>
        <Navbar />
        <Footer />
      </div>
    )
  }

  export default Agendar