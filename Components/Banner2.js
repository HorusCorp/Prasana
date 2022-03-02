import React, {useState} from 'react'
import  Link  from 'next/link'

function Banner2() {
    const [show, setShow] = useState(false);
    const [active, setactive] = useState(false);

    return (
    <div className='header__background'>
{/*======================================== NAVBAR ====================================*/}
            <div className='Navbar'>
                <div className='Navbar__list_container'>
                    <ul>
                        <h1>PRASANA</h1>
                        <Link href="/"><li>Accueil</li></Link>
                        <Link href="/methodes"><li>Nos Méthodes</li></Link>
                        {/* <li>Nos Tarifs</li> */}
                    </ul>
                </div>
                <ul>
                  {/* <li className='black'>My Account</li> */}
                </ul>
            </div>
{/*======================================== CARDS and IMG ====================================*/}
        <div className='header__img_container'>
            <div className='header__img__text'>
                <h2>Etymologie du mot PRASANA</h2>
                <p>PRA du mot sankrit</p>
                <p>PRANA symbolise l'energie vitale</p>
                <p>SANA du latin sana, sanus, sanum signifie 'en bonne santé'</p>
            </div>
            <div className='header__img'></div>
        </div>
{/*======================================== CARDS hidden Text ====================================*/}
        {show?<div className='hidden__text__container'>
                <div className='hidden__text'>
                    <h3>Sport</h3>
                    <div className='separator__vertical'></div>
                    <h3>Business</h3>
                </div>
            </div>
        :''}
    </div>
    )
}

export default Banner2