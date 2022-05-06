import {Box, HStack, Text} from '@chakra-ui/react'
import {FaHtml5, FaCss3, FaBootstrap, FaReact, FaGithub, FaGitAlt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiFirebase} from 'react-icons/si';
import './SoftwareSkills.css'

export const SoftwareSkills = () => {
    return  (
        <Box w={'50%'} m={'auto'} pos={'relative'}>
                           <HStack justifyContent={'center'} mt={5}>
                           <Box bgColor={'blue.700'} w={60} shadow='base' position={'relative'} top={'50px'}>
                                    <Text textAlign={'center'} fontSize={20} color={'blue.50'} fontWeight='600' p={2}>
                                       Lenguages & Tools
                                    </Text>
                           </Box>
                           </HStack>
                           <HStack  dir='row' mt={10} h={'80px'} justifyContent={'center'} spacing={10} position={'relative'} top={'50px'}>
                                 <FaHtml5 className='htmlIcon'/>
                                 <FaCss3 className='cssIcon'/>
                                 <FaBootstrap className='btIcon'/>
                                 <IoLogoJavascript />
                                 <FaReact className='reactIcon'/>
                                 <SiFirebase className='fdbIcon'/>
                                 <FaGithub className='ghIcon'/>
                                 <FaGitAlt className='gitIcon'/>
                           </HStack>
        </Box>
    )
}