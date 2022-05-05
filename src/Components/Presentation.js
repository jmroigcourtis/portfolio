import React from 'react'
import { Box, Stack, Image, Text, HStack, Button} from '@chakra-ui/react'
import {IoLogoJavascript} from 'react-icons/io'
import { useColorMode } from '@chakra-ui/react'
import portfolioPic from '../Components/Images/portfolioPic.jpg'
import {FaReact, FaBootstrap, FaHtml5, FaCss3, FaGithub} from 'react-icons/fa'
import {SiFirebase} from 'react-icons/si'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import '../Components/Presentation.css'

export const Presentation = () => {

   // const {switchToLight, switchToDark, handleDarkMode} = useLightMode()
   const {colorMode, toggleColorMode } = useColorMode()


   return (<Box  m={'auto'}>
                  <Button m={2} onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                  </Button>
               <Stack direction={'row'} align='flex-end' w={'400px'} h={'400px'} mx={'auto'} mt={90}>
                  <Box bgColor={'op1.500'}>
                     <Image src={portfolioPic} alt='Juan Manuel Roig Courtis' borderRadius={200} shadow='2xl' mt={10} />      
                  </Box>
               </Stack>
                  <HStack>
                     <Text mx={'auto'} textAlign={'center'} fontSize={40} fontWeight={'lighter'} >
                        Hi!, I'm Juan Manuel Roig Courtis
                     </Text>
                  </HStack>
                  <HStack>
                     <Text mx={'auto'} textAlign={'center'} fontSize={40} fontWeight={'lighter'} >
                        Frontend Developer
                     </Text>
                  </HStack>
                  <Box>
                           <HStack justifyContent={'center'} mt={5}>
                           <Box bgColor={'blue.700'} w={60} shadow='base'>
                                    <Text textAlign={'center'} fontSize={20} color={'blue.50'} fontWeight='600' p={2}>
                                       Software Skills
                                    </Text>
                           </Box>
                           </HStack>
                           <HStack dir='row' mt={10} justifyContent={'center'} spacing={10}>
                                 <FaHtml5 className='htmlIcon'/>
                                 <FaCss3 className='cssIcon'/>
                                 <FaBootstrap className='btIcon'/>
                                 <IoLogoJavascript />
                                 <FaReact className='reactIcon'/>
                                 <SiFirebase className='fdbIcon'/>
                                 <FaGithub className='ghIcon'/>
                           </HStack>
                  </Box>
            </Box>
   )
}   
   
