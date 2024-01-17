import PropType from 'prop-types'

export default function Button({ conteudo, classe }) {
  return (
    <>
    <button className={classe}>{conteudo} <img src="/public/img/seta.svg" alt="seta-icone" className='icon-seta' /></button> 
    </>
  )
}
Button.propType ={
    conteudo: PropType.string.isRequired,
    classe: PropType.string.isRequired
}
