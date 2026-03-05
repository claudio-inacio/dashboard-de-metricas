


export default function InvalidUrlAlertComponent() {

    return (
        <>
            <p>O parametro de filtro utilizado na url não é valido...</p>
            <br />
            <p>Para garantir uma filtragem correta informe uma url tipo:</p>
            <b>/campaigns?filter=ativa</b>
            <br />
            <br />
            <h5 className="font-extrabold">OPÇÕES DISPONIVEIS</h5>
            <b>ativa | pausada | todos | finalizada</b>
        </>
    );
}
