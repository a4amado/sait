import { Flex, Button, Text, Center, Circle, Spinner, Toast, useToast } from "@chakra-ui/react"
import { useHotkeys } from "react-hotkeys-hook"
import PageContainer from "../../comp/pageContainer"
import useRecorder from "@wmik/use-media-recorder"
import React from "react"
import FormData from "form-data"
import Axios from "axios"
import { useQuery } from "@tanstack/react-query"


export default function Page() {
    ///////////////////////////////////////////////////////////
    // Audiorecording instance
    ///////////////////////////////////////////////////////////
    const recorder = useRecorder({ blobOptions: { endings: "transparent", type: "audio/webm" }, mediaStreamConstraints: { audio: true, video: false }, mediaRecorderOptions: { mime: "audio/webm" } });
    const audioRef = React.useRef<any>();
    const url = React.useMemo(() => {
        if (!recorder.mediaBlob) return ""
        return typeof window !== "undefined" ? URL.createObjectURL(recorder.mediaBlob) : ""
    }, [recorder.status, recorder.mediaBlob])
    const sound = new FormData();
    React.useEffect(() => {
        sound.append("audio", recorder.mediaBlob)
    }, [recorder.status]);
    
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);



    const toast = useToast();

    async function submit() {
        try {
            setLoading(true);
            setError(false);

            const { data } = await Axios({
                url: "/api/sound/submit",
                data: sound,
                method: "POST",
                headers: {
                    "Content-Type": "multipart/data"
                }
            });
            setLoading(false);
            recorder.clearMediaBlob();
            recorder.clearMediaStream();
            toast({
                description: "ERROR",
                variant: "solid",
                position: "top-left",
                status: "success"
            })
        } catch (error) {
            setLoading(false)
            setError(true)
            toast({
                description: "ERROR",
                variant: "solid",
                position: "top-left",
                status: "error"
            })
        }
    }

    useHotkeys("a", (e) => {
        if (recorder.status != "recording") recorder.startRecording()
    }, { keydown: true }, [recorder.status])

    useHotkeys("a", (e) => {
        recorder.stopRecording()
    }, { keyup: true }, [recorder.status])

    useHotkeys("s", async (e) => {
        await submit()          
    }, [recorder.status])


    useHotkeys("d", (e) => {
        audioRef.current.play();
    }, [recorder.status])


    return <PageContainer>
        <Flex display="flex" flexDirection="column" width="full">
            <Center height="250px">
                <Text fontSize="7xl">السلام عليكم</Text>
            </Center>
            <Flex width="full">
                <audio src={url} preload="" controls style={{ width: "100%" }} />
            </Flex>
            <Flex flexDirection="row" justifyContent="stretch" height="250px" gap={10} margin="10px 0" position="relative" >
                <Center position="absolute" width="full" height="full" background="white" zIndex="99999" display={loading ? "flex": "none"} flexDirection="column">
                    <Spinner/>
                    <Text>إنتظر لحظة</Text>
                </Center>

                <Button border={`${recorder.status === "recording" ? "1px solid red" : ""}`} onClick={() => recorder.startRecording()} flexGrow={1}>Start</Button>
                <Button onClick={() => recorder.stopRecording()} flexGrow={1}>Stop</Button>

            </Flex>
        </Flex>

    </PageContainer>
}