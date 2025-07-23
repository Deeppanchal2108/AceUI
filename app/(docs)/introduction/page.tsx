import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Page() {
  return (
    <div className="min-h-screen w-full  text-white">
      <div className="flex justify-center w-full px-4">
        <div className="max-w-5xl w-full py-10">
          <h1 className="text-3xl font-bold mb-6">Introduction</h1>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Build stunning UIs effortlessly with <strong className="text-white">AceUI</strong>  a modern developer-first toolkit packed with beautiful, reusable components, patterns, and layouts. Crafted with Tailwind CSS and clean HTML, AceUI helps you ship fast without sacrificing design or flexibility.
            </p>
            <p>
              <strong className="text-white">What is AceUI?</strong><br />
              AceUI is not a traditional component library. There’s no npm install. No bloated dependencies. Just copy-paste and customize every component, layout, and background pattern is yours to tweak.
            </p>
            <p>
              From animated buttons and cards to handcrafted CSS patterns and gradients, AceUI gives you everything you need to bring your UI to life, whether you're building dashboards, marketing sites, or SaaS apps.
            </p>
            <p>
              Use AceUI as a foundation to craft your own unique design system, fully in your control.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is AceUI exactly?</AccordionTrigger>
                <AccordionContent >
                  AceUI is a copy-paste UI toolkit ,not an npm package or monolithic library. It provides high-quality components, patterns, and layout templates built with modern CSS and Tailwind. Just grab what you need and drop it into your project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What makes AceUI different?</AccordionTrigger>
                <AccordionContent>
                  AceUI goes beyond components. It offers professionally designed background patterns, animated gradients, and layout scaffolds , all created with modern web design in mind. Perfect for elevating your UI in seconds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I use AceUI?</AccordionTrigger>
                <AccordionContent>
                  Simply copy the component code from the AceUI library and paste it into your project. Customize it freely with Tailwind classes or your own CSS ,no dependencies needed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is AceUI free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, AceUI is completely free. Use it in personal, commercial, or open-source projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
