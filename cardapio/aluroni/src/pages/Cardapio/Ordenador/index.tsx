import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';

export default function (){
    return (
        <button className = {styles.ordenador}>
            <span>Ordenar Por</span>
            <div className={styles.ordenador__options}>
                {opcoes.map(opcao => (
                    <div 
                        key={opcao.value} 
                        className={styles.ordenador__options}>
                            {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}