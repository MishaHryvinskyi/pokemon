import styled from "styled-components";

export const PocemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PokemonTitle = styled.h2`
    font-weight: 800;
    font-size: 24px;
    color: darkblue;

    @media (min-width:768px) {
        font-size: 34px;
    }
`;

export const ImgPokemon = styled.img`
    display: block;
    width: 300px;

    @media (min-width:768px) {
        width: 400px;
    }
`;