import style from './Profile.module.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Profile = () => {
  return (
    <div className={style.profile}>
        <Navbar />
        <Footer />
    </div>
  )
}

export default Profile