import React from 'react'
import { TopTitle, HeadTitle } from '../MainStyles'
import { Grid, GridItem, Image, Text, Flex } from '@chakra-ui/react'
import theme from '../../theme'
import { SlideTitle } from '../MainStyles'
import Elipse from '../../assets/Ellipse75.svg'
import Back from '../../assets/Image4.jpg'

const RecipesComponent = ({ data }) => {

  return (
    <Grid
      templateColumns='11% 78% 11%'
      templateRows='repeat(4, auto)'
      mt='3rem'>
      <GridItem colStart={2} rowStart={1}>
        <TopTitle weight='600' color={theme.colors.title} Talign='left'>
          Categorias
        </TopTitle>
      </GridItem>
      <GridItem colStart={2} rowStart={2} mt='0.5rem'>
        <Flex justify='center' align='center'>
          {data.map((data, index) => (
            <Flex key={data.id} align='center' justify='space-between'>
              <Image
                src={Elipse}
                alt={'Elipse'}
                p='0 1rem'
                display={index === 0 && 'none'}
                visibility={index === 0 && 'hidden'}
              />
              <Text
                fontWeight={index % 2 !== 0 && 'bold'}
                textTransform='uppercase'
                fontSize='1.2rem'>
                {data.category_name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </GridItem>
      <GridItem colStart={2} rowStart={3} mt='2rem'>
        <HeadTitle weight='600' color={theme.colors.subTitle}>
          Mais acessadas
        </HeadTitle>
      </GridItem>
      <GridItem colStart={2} rowStart={4} mt='1rem'>
        <Grid templateColumns='1fr 1fr 1fr' templateRows='auto auto' gap='20px'>
          {data.map(
            (data) =>
              data.tag === 'yes' && (
                <Flex
                  w={'100%'}
                  h='290px'
                  position='relative'
                  bgColor='rgba(0, 0, 0, 0.5)'
                  justify='center'
                  align='center'
                  borderRadius='2rem'
                  cursor='pointer'>
                  <SlideTitle color={theme.colors.slide}>
                    oi
                  </SlideTitle>

                  <Image
                    boxSize='100%'
                    objectFit='cover'
                    src={Back}
                    alt='Dan Abramov'
                    position='absolute'
                    zIndex='-1'
                    borderRadius='2rem'
                  />
                </Flex>
              )
          )}
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default RecipesComponent
