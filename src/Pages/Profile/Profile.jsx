import style from './Profile.module.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Profile.Comp/Sidebar/Sidebar';
import EditProfile from '../../components/Profile.Comp/EditProfile/EditProfile';

const Profile = () => {
  return (
    <div className={style.profile}>
        <Navbar />
        <div className={style.profileContent}>
          <Sidebar />
          <EditProfile />
        </div>
        <Footer />
    </div>
  )
}

export default Profile