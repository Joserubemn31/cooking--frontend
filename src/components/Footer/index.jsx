import React, { useContext, useEffect, useState, useCallback } from 'react'
import { Logo } from '../MainStyles'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { Flex, Box, Text } from '@chakra-ui/react'
import useMedia from '../../hooks/useMedia'
import { ReactComponent as Bloob } from '../../assets/Vetor Footer 2.svg'
import { ReactComponent as Bloob2 } from '../../assets/Vetor Footer 1.svg'
import { getHighlights } from '../../services/api'

const Footer = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const mobile = useMedia('(max-width: 55rem)')
  const [highlights, setHighlights] = useState([])

  const requestData = useCallback(async () => {
    try {
      const { data: highlightsData } = await getHighlights()
      setHighlights(highlightsData)
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(() => {
    requestData()
  }, [])

  return (
    <Box
      boxShadow={mobile ? '' : `0 -5px 5px -5px #C3C3C3`}
      pt={'2.75rem'}
      mt={'7rem'}
      position={'relative'}
      bottom={'0px'}
      >
      {!mobile ? (
        <Flex flexDirection='column' m={'1.625rem 4rem'}>
          <Flex justifyContent='space-between'>
            <Box>
              <Logo
                color={colors.text}
                open={false}
                fontSize={'1.75rem'}
                font={fonts.logo}>
                Cooking
              </Logo>
              <Box mt={'0.75rem'} color='#000'>
                Aprenda a cozinhar{' '}
                <Text display='inline' color={colors.subTitle}>
                  de verdade
                </Text>
                .
              </Box>
              <Box mt={'1rem'}>
                <Box width='10px'>
                  <Bloob2 />
                </Box>
                <Box width='10px' ml='3rem'>
                  <Bloob />
                </Box>
              </Box>
            </Box>
            <Flex justifyContent='space-between' ml={'2rem'} mr={'4rem'}>
              <Box>
                <Text color={colors.subTitle} fontWeight={'bold'}>
                  Especiais
                </Text>
                {highlights &&
                  highlights.map((highlight) => (
                    <Box
                      key={highlight.id}
                      fontSize={'0.9rem'}
                      pt={'1rem'}
                      _hover={{ fontWeight: 'bold', transition: 'all 600ms' }}>
                      <Link to={`/destaques`}>{highlight.name}</Link>
                    </Box>
                  ))}
              </Box>
              <Box ml={'8rem'}>
                <Text color={colors.subTitle} fontWeight={'bold'}>
                  Sobre
                </Text>
                <Box
                  fontSize={'0.9rem'}
                  pt={'1rem'}
                  _hover={{ fontWeight: 'bold', transition: 'all 600ms' }}>
                  <Link to={`/sobre`}>Sobre nós</Link>
                </Box>
                <Box
                  fontSize={'0.9rem'}
                  pt={'1rem'}
                  _hover={{ fontWeight: 'bold', transition: 'all 600ms' }}>
                  <Link to={`/sobre`}>Contato</Link>
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Box pt='30px'>
            <Text fontSize={'0.75rem'}>
              © Cooking™, 2021. Todos os direitos reservados.
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex
          alignItems='center'
          justifyContent='space-between'
          padding={'1rem 3rem'}
          borderRadius='4px'
          bgGradient={'linear(201.73deg, #EE6737 -7.35%, #F73C2C 103.6%)'}>
          <Box mr='4rem'>
            <Logo
              color={colors.text}
              open={true}
              fontSize={'1.75rem'}
              font={fonts.logo}
              mobile={mobile}>
              Cooking
            </Logo>
          </Box>
          <Text color='#FFF'>© Cooking™, 2021. Todos os direitos reservados.</Text>
        </Flex>
      )}
    </Box>
  )
}

export default Footer
