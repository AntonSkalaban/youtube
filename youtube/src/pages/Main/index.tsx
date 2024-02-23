import React from "react";
import { Header } from "components/Header";
import { Content } from "components/Content";
import { TabsSection } from "components/TabsSection";
import { Wrapper } from "components/Wrapper";
import { Footer } from "components/Footer";

export const Main = () => {
  return (
    <>
      <Header />
      <TabsSection />
      <Wrapper>
        {" "}
        <Content />
      </Wrapper>
      <Footer />
    </>
  );
};
