
import React from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-monochrome-200">
            <AccordionTrigger className="text-lg font-medium py-4">{item.question}</AccordionTrigger>
            <AccordionContent className="text-monochrome-700">
              {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
