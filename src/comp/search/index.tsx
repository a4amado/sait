import { Button, Input } from "@chakra-ui/react"


export default function Search() {
    return <form method="GET" action="/search" style={{ width: "100%" , margin: "10px 0"}}>
    <Input type="text" name="q" />
    <Button display="block" m="15px auto" type="submit">Search</Button>
  </form>
}