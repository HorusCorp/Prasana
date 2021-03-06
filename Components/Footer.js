import React from 'react'
import  Link  from 'next/link'

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
                        <Link href="/"><li>Accueil</li></Link>
                        <Link href="/bienetretravail"><li>Bien être au travail</li></Link>
                        <Link href="/methodes"><li>Autres techniques</li></Link>
                        <li>Contactez-nous</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
