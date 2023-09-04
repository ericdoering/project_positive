"use client";

import { useContext } from "react";
import { UserContext } from "@/context";
import { MessageForm } from "components/MessageForm";


export default function Page(): JSX.Element {
    const {user, setUser} = useContext(UserContext)
    return (
        <>
            <MessageForm user={user} setUser={setUser} />
        </>
    )
  };