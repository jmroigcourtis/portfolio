import { Box, Flex, HStack, Stack, Text, Image, Link} from "@chakra-ui/react"
import {BiJoystickAlt} from 'react-icons/bi'
import RickMorty from '../Images/rick.png'
import './Proyects.css'

export const Proyects = () => {

    return (
        <Stack>
            <HStack m={'auto'} my={'125px'} justifyContent={'center'} bgColor={'blue.700'} w={'25%'} shadow='base'>
                    <Text textAlign={'center'} fontSize={'20px'} color={'blue.50'} fontWeight='600' p={2}>
                        My proyects
                    </Text>
            </HStack>

            <Flex justifyContent={'center'} mt={'100px'} p={10}>
                <HStack spacing={'200px'}>
                    <Box className="projectBox" cursor={'pointer'} borderRadius='lg' bgColor={'red.500'} borderWidth='2px' maxW='sm'  w={'400px'} h={'400px'} shadow='sm'>
                        <BiJoystickAlt className="joystickIcon" />
                        <Link className="textStyle" borderRadius='lg' borderWidth={0}  _focus={'none'} href="https://geekland.vercel.app/" isExternal fontSize={'40px'} fontWeight={"bold"} textAlign={'center'} color={'white'} >
                            <Text fontSize={'40px'} fontWeight={"bold"} textAlign={'center'} color={'white'}>Geekland</Text>
                        </Link>
                    </Box>

                    <Box className="projectBox" cursor={'pointer'} borderRadius='lg' borderWidth='2px' maxW='sm' bgColor={'#14171e'}  w={'400px'} h={'400px'} shadow='sm'>
                        <Image borderRadius='lg' h={'350px'} w={'500px'}src={RickMorty} alt='Rick and Morty'/>
                        <Text fontSize={'35px'} fontWeight={"bold"} textAlign={'center'} color={'white'} marginTop={'-50px'} >Rick and Morty app</Text>
                    </Box>
                    <Box borderRadius='lg' borderWidth='2px' maxW='sm'  w={'400px'} h={'400px'} shadow='sm'>
                    
                    </Box>
                </HStack>
            </Flex>
        </Stack>
    )
}
