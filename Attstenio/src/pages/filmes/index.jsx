import * as C from "./filmes.js"
import { useState, useEffect } from "react";


const filmesbody = () => {

    const [values, setValues] = useState()
    const [data, setData] = useState([])



    const handleChangeValues = (value) => {
        const newValue = value.target.type === 'number' ? parseFloat(value.target.value) : value.target.value;

        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: newValue,
        }));
    };

    const handlePostValue = async () => {

        try {
            fetch("http://localhost:3000/registre_filme", {
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
                const response = await fetch('http://localhost:3000/filmes');
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
                    <C.cinemat>Adicione filmes</C.cinemat>
                    <C.input
                        name="nome_filme"
                        className="input"
                        type="text"
                        placeholder="nome do filme"
                        onChange={handleChangeValues}
                    >

                    </C.input>
                    <C.input
                        name="ano_lancamento"
                        className="input"
                        type="number"
                        placeholder="ano de lançamento"
                        onChange={handleChangeValues}
                    >

                    </C.input>
                    <C.input
                        name="categoria_filme"
                        className="input"
                        type="text"
                        placeholder="categoria do filme"
                        onChange={handleChangeValues}
                    >

                    </C.input>
                    <C.input
                        name="codigo_diretor"
                        className="input"
                        type="number"
                        placeholder="codigo do diretor"
                        onChange={handleChangeValues}
                    >

                    </C.input>
                    <C.button onClick={handlePostValue}>Confirmar</C.button>
                </C.form>
                <C.tabela>
                    <C.Table>
                        <thead>
                            <C.TableRow>
                                <C.TableHeader>nome do filme</C.TableHeader>
                                <C.TableHeader>ano de lançamento</C.TableHeader>
                                <C.TableHeader>categoria do filme</C.TableHeader>
                                <C.TableHeader>codigo do diretor</C.TableHeader>
                            </C.TableRow>
                        </thead>
                        <tbody>
                            {data.map((data, index) => (
                                <C.TableRow key={index}>
                                    <C.TableCell>{data.nome_filme}</C.TableCell>
                                    <C.TableCell>{data.ano_nascimento}</C.TableCell>
                                    <C.TableCell>{data.categoria_filme}</C.TableCell>
                                    <C.TableCell>{data.codigo_diretor}</C.TableCell>
                                </C.TableRow>
                            ))}

                        </tbody>
                    </C.Table>
                </C.tabela>

            </C.conteiner>
        </>
    )

};
export default filmesbody;