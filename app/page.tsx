'use client'

import Cover from "./components/cover/Cover";
import { useState } from "react";
import Dashboard  from "./components/dashboard/Dashboard"

export default function Home() {

  const [open, setOpen] = useState(false)

  const coverClass = open ? "h-full -translate-y-full transition duration-1000" : "absolute h-full w-full md:w-[90%]"
  const appClass = open ? "h-full -translate-y-full transition duration-1000 " : "absolute inset-y-0 -z-50 w-4/5 overflow-hidden"

  return (
    <div className="h-full md:w-[90%] md:mx-auto">
    <div onClick={() => setOpen(true)} className={coverClass}>
      <Cover></Cover>
    </div>
    <div className={appClass}>
      <Dashboard></Dashboard>
    </div>
    </div>
  );
}
