import PropType from 'prop-types'

import './ListaItem.css'

// componente com a base de cada item
function Item({ titulo, paragrafo }){
    return(
        <>
            <div className="lista-item">
                <span className="div-icone-raio">
                  <img src="/public/img/raio.svg" alt="icone-de-raio" className="icone-raio" />
                </span>
                <h3>{titulo}</h3>
                <p>{paragrafo}</p>
            </div>
        </>
    )
}
Item.propType ={
    titulo: PropType.string.isRequired,
    paragrafo: PropType.string.isRequired,
}


// componente com todos os itens
export default function ListaItem(){
    return(
        <>
         <div className="div-lista-item">
                <Item 
                    titulo="Automated Expense Tracking"
                    paragrafo="Eclipse automatically tracks your expenses and 
                    provides a monthly report, in just a single click."
                />
                <Item 
                    titulo="Investment Opportunities"
                    paragrafo="Eclipse provides you with the best investment 
                    opportunities in Mutual Funds and FDs."
                />
                <Item 
                    titulo="Latest Financial News"
                    paragrafo="Eclipse provides you with the latest financial
                    news and market trends."
                />
                <Item 
                    titulo="Advance Tax Calculator"
                    paragrafo="Take the guesswork out of your tax calculations
                    with advanced tax calculator"
                />
                <Item 
                    titulo="Eclipse Education (For Users)"
                    paragrafo="Eclipse Education is a fintech blogging platform
                    for users to learn about finance and investments."
                />
                <Item 
                    titulo="Eclipse Education (For Writers)"
                    paragrafo="A fintech blogging platform for writers to
                    showcase their work in finance and investments."
                />
            </div>
            
        </>
    )
}