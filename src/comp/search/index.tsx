import { Button, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Search(props: any) {
    const Router = useRouter()
    console.log(Router)

    return (
        <form
            method="GET"
            action="/search"
            style={{ width: '100%', margin: '10px 0' }}
        >
            <Input
                type="text"
                name="q"
                placeholder="أَنا الَّذي نَظَرَ الأَعمَى إلى أَدَبي * وأَسمَعَتْ كَلِماتي مَن بِهِ صَمَمُ - أبو الطيب المتنبي"
            />
            <Button display="block" m="15px auto" type="submit">
                إبحث
            </Button>
        </form>
    )
}
