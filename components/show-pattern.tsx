"use client"
import React, { useState } from 'react'
import { patterns } from '@/lib/pattern'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from './ui/button'
import { Palette } from "lucide-react";

interface PatternProps {
  pattern: string | null,
  setPattern: (pattern: string | null) => void
}

function ShowPattern({ pattern, setPattern }: PatternProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const varieties: { id: string, label: string }[] = [
    { id: "all", label: "All Patterns" },
    { id: "gradients", label: "Gradients" },
    { id: "geometric", label: "Geometric" },
    { id: 'simple', label: 'Simple' }
  ];

  const filteredPattern = activeTab === "all"
    ? patterns
    : patterns.filter((p) => p.category === activeTab);

  const previewPattern = (patternId: string) => {
    setPattern(patternId === pattern ? null : patternId);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {varieties.map((variety) => (
            <TabsTrigger value={variety.id} key={variety.id}>
              {variety.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {varieties.map((variety) => (
          <TabsContent id={variety.id} value={variety.id} key={variety.id}>
            <div className="mb-6">
              <p className="text-sm transition-colors duration-300">
                {filteredPattern.length} pattern
                {filteredPattern.length !== 1 ? "s" : ""}
                {variety.id !== "all" && ` in ${variety.label}`}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-20 py-10">
              {filteredPattern.map((p) => (
                <div key={p.id} className="group relative">
                  <div
                    className={`relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm transition-all duration-300
                    ring-2 ring-primary ring-offset-2 border-0`}
                  >
                    {/* Pattern style */}
                    <div className="absolute inset-0" style={p.style} />

                    {/* Mobile: Preview button */}
                    <div className="sm:hidden absolute bottom-2 left-2 right-2 z-10 flex justify-center gap-2 px-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          previewPattern(p.id);
                        }}
                        className="flex-1 bg-white/95 hover:bg-white text-black border-0 text-xs h-8"
                      >
                        {pattern === p.id ? "Hide" : "Preview"}
                      </Button>
                    </div>

                    {/* Desktop: Preview button on hover */}
                    <div className="hidden sm:flex absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center p-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          previewPattern(p.id);
                        }}
                        className="cursor-pointer shadow-xl backdrop-blur-md bg-white/95 hover:bg-white text-black border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto"
                      >
                        {pattern === p.id ? "Hide" : "Preview"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredPattern.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 text-purple-400 flex justify-center">
                  <Palette className="h-12 w-12" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-200">
                  No patterns found
                </h3>
                <p className="text-gray-600 dark:text-gray-200">
                  No patterns available in this category yet.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ShowPattern;