import { ClipLoader } from "react-spinners";
import { ListStyled } from "./List.styled";
import ErrorComponents from '../ErrorComponent/ErrorComponents'

const List = ({ pokemon, loading }) => {
    return (
       <>
        {loading && <ClipLoader/>}
        {!loading && pokemon && <ListStyled>
            <h2>{pokemon.name}</h2>
            <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.id} 
            width='200'
            />
        </ListStyled>}
       </>
    )
};

export default List;