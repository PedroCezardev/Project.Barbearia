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
                    <button>Atualizar</button>
                </div>
            </div>
        </div>
        <div className={style.editContainer}>
            <div className={style.editContent}>
                <h1>Alterar Email</h1>
                <p>user1@gmail.com</p>
                <input type="text" placeholder='Digite seu Email' />
            </div>
            <div className={style.editContent}>
                <h1>Alterar Descrição</h1>
                <p>LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
                LoremIpsumLoremIpsumLoremIpsumLoremIpsumLoremIpsum
                </p>
                <input type="text" placeholder='Digite aqui' />
            </div>
        </div>
    </div>
  )
}

export default EditProfile