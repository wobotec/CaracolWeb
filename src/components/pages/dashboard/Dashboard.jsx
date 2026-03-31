
import './Dashboard.css';
import { useEffect, useState } from "react";
import iconCaracol from "./../../../assets/img/COLEGIAL.png";

const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const Dashboard1 = () => {
    const [hora, setHora] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
        const atualizar = () => {
            const agora = new Date();

            const h = String(agora.getHours()).padStart(2, '0');
            const m = String(agora.getMinutes()).padStart(2, '0');
            const s = String(agora.getSeconds()).padStart(2, '0');
            setHora(`${h}:${m}:${s}`);

            const dia = diasSemana[agora.getDay()];
            const num = agora.getDate();
            const mes = meses[agora.getMonth()];
            const ano = agora.getFullYear();
            setData(`${dia}, ${num} de ${mes} de ${ano}`);
        };

        atualizar();
        const interval = setInterval(atualizar, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="row wrapper border-bottom page-heading">
                <div className="col-lg-8 navbar-left">
                    <h1>Caracol</h1>
                    <p>Complexo Escolar Fonte de Saber</p>
                    <p>Ano lectivo: 2025-2026</p>
                </div>

                <div className="col-lg-3 navbar-right">
                    <center>
                        <h1><strong>{hora}</strong> </h1>
                        <p>{data}</p>
                    </center>
                </div>
            </div>

            <div>
                <center>
                    <img className="logo" src={iconCaracol} alt="Caracol Image" />
                </center>
            </div>
        </>
    );
}

export default Dashboard1;