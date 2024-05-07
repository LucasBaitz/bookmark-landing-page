import React from "react";
import browsers from "./browsers.json";
import BrowserCard from "../BrowserCard/BrowserCard";
import SectionTitle from "../Section/SectionTitle/SectionTitle";
import SectionDescription from "../Section/SectionDescription/SectionDescription";

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className=" flex flex-col justify-center w-full items-center my-16">
      <SectionTitle title="Download the extension" />
      <SectionDescription>
        We’ve got more browsers in the pipeline. Please do let us know if <br />
        you’ve got a favourite you’d like us to prioritize.
      </SectionDescription>
      <div className="flex flex-col md:flex-row gap-10 mt-5">
        {browsers.map((b, index) => {
          const marginTop = index * 30;

          return (
            <div key={b.name} style={{ marginTop: marginTop }}>
              <BrowserCard
                browserName={b.name}
                minimumVersion={b.minimumVersion}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DownloadSection;
