import React from 'react'

function Footer() {
    return (
        <div className='footer__container'>
            {/* <div className='footer__pricing'>
                <div className='footer__pricing_prenium'>
                    <h2>Prenium</h2>
                    <span>149.90</span>
                    <p>advantage1</p>
                    <p>advantage1</p>
                    <p>advantage1</p>
                </div>
                <div className='footer__pricing_pricinglist'>
                    <h2>Pricing List</h2>
                    <p>Trouverez ici une liste de nos tarifs pour chaques spécialités </p>
                    <div className='footer__btn'>En savoir +</div>
                </div>
            </div> */}

            <div className='footer__separator'></div>

            <div className='footer__navbar'>
                <div className='footer__logo'>PRASANA</div>
                <div className='footer__list'>
                    <ul>
                        <li>Accueil</li>
                        <li>Nos Formations</li>
                        <li>Contactez-nous</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
