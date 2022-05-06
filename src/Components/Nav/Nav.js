import { Flex, HStack, useColorMode, Button } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export const NavMain = () => {

    const {colorMode, toggleColorMode } = useColorMode()

    return (
        
        <Flex w={'100%'} h={'50px'} justify={'flex-end'} pos={'fixed'} top={2}>
                <Button onClick={toggleColorMode} m={2}>
                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                </Button>
        </Flex>
        
        )
}