import style from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
        <div className={style.sidebarLinks}>
            <Link to=""> <FaCircleUser className={style.sidebarIcon} /> <p>Editar Perfil </p> </Link> 
            <Link to=""> <RiCalendarScheduleLine className={style.sidebarIcon} /> <p>Meus Agendamentos</p> </Link>
            <Link to=""> <MdOutlinePrivacyTip className={style.sidebarIcon} /> <p>Termos de Privacidade</p> </Link>
            <Link to=""> <MdOutlineHelpOutline className={style.sidebarIcon} /> <p>Ajuda e Suporte</p> </Link>
            <Link to=""> <FiLogOut className={style.sidebarIcon} /> <p>Termos de Privacidade</p> </Link>
        </div>
    </div>
  )
}

export default Sidebar