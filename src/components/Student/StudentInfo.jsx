export default function Student({ student }){
    return(
        <div className="card p-3">
            <h6>Informações pessoal</h6>

            <p><strong>Nome: </strong> {student.name}</p>
            <p><strong>Sexo: </strong> {student.sexo}</p>
            <p><strong>BI: </strong> {student.bi}</p>
            <p><strong>Filho de: </strong> {student.father}</p>
            <p><strong>e de: </strong> {student.mother}</p>
            <p><strong>Província: </strong> {student.provincia}</p>
            <p><strong>Municipio: </strong> {student.municipio}</p>
            <p><strong>Residência: </strong> {student.residencia}</p>
            <p><strong>Contacto: </strong> {student.contacto}</p>
        </div>
    )
}