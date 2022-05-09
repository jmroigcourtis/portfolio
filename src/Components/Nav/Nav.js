import { Flex, useColorMode, Button, Link } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export const NavMain = () => {

    const {colorMode, toggleColorMode } = useColorMode()

    return (
                <Flex w={'100%'} h={'50px'} justify={'flex-end'} pos={'fixed'} top={0}>
                                <Link href="https://github.com/jmroigcourtis" pos={'relative'} _focus={'none'} top={2} isExternal>
                                        <FaGithub style={{height: '40px', marginTop: 'auto'}}/>
                                </Link>
                        <Link href="https://www.linkedin.com/in/juan-manuel-roig-courtis/" _focus={'none'} pos={'relative'} top={2} isExternal>
                                <FaLinkedin color="#0073b1" style={{height: '40px', marginTop: 'auto'}}/>
                        </Link>
                        <Button onClick={toggleColorMode} m={2}>
                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                        </Button>
                </Flex>
        
        
        )
}