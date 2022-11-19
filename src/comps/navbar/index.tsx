import * as Chakra from "@chakra-ui/react";


function Navbar() {
    return <Chakra.Flex padding={4} maxW="1140px" width="full" margin="0 auto" justifyContent="space-evenly">
    <Chakra.Flex>
      <Chakra.Menu  >
        {({ isOpen }) => {
          return <>
            <Chakra.MenuButton variant="outline" isActive={isOpen} as={Chakra.Button} alignItems="center">
              <Chakra.Hide below='500px'>Menu</Chakra.Hide> <HamburgerIcon />
            </Chakra.MenuButton>

            <Chakra.MenuList>
              <Chakra.MenuItem>ssssssssss</Chakra.MenuItem>
              <Chakra.MenuItem>ssssssssss</Chakra.MenuItem>
              
            </Chakra.MenuList>
          </>
        }}
      </Chakra.Menu>


    </Chakra.Flex>
    <Chakra.Flex justifyContent="center" alignItems="center" fontSize="1.5rem">
      <Chakra.Icon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#000000" d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z" />
      </svg>
      </Chakra.Icon>
      <Chakra.Circle>Sait.com</Chakra.Circle> 
    </Chakra.Flex>
    <Chakra.Flex>
      <Chakra.Menu  >
        {({ isOpen }) => {
          return <>
            <Chakra.MenuButton position="relative" variant="outline" isActive={isOpen} as={Chakra.Button}  padding={1}  >
              
              <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" /></svg>
              
            </Chakra.MenuButton>

            <Chakra.MenuList>
              <Chakra.MenuItem>ssssssssss</Chakra.MenuItem>
              <Chakra.MenuItem>ssssssssss</Chakra.MenuItem>
              <Chakra.MenuItem>ssssssssss</Chakra.MenuItem>
              <Chakra.MenuItem>ssssssssss</Chakra.MenuItem>
              <Chakra.MenuItem>ssssssssss</Chakra.MenuItem>
            </Chakra.MenuList>
          </>
        }}
      </Chakra.Menu>
    </Chakra.Flex>

  </Chakra.Flex>
};


export default Navbar