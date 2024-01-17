import PropType from 'prop-types'

export default function Sections({ titulo, paragrafo, classe }){
    return(
        <>
        <div className={classe}>
            <h2>{titulo}</h2>
            <p>{paragrafo}</p>
        </div>
        </>
    )
}
Sections.propType ={
    titulo: PropType.string.isRequired,
    paragrafo: PropType.string.isRequired,
    classe: PropType.string.isRequired
}