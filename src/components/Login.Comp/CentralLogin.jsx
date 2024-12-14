import { useState } from 'react';
import style from './CentralLogin.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CentralLogin = () => {
  const [activeForm, setActiveForm] = useState('signin');

  const handleSigninClick = () => {
    setActiveForm('signin');
  };

  const handleSignupClick = () => {
    setActiveForm('signup');
  };

  return (
    <div className={style.container}>
      <div className={style.buttonsForm}>
        <div className={style.btnColor}
              style={{ left: activeForm === 'signin' ? '0px' : '115px' }}>
        </div>
        <button className={style.btnSignin} id="btnSignin" onClick={handleSigninClick}>
          Entrar
        </button>
        <button id="btnSignup" onClick={handleSignupClick}>
          Cadastre-se
        </button>
      </div>

      <form id="signin" className={style.form} style={{ left: activeForm === 'signin' ? '180px' : '-750px' }}>
        <input type="text" placeholder="Email" required />
        <i className={`fas fa-envelope ${style.iEmailLogin}`}></i>
        <input type="password" placeholder="Senha" required />
        <i className={`fas fa-lock ${style.iPasswordLogin}`}></i>
        <div className={style.divCheck}>
          <input type="checkbox" />
          <span>Lembrar da Senha</span>
        </div>
        <button className={style.button} type="submit">Entrar</button>
      </form>

      <form
        id="signup"
        className={style.form}
        style={{ left: activeForm === 'signup' ? '180px' : '750px' }}
      >
         <input type="text" placeholder="Nome" required />
         <i className={`fas fa-envelope ${style.iNome}`}></i>
        <input type="text" placeholder="Email" required />
        <i className={`fas fa-envelope ${style.iEmail}`}></i>
        <input type="password" placeholder="Senha" required />
        <i className={`fas fa-lock ${style.iPassword}`}></i>
        <input type="password" placeholder="Confirme a Senha" required
        />
        <i className={`fas fa-lock ${style.iPassword2}`}></i>
        <div className={style.divCheck}>
          <input type="checkbox" required />
          <span>Termos de Privacidade</span>
        </div>
        <button className={style.button} type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CentralLogin;
