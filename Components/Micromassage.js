import React from 'react'
import Image from 'next/image'

function Micromassage() {
  return (
    <div className='micromassage__container'>
          <div className='bownen__text'>
          <div className='micromassage__content__container'>
              <h2>Micromassage Cranien</h2>
              <Image
                src="/micromassage.jpg"
                alt="Picture of the author"
                width={1000}
                height={400}
              />
              <p>Dérivé de l'ostéopathie énergétique, le micro-massage crânien rétablit le mouvement respiratoire primaire, et va relancer tout doucement des pulsations au niveau de la boîte crânienne et donc dans le corps tout entier. </p>
              <p>l n'y a pas de manipulations, le toucher est doux, les mouvements presque imperceptibles, il n'y a donc aucun risque, ni contre-indications. La durée est d'environ 30 MIN. Le résultat est immédiat.</p>
              <p className='micromassage__lastline'>se pratique habillé sur la table de massage sur le dos.</p>
              
              <h3>Indications :</h3>
              <p>❖ Maux de tête</p>
              <p>❖ Cervicalgies</p>
              <p>❖ Fatigue Nerveuse(instalée, malgré repos)</p>
              <p>❖ Deprime</p>
              <p>❖ Sentiment d'enfermement (besoin de respirer), manque d'espace</p>
              <p>❖ Manque de motivation</p>
              <p>❖ Manque d'entrain, sentiment de lourdeur</p>
              <p>❖ Repercution partout dansl e corps via la colonne vertébrale</p>
              </div>
         </div>  
      </div>
  )
}

export default Micromassage