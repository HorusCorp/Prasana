import React from 'react'
import Image from 'next/image'

function MicromassageV() {
  return (
    <div className='bowen__container'>
          
          <div className='bowen__content__container'>
              <h2>Micro massage viscérale</h2>
              <Image
                src="/viscerale.jpg"
                alt="Picture of the author"
                width={1000}
                height={300}
              />
              <p>Le micro massage viscéral est un massage thérapeutique manuel qui s’inspire du “Chi nei tsang” et du Qi Gong, lié à l’énergie vitale.</p>
              <p> C’est un massage qui agit aussi bien sur le physique que le psychique puisqu’il libère des émotions et favorise la détente et la relaxation.</p>
              <p className='bowen__lastline'>Le massage viscéral va détoxifier l’organisme, favoriser la circulation sanguine, stimuler le système lymphatique…  Le massage viscéral permet également de se libérer des blocages émotionnels. Après une séance, le patient a un sentiment de légèreté, d’harmonie et d’équilibre.</p>
              <h3>Indications :</h3>
              <p>❖ Migraines et maux de tête</p>
              <p>❖ Constipation ou coliques</p>
              <p>❖ Troubles du système digestif (brûlures d’estomac, crampes, digestion paresseuse…)</p>
              <p>❖ Sommeil agité</p>
              <p>❖ Stress, anxiété</p>
              <p>❖ Douleurs dorsales, Problèmes de dos</p>
              <p>❖ Règles douloureuses</p>
              <p>❖ Fatigue, perte d’énergie</p>
              <p>❖ Troubles de la vésicule biliaire et du foie</p>
         </div>  
      </div>
  )
}

export default MicromassageV