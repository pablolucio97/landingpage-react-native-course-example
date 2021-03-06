import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: green;

  & .videoBackground{
    position: absolute;
    right: 0;
    top: 0;
    min-width: 100%;
    min-height: 120vh;
    opacity: .2;
    z-index: 1;
    @media(max-width: 1440px){
     min-height: 80vh;
  } 
  @media(max-width: 1080px){
    min-height: 56vh;
  }
  @media(max-width: 720px){
    min-height: 50vh;
  }
  @media(max-width: 480px){
    min-height: 50%;
  }
  } 
`;

export const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: -webkit-linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  background: linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  padding: 40px 40px 0;

`;

export const BannerSectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 120px 40px;
  @media(max-width: 720px){
    padding: 0 40px 40px;
  }
`;

export const BannerSectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 720px) {
    padding: -40px 0;
    width: 200%;
  }

  & h1 {
    font-size: ${({ theme }) => theme.sizes.huge};
    text-align: center;
    @media (max-width: 1080px) {
      width: 100%;
      margin: 0 auto;
      font-size: ${({ theme }) => theme.sizes.large};
  }
    
  }
  
  & p {
    text-align: center;
    margin: 0 auto;
    width: 40%;
    @media (max-width: 1080px) {
      width: 80%;
  }
    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.sizes.small};
      width: 100%;
  }
  }
`;

export const BannerSectionImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  padding: 16px;
  @media (max-width: 720px) {
    width: 98%;
    margin: 0 auto;
  }

  & img {
    margin: 0 auto;
  }
`;

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
  background: -webkit-linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
  background: linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
  z-index: 2;
`;

export const IntroductionSectionContainer = styled.div``;
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 1080px;
  height: 100%;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    text-align: center;
    margin: 16px auto;
    @media (max-width: 720px) {
      width: 100%;
    }
  }

  & p {
    width: 540px;
    margin: 16px auto;
    color: ${({ theme }) => theme.colors.white400};
    @media (max-width: 720px) {
      width: 100%;
    }
  }
`;

export const MetricsSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.black300};
  z-index: 2;
  @media(max-width: 1440px){
    min-height: 56vh;
  }
  @media(max-width: 1080px){
    min-height: 40vh;
  }
`;

export const MetricsSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const MetricsSectionContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;
  width: 100%;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const CountUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    color: ${({ theme }) => theme.colors.white400};
  }
`;

export const TestimonialsSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 32vh;
  background: -webkit-linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  background: linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
`;

export const TestimonialSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 24px auto;
  }
`;

export const FaqSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 56vh;
  padding: 40px;
  @media (max-width: 720px){
    padding: 40px 24px;
  }
  background: -webkit-linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
  background: linear-gradient(-28deg, rgb(255, 94, 0), rgb(255, 0, 72));
`;

export const FaqSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  @media (max-width: 1080px) {
    width: 100%;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 0 auto 16px;
  }
  & button {
    width: 240px;
    margin: 40px auto;
    @media (max-width: 720px) {
      width: 100%;
    }
  }
`;

export const FaqSectionCollapsableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 8px auto;
  border-radius: 4px;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const PurchaseSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.black500};

  & button {
    margin: 24px auto;
  }
`;

export const PurchaseSectionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
    align-items: center;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 48px auto 24px;
  }
  & p {
    width: 80%;
    text-align: center;
    margin: 24px auto;

    @media (min-width: 1080px) {
      width: 50%;
    }
  }


  & img {
    margin: 24px auto;
  }
`;
