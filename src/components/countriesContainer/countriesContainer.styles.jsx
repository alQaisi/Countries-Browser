import styled,{css} from "styled-components";

const isErrorStyles=css`
    display: grid;
    place-items: center;
`;

export const CountriesContainerElem=styled.div`
    width:100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ${({isError})=>isError && isErrorStyles};
`;

export const Warning=styled.h1`
    font-size:2.5rem;
    box-sizing: border-box;
    padding:10px 15px;
    text-align: center;
`;