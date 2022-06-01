import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable () {
    useEffect(() => {
        api.get('transactions')
        .then(({data, ...res}) => console.log({data, res}))
        .catch(res => console.log("Erro!"))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>{new Date().toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>aluguel</td>
                        <td className="withdraw">- R$12.000,00</td>
                        <td>casa</td>
                        <td>{new Date().toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}