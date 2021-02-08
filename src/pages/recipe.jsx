import React, { useState, useCallback, useEffect } from 'react'
import { Grid, GridItem, Image, Flex, Spacer, Text, Box } from '@chakra-ui/react'
import { TopTitle } from '../components/MainStyles'
import theme from '../theme'
import Back from '../assets/back.svg'
import Elipse from '../assets/Ellipse75.svg'
import CarouselOne from '../components/CarouselOne'
import { Link, useParams } from 'react-router-dom'
import { getRecipe, getRecipes, getRecipesByCategory } from '../services/api'
import { useRequest } from '../context/Request'
import Loading from '../components/Loading'
import Error from '../components/Error'
import useMedia from '../hooks/useMedia'
import Arrow from '../assets/Down.svg'
import Right from '../assets/Right.svg'


const Recipe = () => {
  const [recipes, setRecipes] = useState([])
  const [recipe, setRecipe] = useState([])
  const [recipeMobile, setRecipeMobile] = useState([]);
  const [resume, setResume] = useState(true);
  const [ingredients, setIngredients] = useState(true);
  const [preparation, setPreparation] = useState(true);
  const [rotates, setRotates] = useState('rotate(0deg)');
  const [rotates2, setRotates2] = useState('rotate(0deg)');
  const [rotates3, setRotates3] = useState('rotate(0deg)');
  const { id } = useParams()
  const { loading, setLoading, error, setError } = useRequest()
  const large = useMedia('(min-width: 62.5rem)')

  const requestData = useCallback(async () => {
    try {
      setLoading(true)
      const { data: recipesData } = await getRecipes()
      const { data: recipeData } = await getRecipe(id)
      const { data: recipeMobileData } = await getRecipesByCategory('799a68b3-2fe7-4a4d-b169-ef89a369b1d7')
      setRecipes(recipesData)
      setRecipe(recipeData)
      setRecipeMobile(recipeMobileData)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    requestData()
  }, [id])

  function rotateArrow(state, setState) {
    state ? setState('rotate(-90deg)') : setState('rotate(0)')
  }

  return (
    <>
      {!loading && !error && (
        <>
          <Grid
            templateColumns='11% 51% 27% 11%'
            templateRows='repeat(6, auto)'>
            <GridItem colStart={2} colSpan={2}>
              <Flex>
                <TopTitle color={theme.colors.title}>{recipe.title}</TopTitle>
                <Spacer />
                <Flex alignItems='center'>
                  <p
                    style={{
                      display: large ? '' : 'none',
                    }}>
                    voltar para{' '}
                  </p>
                  <Link
                    to={
                      large ? `/categoria/${recipe.category_id}` : `/receitas`
                    }
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                    <p
                      style={{
                        display: large ? 'inline-block' : 'none',
                        marginLeft: '7px',
                        color: `${theme.colors.subTitle}`,
                      }}>
                      {recipe.category_name}
                    </p>
                    <Image
                      boxSize='auto'
                      objectFit='cover'
                      src={Back}
                      alt='Voltar'
                      zIndex='-1'
                      cursor='pointer'
                      borderRadius='2rem'
                      ml='10px'
                    />
                  </Link>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2} colStart={2}>
              <Image
                mt='30px'
                boxSize='75%'
                height='400px'
                width={large ? '75%' : '100%'}
                objectFit='cover'
                src={recipe.img_url}
                alt='Dan Abramov'
                zIndex='-1'
                cursor='pointer'
              />
            </GridItem>
            <GridItem colStart={2} colSpan={large ? 1 : 2}>
              <Box display='flex' alignItems='center'>
              <TopTitle Talign='left' color={theme.colors.subTitle}>
                Resumo
              </TopTitle>
              <Image
                boxSize='25px'
                objectFit='cover'
                src={Arrow}
                alt='Voltar'
                cursor='pointer'
                borderRadius='2rem'                    ml='20px'
                transition='all .3s ease'
                transform={rotates}
                onClick={() => {
                  setResume(!resume)
                  rotateArrow(resume, setRotates)
                }}
                    />
              </Box>
              <Text fontSize='18px' lineHeight='27px' display={resume ? 'block' : 'none'}
              transition='all .5s ease'
                >
                {recipe.resume}
              </Text>
            </GridItem>
            <GridItem colStart={2} colSpan={large ? 1 : 2} mt='20px'>
              <Box display='flex' alignItems='center'>
              <TopTitle Talign='left' color={theme.colors.subTitle}>
                Ingredientes
              </TopTitle>
              <Image
                boxSize='25px'
                objectFit='cover'
                src={Arrow}
                alt='Voltar'
                cursor='pointer'
                borderRadius='2rem'                    ml='20px'
                transition='all .3s ease'
                transform={rotates2}
                onClick={() => {
                  setIngredients(!ingredients)
                  rotateArrow(ingredients, setRotates2)
                }}
                    />
              </Box>
              <div
              style={{
                display: ingredients ? 'block' : 'none',
                transition: 'all 1s ease'
              }}
              >
                {recipe.ingredients.map((ingredient) => (
                  <Flex key={ingredient.id} align='center' mt='5px'>
                    <Image src={Elipse} alt={'Elipse'} p='0 1rem' />
                    <Text fontWeight='medium' fontSize='1.3rem'>
                      {ingredient}
                    </Text>
                  </Flex>
                ))}
              </div>
            </GridItem>
            <GridItem colStart={2} colSpan={large ? 1 : 2}>
            <Box display='flex' alignItems='center'>
              <TopTitle Talign='left' color={theme.colors.subTitle}>
                Modo de Preparo
              </TopTitle>
              <Image
                boxSize='25px'
                objectFit='cover'
                src={Arrow}
                alt='Voltar'
                cursor='pointer'
                borderRadius='2rem'                    ml='20px'
                transition='all .3s ease'
                transform={rotates3}
                onClick={() => {
                  setPreparation(!preparation)
                  rotateArrow(preparation, setRotates3)
                }}
                    />
              </Box>
              <div
              style={{
                display: preparation ? 'block' : 'none',
                transition: 'all 1s ease'
              }}>
                {recipe.preparation.map((preparation, index) => (
                  <Flex key={preparation.id} align='center' mt='20px' ml='15px'>
                    <Text fontSize='1.7rem' color={theme.colors.title}>
                      {index + 1}.
                    </Text>
                    <Text fontSize='1.3rem' ml='20px' fontWeight='light'>
                      {preparation}
                    </Text>
                  </Flex>
                ))}
              </div>
            </GridItem>
          </Grid>
          <CarouselOne title='Outras Receitas' url='receita' data={large ? recipes : recipeMobile} />
        </>
      )}
      {loading && !error && <Loading />}
      {error && <Error />}
    </>
  )
}

export default Recipe
