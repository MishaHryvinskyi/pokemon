import styled from "styled-components";

export const Container = styled.div`
    max-width: 480px;
    padding: 0 20px;
    margin: 0 auto;

    @media (min-width:768px) and (max-width: 1199px) {
        max-width: 768px;
    }
    @media (min-width:1200px) {
        max-width: 1200px;
    }
`;