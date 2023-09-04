"use client";

import { TimeForm } from "components/TimeForm";
import { useContext } from "react";
import { UserContext } from "@/context";


export default function Page(): JSX.Element {
    const {user, setUser} = useContext(UserContext)
    return (
        <>
            <TimeForm user={user} setUser={setUser} />
        </>
    )
  }