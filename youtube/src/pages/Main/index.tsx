import React from "react";
import { Header } from "components/Header";
import { Content } from "components/Content";
import { CategorySection } from "components/CategorySection";
import { Wrapper } from "components/Wrapper";
import { Footer } from "components/Footer";

export const Main: React.FC = () => {
  return (
    <>
      <Header />
      <CategorySection />
      <Wrapper>
        {" "}
        <Content />
      </Wrapper>
      <Footer />
    </>
  );
};
