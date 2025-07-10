"use client"
import React, { useState } from 'react'
import { patterns } from '@/lib/pattern'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface PatternProps {
  pattern: string | null,
  setPattern: (pattern: string) => void
}
function ShowPattern({ pattern, setPattern }: PatternProps

) {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const varieties: { id: string, label: string }[] = [
    { id: "all", label: "All Patterns" },
    { id: "gradients", label: "Gradients" },
    { id: "geometric", label: "Geometric" },
    { id: 'simple', label: 'Simple' }
  ]


  const filteredPattern = activeTab === "all" ? patterns : patterns.filter((pattern) => pattern.category === activeTab)


  return (
    <div>
Pattern things right here
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {
            varieties.map((variety) => (
              <TabsTrigger value={variety.id} key={variety.id}>{variety.label
              }</TabsTrigger>
            ))
          }
        </TabsList>

        {}
      </Tabs>

    </div>
  )
}

export default ShowPattern
