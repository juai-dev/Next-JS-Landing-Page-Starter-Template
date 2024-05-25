import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What we are"
    description="Your ultimate destination for top-quality iOS apps. Whether you're looking to boost your productivity, enhance your creativity, or simply have fun, we've got you covered with our curated collection of premium iOS apps."
  >
    <VerticalFeatureRow
      title="Diverse Selection"
      description="We plan on having a diverse selection of iOS apps spanning various categories, including productivity, utilities, entertainment, education, and more. No matter what you're looking for, you're sure to find the perfect app to meet your needs."
      image="/assets/images/shopping.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="High-Quality Standards"
      description="We pride ourselves on maintaining high-quality standards for all of our apps. Each app undergoes rigorous testing and evaluation to ensure that it meets our criteria for excellence in design, functionality, and performance."
      image="/assets/images/settings.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="User-Friendly Experience "
      description="Navigating our apps is a breeze, thanks to our intuitive interface and easy-to-use search and browsing features. Whether you're a tech-savvy user or a novice, you'll feel right at home exploring our collection of iOS apps."
      image="/assets/images/hero-employee.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
