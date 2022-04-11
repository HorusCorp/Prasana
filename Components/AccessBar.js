import React from 'react'
import Image from 'next/image'

function Accessbar() {
  return (
    <div className='micromassage__container'>
          <div className='bownen__text'>
          <div className='micromassage__content__container'>
              <h2>Access Bar</h2>
              <Image
                src="/access.png"
                alt="Picture of the author"
                width={1000}
                height={400}
              />
              <p>C’est une méthode simple de relaxation intense, L’Access Bars , est une technique énergétique subtile et puissante, qui consiste à activer 32 points sur la tête. Chaque point correspond à une cartographie émotionnelle précise. Cela permet d’éliminer les pensées et les croyances erronées qui limitent nos actions. </p>
              <p> Access Bars va nettoyer les émotions et les jugements inutiles que nous avons gardé en nous toute notre vie. Il va agir comme un reset d’ordinateur et va nettoyer les fichiers inutiles pour laisser la place à des fichiers positifs, productifs et créatifs. Vous pourrez ainsi reprendre le contrôle de votre vie.</p>
              <h3>Bienfaits :</h3>
              <p> Relaxation intense, regain d’énergie, lâcher-prise, arrêt de la rumination mentale, réduit le stress, apporte confiance en soi, aide à sortir du burn-out, diminution des pensées négatives et jugements limitants,  facilite le changement, réduit l’hyperactivité, aide à prendre des décisions, etc…</p>
              </div>
         </div>  
      </div>
  )
}

export default Accessbar