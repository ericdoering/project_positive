"use client";

import { DaysForm } from "components/DaysForm";
import { useContext } from "react";
import { UserContext } from "@/context";


export default function Page(): JSX.Element {
    const {user, setUser} = useContext(UserContext)
    return (
        <>
            <DaysForm user={user} setUser={setUser} />
        </>
    )
  };