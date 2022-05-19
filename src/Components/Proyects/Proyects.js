import { Box, Flex, HStack, Stack, Text, Image, Link} from "@chakra-ui/react"
import {BiJoystickAlt} from 'react-icons/bi'
import RickMorty from '../Images/rick.png'
import ToDoList from '../Images/todo.jpg'
import Logo from '../Images/etre.png'
import './Proyects.css'

export const Proyects = () => {

    return (
        <Stack>
            <HStack m={'auto'} my={'125px'} justifyContent={'center'} bgColor={'blue.700'} w={'25%'} shadow='base' borderRadius={'50px'}>
                    <Text textAlign={'center'} fontSize={'20px'} color={'blue.50'} fontWeight='600' p={2}>
                        My proyects
                    </Text>
            </HStack>

            <Flex justifyContent={'center'} mt={'100px'} p={10}>
                <HStack spacing={'200px'}>
                        <Link className="textStyle" borderRadius='lg' borderWidth={0}  _focus={'none'} href="https://geekland.vercel.app/" isExternal fontSize={'40px'} fontWeight={"bold"} textAlign={'center'} color={'white'} >
                            <Box className="projectBox" cursor={'pointer'} borderRadius='lg' bgColor={'red.500'} borderWidth='2px' maxW='sm'  w={'400px'} h={'400px'} shadow='sm'>
                                <BiJoystickAlt className="joystickIcon" />
                                <Text fontSize={'40px'} fontWeight={"bold"} textAlign={'center'} color={'white'}>Geekland</Text>
                            </Box>
                        </Link>

                        <Link className="textStyle" borderRadius='lg' borderWidth={0}  _focus={'none'} href="https://mortyapp.vercel.app/" isExternal fontSize={'40px'} fontWeight={"bold"} textAlign={'center'} color={'white'} >
                            <Box className="projectBox" cursor={'pointer'} borderRadius='lg' borderWidth='2px' maxW='sm' bgColor={'#14171e'}  w={'400px'} h={'400px'} shadow='sm'>
                                <Image borderRadius='lg' h={'350px'} w={'500px'}src={RickMorty} alt='Rick and Morty'/>
                                <Text fontSize={'35px'} fontWeight={"bold"} textAlign={'center'} color={'white'} marginTop={'-50px'} >Rick and Morty app</Text>
                            </Box>
                        </Link>

                        <Link className="textStyle" borderRadius='lg' borderWidth={0}  _focus={'none'} href="https://jmroigcourtis.github.io/etrecounseling/" isExternal fontSize={'40px'} fontWeight={"bold"} textAlign={'center'} color={'white'} >
                            <Box className="projectBox" borderRadius='lg' borderWidth='2px' maxW='sm'  w={'400px'} h={'400px'} shadow='sm' bgColor={'#faeee0'}>
                            <Image borderRadius='lg' h={'350px'} src={Logo} alt='To do list app'/>
                                    <Text fontSize={'35px'} fontWeight={"bold"} textAlign={'center'} color={'#f38da1'} marginTop={'-55px'} >Static landing page</Text>
                            </Box>
                        </Link>
                </HStack>
            </Flex>
        </Stack>
    )
}
