import React from 'react'


import InfoBox from './InfoBox'

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5' >Hola, mi nombre es <span className='font-semibold'>Tomas</span>👋
    <br />
    Y soy Web-Developer
    </h1>
  ),
  2: (
    <InfoBox
    text='Estos son los proyectos en los que he trabajado'
    link='/projects'
    btnText='Ver proyectos'
    />
    
    
  ),
  3: (
    <InfoBox
    text='Si bien mi experiencia es Limitada, mis ganas de aprender son muchas'
    link='/about'
    btnText='Ver experiencias'
    />  
  ),
  4: (
    <InfoBox
    text='Si quieres contactarme para que trabajemos juntos este es el lugar '
    link='/contact'
    btnText='Contactame'
    />
  ),
}

const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo