import { Footer } from "components/Footer";
import { Title1 } from "components/styled";
import { PageContainer } from "./styled";

export const NotFound: React.FC = () => {
  return (
    <>
      <PageContainer>
        <Title1> Error 404</Title1>
      </PageContainer>
      <Footer />
    </>
  );
};
