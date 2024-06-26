import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="mailto:contact@juai.dev">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Creating mobile apps that \n'}
            <span className="text-primary-500">everyone</span>
            {' loves'}
          </>
        }
        description="Stay tunned for our latest apps"
        button={<Button xl>Coming soon...</Button>}
      />
    </Section>
  </Background>
);

export { Hero };
