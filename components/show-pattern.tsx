"use client"
import React, { useState } from 'react'
interface PatternProps{
    pattern: string | null,
    setPattern: (pattern: string) => void
}
function ShowPattern({ pattern, setPattern }: PatternProps
    
) {
    const [copied, setCopied] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string>("all");

    


  return (
    <div>
      
    </div>
  )
}

export default ShowPattern
