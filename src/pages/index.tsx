import { Button, Flex, Center, Input, Spinner } from "@chakra-ui/react";
import React from "react";
import Axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcMenu } from "react-icons/fc";
import { HiLanguage } from "react-icons/hi2";

const queryWords = async (q: string): Promise<Array<string>> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([q, "2", "3", "4", "5", "6", "7", "8", "9", "10"])
    }, 5000)
  })
}

import useSwr from "swr";
import { useFirstMountState } from "react-use"
import { css } from "@emotion/react";
import PageContainer from "../comp/pageContainer";
export default function Page() {
  const firstMount = useFirstMountState()
  const [words, setWords] = React.useState<Array<any>>([])
  const [q, setQ] = React.useState("");
  const s = useSwr(["GE", q], (_, q): Promise<Array<string>> => queryWords(q), {
    revalidateOnMount: false,
    revalidateIfStale: false
  })

  React.useEffect(() => {
    if (firstMount) return;
    s.mutate()
  }, [q]);

  return <PageContainer>
      <form method="GET" action="/search" style={{ width: "100%" }}>
        <Input type="text" name="q" />
        <Button mx="auto" type="submit">Search</Button>
      </form>
  </PageContainer>
}
