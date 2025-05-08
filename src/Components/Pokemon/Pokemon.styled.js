import styled from "styled-components";

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px auto 30px auto;
    background-color: skyblue;
    padding: 15px;
    border-radius: 20px;

    & img {
        background-color: white;
        display: block;
        margin: 0 auto;
        width: 100%;
        border-radius: 10px;
    }

    @media (min-width:768px) {
        width: 600px;
        height: 600px;
        padding: 60px;

        & img {
            width: 400px;
        }
    }
`;