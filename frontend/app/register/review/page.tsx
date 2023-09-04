"use client";

import { ReviewForms } from "components/ReviewForms";
import { useContext } from "react";
import { UserContext } from "@/context";


export default function Page(): JSX.Element {
    const {user, setUser} = useContext(UserContext)
    return (
        <>
            <ReviewForms user={user} setUser={setUser} />
        </>
    )
  };