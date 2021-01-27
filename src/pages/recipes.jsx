import React from 'react'
import CarouselOne from '../components/CarouselOne'
import RecipesComponent from '../components/Recipes'
import RecipeMobile from '../components/Recipes/RecipeMobile'
import useMedia from '../hooks/useMedia'

const Recipes = () => {
  const title = ['Receitas mais acessadass']
  const large = useMedia('(min-width: 62.5rem)');

  const categories = [
    'Bolos e Tortas',
    'Camarões',
    'Carnes',
    'Empanados',
    'Microondas',
    'Petiscos',
    'Bebidas',
    'Bolos e Tortas',
    'Camarões',
    'Carnes',
    'Empanados',
    'Doces',
    'Veganos',
  ]

 if(large) {
  return (
    <>
      <CarouselOne title={title[0]} />
      <RecipesComponent />
    </>
  )
 } else {
  return (
    <>
      <RecipeMobile />
    </>
  )

 }
}

export default Recipes
