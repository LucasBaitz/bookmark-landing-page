import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../Section/SectionTitle/SectionTitle";
import SectionDescription from "../Section/SectionDescription/SectionDescription";
import { Button } from "../ui/button";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="w-full flex flex-col justify-center items-center my-20">
      <div className="mb-5">
        <SectionTitle title="Frequently Asked Questions" />
        <SectionDescription>
          Here are some of our FAQs. If you have any other questions <br />
          you’d like answered please feel free to email us.
        </SectionDescription>
      </div>
      <Accordion type="single" className="max-w-[500px] w-full p-10" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-extralight text-sm md:text-lg text-start">
            What is Bookmark?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-extralight text-sm md:text-lg text-start">
            How can I request a new browser?
          </AccordionTrigger>
          <AccordionContent>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-extralight text-sm md:text-lg text-start">
            Is there a mobile app?
          </AccordionTrigger>
          <AccordionContent>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-extralight text-sm md:text-lg text-start">
            What about other Chromium browsers?
          </AccordionTrigger>
          <AccordionContent>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button variant="bookmark" className="my-10 p-6">
        More Info
      </Button>
    </section>
  );
};

export default FAQ;
