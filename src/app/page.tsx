"use client"
import { useState } from "react";

export default function Home() {
  const [show, setshow] = useState<boolean>(false);
  

  setTimeout(() => {
    setshow(true);    
  }, 2000);
  
  if (show) {
    return <p>main page</p>
  }
}
