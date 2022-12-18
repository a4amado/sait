import {
    Button,
    Flex,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/react'

export default function RateSoundPopOver() {
    return (
        <Popover>
            <PopoverTrigger>
                <Button>قَيّم</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>ما تَقييمك لهذا النُطق ؟</PopoverHeader>
                <PopoverBody>
                    <Flex
                        width="full"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-evenly"
                    >
                        <Button>لا غُبار علية.</Button>
                        <Button>لابأس به.</Button>
                        <Button>رديء</Button>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
