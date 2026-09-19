import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import IntroSection from '@/components/IntroSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import GallerySection from '@/components/GallerySection';
import RegistrationSection from '@/components/RegistrationSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CountdownSection />
        <IntroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <GallerySection />
        <RegistrationSection />
        <FAQSection />
        <section className="nlh-lead" id="lien-he">
          <nlh-contact site="99days" topics-vi="Tham gia 99 Days with NhiLe|Hỏi về chương trình|Hợp tác – tài trợ" topics-en="Join 99 Days with NhiLe|Questions about the programme|Partnership or sponsorship" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
