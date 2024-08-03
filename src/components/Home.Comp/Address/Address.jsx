import style from './Address.module.css';
import endereco_img from '../../../assets/endereco.svg';

const Address = () => {

    const EnderecoData = [
        {
            id: 1,
            imagem: endereco_img,
            Unidade: "Unidade 1 - Monte",
            Endereco: "Rua João Paulo IV, N 187 - Olinda"
        },
        {
            id: 2,
            imagem: endereco_img,
            Unidade: "Unidade 2 - Nobre",
            Endereco: "Travessa Rio Solimões, N 12 - Paulista",
        },
    ];

  return (
    <div className={style.address}>
        <div className={style.addressHeader}>
            <h1>Nossas Unidades</h1>
            <hr />
        </div>
        <div className={style.addressItem}>
            { EnderecoData.map((item, i) => (
                <div key={i}>
                    <img src={item.imagem} alt="" />
                    <h2>{item.Unidade}</h2>
                    <p>{item.Endereco}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Address