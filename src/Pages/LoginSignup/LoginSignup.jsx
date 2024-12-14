import style from './Login.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CentralLogin from '../../components/Login.Comp/CentralLogin';

const LoginSignup = () => {
  return (
    <div className={style.loginSignup}>
        <Navbar />
        <CentralLogin />
        <Footer />
    </div>
  )
}

export default LoginSignup