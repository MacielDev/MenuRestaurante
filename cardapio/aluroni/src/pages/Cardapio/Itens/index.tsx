import itens from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';
import cardapio from './itens.json';


interface Props{
    busca: string;
    filtro : number | null;
    ordenador : string
}

export default function Itens(props : Props){
    const [lista,setLista] = useState(cardapio);
    const { busca,filtro,ordenador} = props;

    function testaBusca(title: string){
        const regex = new RegExp(busca,'i');
        return regex.test(title);
    }

    function testarFiltro(id :number){
        if( filtro !== null) return filtro === id; 
        return true;
    }

    function ordenarPorPropriedadeCrescente(
                            listaParaOrdenar :typeof cardapio,
                            propriedade:keyof Pick<typeof cardapio[0], 'size' | 'serving' | 'price'  >){
        return listaParaOrdenar.sort((a,b)=> a[propriedade] > b[propriedade]? 1 : -1);
    }

    function ordenar(novaLista : typeof cardapio){
        switch(ordenador){
            case 'porcao':
                return ordenarPorPropriedadeCrescente(novaLista, 'size');
            case 'qtd_pessoas':
                return ordenarPorPropriedadeCrescente(novaLista,'serving');
            case 'preco':
                return  ordenarPorPropriedadeCrescente(novaLista,'price');
            default:
                return novaLista;
        }
    }

    useEffect(()=> {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testarFiltro(item.category.id));
        setLista(ordenar(novaLista));
    },[busca,filtro, ordenador])

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <div>
                    <Item key={item.id} {...item}/>
                </div>
            ))}
        </div>
    )
}