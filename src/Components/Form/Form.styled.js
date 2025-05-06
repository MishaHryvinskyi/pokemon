import styled from "styled-components";

export const FormContainer = styled.form`
    padding: 60px 0;
    background-color: skyblue;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & input {
        width: 80%;
        height: 50px;
        margin-right: 20px;
        border-radius: 10px;
        border: none;

        @media (min-width: 768px) and (max-width: 1199px) {
            max-width: 400px;
        }

        @media (min-width: 1200px) {
            max-width: 600px;
        }
    }

    & button {
            cursor: pointer;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border: none;
        }
`;