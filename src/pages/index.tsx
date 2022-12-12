import { Button, Input } from "@chakra-ui/react";
import React from "react";

const queryWords = async (q: string): Promise<Array<string>> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([q, "2", "3", "4", "5", "6", "7", "8", "9", "10"])
    }, 5000)
  })
}


import PageContainer from "../comp/pageContainer";
export default function Page() {
  
  
  const [q, setQ] = React.useState("");



  return <PageContainer>
      <form method="GET" action="/search" style={{ width: "100%" }}>
        <Input type="text" name="q" />
        <Button mx="auto" type="submit">Search</Button>
      </form>
  </PageContainer>
}
