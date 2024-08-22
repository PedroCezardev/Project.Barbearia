import style from './EditProfile.module.css'
import perfil from '../../../assets/corte_simple.svg';

const EditProfile = () => {
  return (
    <div className={style.editProfile}>
        <div className={style.editHeader}>
            <div className={style.editHeaderImage}>
                <img src={perfil} alt="" />
                <button>Alterar Foto de Perfil</button>
            </div>
            <div className={style.editHeaderName}>
                <div className={style.editHeaderNameUser}>
                    <h1>Seu nome de usuário: </h1>
                    <p>User 1</p>
                </div>
                <div className={style.editHeaderNameAlter}>
                    <p>Deseja alterar nome de usuário?</p>
                    <input type="text" placeholder='Digite seu novo nome' />
                    <button>Alterar</button>
                </div>
            </div>
        </div>
        <div className={style.editContainer}>
            <div className={style.editContent}>
                <div className={style.editContentEmail}>
                    <h1>Seu Email de usuário:</h1>
                    <p>user1@gmail.com</p>
                </div>
                <p>Deseja alterar Email de usuário?</p>
                <input type="text" placeholder='Digite seu Email' />
                <button>Alterar</button>
            </div>
            <div className={style.editContent}>
                <h1>Sua Descrição de usuário: </h1>
                <p>LoremIpsumLoremIpsumLoremIpsum
                    IpsumLoremIpsumLoremIpsumLorem
                    IpsumLoremIpsumLoremIpsumLorem
                    LoremIpsumLoremIpsumLoremIpsum
                </p>
                <p>Deseja alterar Descrição de usuário?</p>
                <textarea type="text" placeholder='Digite aqui' />
                <button>Alterar</button>
            </div>
        </div>
    </div>
  )
}

export default EditProfile