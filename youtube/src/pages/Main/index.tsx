import { CategorySection } from "components/CategorySection";
import { Content } from "components/Content";
import { ErrorBoundary } from "components/ErrorBoundary";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Wrapper } from "components/Wrapper";

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
