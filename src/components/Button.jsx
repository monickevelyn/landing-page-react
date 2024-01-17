import PropType from 'prop-types'
import seta from '/public/img/seta.svg'

export default function Button({ conteudo, classe }) {
  return (
    <>
    <button className={classe}>{conteudo} <img src={seta} alt="seta-icone" className='icon-seta' /></button> 
    </>
  )
}
Button.propType ={
    conteudo: PropType.string.isRequired,
    classe: PropType.string.isRequired
}
