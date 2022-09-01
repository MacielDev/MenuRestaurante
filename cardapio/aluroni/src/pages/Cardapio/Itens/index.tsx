import itens from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';

export default function Itens(){
    return (
        <div className={styles.itens}>
            {
                itens.map(item => (
                        <div>
                            <Item 
                                key={item.id}
                                {...item}
                            />
                        </div>
                ))}
        </div>
    )
}