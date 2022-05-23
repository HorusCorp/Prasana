import React, {useState} from 'react'
import  Link  from 'next/link'

function Banner() {
    const [show, setShow] = useState(false);
    const [active, setactive] = useState(false);

    const handleClick = () => {

    }

    return (
    <div className='header__background'>
{/*======================================== NAVBAR ====================================*/}
            <div className='Navbar'>
                <div className='Navbar__list_container'>
                    <ul>
                        <h1>PRASANA</h1>
                        <Link href="/"><li>Accueil</li></Link>
                        <Link href="/bienetretravail"><li>Bien être au travail</li></Link>
                        <Link href="/methodes"><li>Autres techniques</li></Link>
                        {/* <li>Nos Tarifs</li> */}
                    </ul>
                </div>
                <ul>
                  {/* <li className='black'>My Account</li> */}
                </ul>
            </div>
{/*======================================== CARDS and IMG ====================================*/}
        {/* <div className='header__img_container'>
            <div className='header__img__text'>
                <h2>Etymologie du mot PRASANA</h2>
                <p>PRA du mot sankrit</p>
                <p>PRANA symbolise l'energie vitale</p>
                <p>SANA du latin sana, sanus, sanum signifie 'en bonne santé'</p>
            </div>
            <div className='header__img'></div>
        </div> */}
        {/* <div className='header__card__container'>
            <Link href="/methodes"><div className='header__card'>
                <h2>Thérapies alternatives</h2>
                <p>Soignez vos douleurs physiques ou votre stress par des méthodes qui ont prouvées leur efficacité.</p>
            </div></Link>
            <div className='header__card' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                <h2>Développement personnel</h2>
                <p>Changez votre vie et atteignez vos objectifs, en changeant votre perception du monde qui vous entoure. Eliminez le stress qui vous empêche d'avancer. Reprenez le contrôle de votre vie.</p>
            </div>
            <div className='header__card'>
                <h2>Optimiser vos performances</h2>
                <p>Le bien être physiques participe grandement au bien être mental. Devenez confiant grâce au sport !</p>
            </div>
        </div> */}
{/*======================================== CARDS hidden Text ====================================*/}
        {/* {show?<div className='hidden__text__container'>
                <div className='hidden__text'>
                    <h3>Sport</h3>
                    <div className='separator__vertical'></div>
                    <h3>Business</h3>
                </div>
            </div>
        :''} */}
    </div>
    )
}

export default Banner
