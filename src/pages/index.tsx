import { Button, Input } from "@chakra-ui/react";

import PageContainer from "../comp/pageContainer";
export default function Page() {
  



  return <PageContainer>
      <form method="GET" action="/search" style={{ width: "100%" }}>
        <Input type="text" name="q" />
        <Button mx="auto" type="submit">Search</Button>
      </form>
  </PageContainer>
}
