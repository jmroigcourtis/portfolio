import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react"
import {BiJoystickAlt} from 'react-icons/bi'
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
                            <Text fontSize={'60px'} fontWeight={"bold"} textAlign={'center'} color={'white'}>Geekland</Text>
                    </Box>
                    <Box borderRadius='lg' borderWidth='2px' maxW='sm'  w={'400px'} h={'400px'} shadow='sm'>
                    
                    </Box>
                    <Box borderRadius='lg' borderWidth='2px' maxW='sm'  w={'400px'} h={'400px'} shadow='sm'>
                    
                    </Box>
                </HStack>
            </Flex>
        </Stack>
    )
}
