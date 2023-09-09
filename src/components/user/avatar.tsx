import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {
    DropdownMenuRoot,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    Avatar,
    DropdownMenuSeparator, Flex, Button
} from "@radix-ui/themes"

import PersonIcon from '@mui/icons-material/Person';
import {useState} from "react";

export default function AvatarMenu() {
    const {data: session} = useSession()
    const router = useRouter()

    return (
        <Flex gap={"3"}>
            <DropdownMenuRoot>
                <DropdownMenuTrigger onClick={() => {
                    alert("dd")
                }}>
                    {
                        session.user?.image
                            ? (<Avatar src={session.user.image} radius="full"/>)
                            : (<Button variant={"ghost"}>Профиль</Button>)
                    }
                </DropdownMenuTrigger>
                <DropdownMenuContent align={"center"}>
                    <DropdownMenuItem onClick={() => router.push("/profile")}>Профиль</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/profile/setting")}>Настройки</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem color={"red"} onClick={() => {
                        signOut()
                    }}>Выйти</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuRoot>
        </Flex>
    )
}
