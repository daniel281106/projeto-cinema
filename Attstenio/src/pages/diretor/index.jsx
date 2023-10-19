import * as C from "./diretor.js";
import { useState, useEffect } from "react";
import Header from "../../componets/header/index.jsx";

const diretorfilme = () => {
    const [values, setValues] = useState();
    const [data, setData] = useState([]);

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handlePostDiretor = async () => {
        try {
            fetch("http://localhost:3000/diretor", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/diretor');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();

    }, []);


    return (
        <>
            <C.conteiner>
                <C.form>
                    <C.cinemat>Adicione diretores</C.cinemat>
                    <C.input
                        name="nome_diretor"
                        className="input"
                        type="text"
                        placeholder="nome do diretor"
                        onChange={handleChangeValues}
                    ></C.input>
                    <C.button onClick={handlePostDiretor}>Confirmar</C.button>
                </C.form>
                <C.tabela>
                    <C.Table>
                        <thead>
                            <C.TableRow>
                                <C.TableHeader>codigo do diretor</C.TableHeader>
                                <C.TableHeader>nome do diretor</C.TableHeader>

                            </C.TableRow>
                        </thead>
                        <tbody>
                            {data.map((data, index) => (
                                <C.TableRow key={index}>
                                    <C.TableCell>{data.codigo_diretor}</C.TableCell>
                                    <C.TableCell>{data.nome_diretor}</C.TableCell>
                                </C.TableRow>
                            ))}
                        </tbody>
                    </C.Table>
                </C.tabela>

            </C.conteiner>
        </>
    );
};
export default diretorfilme;
