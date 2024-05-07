import React from "react";
import SectionTitle from "../Section/SectionTitle/SectionTitle";
import SectionDescription from "../Section/SectionDescription/SectionDescription";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SimpleBookmarking from "./Tabs/SimpleBookmarking/SimpleBookmarking";
import FeatureInfo from "./Tabs/FeatureInfo/TabSection";

const FeaturesSection: React.FC = () => {
  return (
    <div id="features" className="container-none md:container mt-10">
      <SectionTitle title="Features" />
      <SectionDescription>
        Our aim is to make it quick and easy for you to access your{" "}
        <br className="hidden md:flex" />
        favourite websites. Your bookmarks sync between your devices{" "}
        <br className="hidden md:flex" /> so you can access them on the go.
      </SectionDescription>
      <div className="container-none md:container mt-10">
        <Tabs
          defaultValue="simple-bookmarking"
          className="relative mr-auto w-full"
        >
          <TabsList className="w-full flex-col md:flex-row rounded-none bg-transparent p-0 mb-10">
            <TabsTrigger
              value="simple-bookmarking"
              className="font-normal w-2/3 md:w-auto text-lg relative rounded-none border-b-2 bg-transparent px-4 pb-3 pt-2 text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-red-500 data-[state=active]:border-b-4 data-[state=active]:text-foreground data-[state=active]:shadow-none "
            >
              Simple Bookmarking
            </TabsTrigger>
            <TabsTrigger
              value="speedy-searching"
              className="font-normal w-2/3 md:w-auto text-lg relative rounded-none border-b-2 bg-transparent px-4 pb-3 pt-2 text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-red-500 data-[state=active]:border-b-4 data-[state=active]:text-foreground data-[state=active]:shadow-none "
            >
              Speedy Searching
            </TabsTrigger>
            <TabsTrigger
              value="easy-sharing"
              className="font-normal w-2/3 md:w-auto text-lg relative rounded-none border-b-2 bg-transparent px-4 pb-3 pt-2 text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-red-500 data-[state=active]:border-b-4 data-[state=active]:text-foreground data-[state=active]:shadow-none "
            >
              Easy Sharing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="simple-bookmarking">
            <FeatureInfo
              title="Bookmark in one click"
              image="illustration-features-tab-1.svg"
              description="Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites."
            />
          </TabsContent>
          <TabsContent value="speedy-searching">
            <FeatureInfo
              title="Intelligent search"
              image="illustration-features-tab-2.svg"
              description="Our powerful search feature will help you find saved sites in no time at all. 
              No need to trawl through all of your bookmarks."
            />
          </TabsContent>
          <TabsContent value="easy-sharing">
            <FeatureInfo
              title="Share your bookmarks"
              image="illustration-features-tab-3.svg"
              description="Easily share your bookmarks and collections with others. Create a shareable 
              link that you can send at the click of a button."
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FeaturesSection;
