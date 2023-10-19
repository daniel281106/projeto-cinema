import styled from "styled-components";

export const conteiner = styled.main`
    width: 100%;
    height: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const form = styled.form`
    height: 30rem;
    width: 25rem;
    background-color: black;
    border: solid 1px orange;
    border-radius: 6px;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 30px;
    flex-direction: column;
    gap: 20px;
`;
export const tabela = styled.div`
    height: 30rem;
    width: 25rem;
    background-color: black;
    border: solid 1px orange;
    border-radius: 6px;
`;
export const input = styled.input`
    border-radius: 4px;
    width: 20rem;
    height: 2.5rem;
    outline: none;
    padding-left: 4px;
`;

export const button = styled.button`
    width:18rem;
    height: 2.5rem;
    border-radius: 6px;
    background-color: orange;
`;
export const cinemat = styled.h1`
    color: orange;

`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const TableHeader = styled.th`
  background-color: orange;
  border: 1px solid orange;
  padding: 8px;
  text-align: left;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  color: #fff;
`;

export const TableRow = styled.tr`
  
    background-color: #000;
    color: #fff;
  
`;