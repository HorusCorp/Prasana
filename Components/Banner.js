import React, {useState} from 'react'

function Banner() {
    const [show, setShow] = useState(false);

    return (
    <div className='header__background'>
{/*======================================== NAVBAR ====================================*/}
            <div className='Navbar'>
                <div className='Navbar__list_container'>
                    <ul>
                        <h1>PRASANA</h1>
                        <li>Accueil</li>
                        <li>Nos Formations</li>
                        <li>Nos Tarifs</li>
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
        <div className='header__card__container'>
            <div className='header__card'>
                {/* <div className='gradiant'></div> */}
                <h2>Thérapies alternatives</h2>
                <p>Soignez vos douleurs physiques ou votre stress par des méthodes qui ont prouvées leur efficacité.</p>
            </div>
            <div className='header__card' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                {/* <div className='gradiant'></div> */}
                <h2>Développement personnel</h2>
                <p>Changez votre vie et atteignez vos objectifs, en changeant votre perception du monde qui vous entoure. Eliminez le stress qui vous empêche d'avancer. Reprenez le contrôle de votre vie.</p>
            </div>
            <div className='header__card'>
                {/* <div className='gradiant'></div> */}
                <h2>Optimiser vos performances</h2>
                <p>Le bien être physiques participe grandement au bien être mental. Devenez confiant grâce au sport !</p>
            </div>
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

export default Banner