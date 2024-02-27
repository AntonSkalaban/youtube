import React from "react";
import { ErrorBoundary } from "components/ErrorBoundary";
import { Header } from "components/Header";
import { Content } from "components/Content";
import { CategorySection } from "components/CategorySection";
import { Wrapper } from "components/Wrapper";
import { Footer } from "components/Footer";

export const Main: React.FC = () => {
  return (
    <ErrorBoundary>
      <Header />
      <CategorySection />
      <Wrapper>
        {" "}
        <Content />
      </Wrapper>
      <Footer />
    </ErrorBoundary>
  );
};
