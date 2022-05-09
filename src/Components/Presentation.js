import React from 'react'
import { Box, Stack, Image, Text, HStack} from '@chakra-ui/react'
import portfolioPic from '../Components/Images/portfolioPic.jpg'

export const Presentation = () => {


   return (
   <>
   
      <Box  m={'auto'}>
            <Stack direction={'row'} align='flex-end' w={'400px'} h={'400px'} mx={'auto'} mt={90}>
                  <Box bgColor={'op1.500'}>
                     <Image src={portfolioPic} alt='Juan Manuel Roig Courtis' borderRadius={200} shadow='2xl' mt={10} />      
                  </Box>
               </Stack>
                  <HStack>
                     <Text mx={'auto'} textAlign={'center'} fontSize={40} fontWeight={'lighter'} >
                        Juan Manuel Roig Courtis
                     </Text>
                  </HStack>
                  <HStack>
                     <Text mx={'auto'} textAlign={'center'} fontSize={40} fontWeight={'lighter'} >
                        Frontend Developer
                     </Text>
                  </HStack>
                  
            </Box>
   </>
   )
}   
   
