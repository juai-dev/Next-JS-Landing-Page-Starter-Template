import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    <a href="mailto:contact@juai.dev">Email us</a>
    <br></br>
    <br></br> Sheridan, WY © Copyright {new Date().getFullYear()}{' '}
    {AppConfig.title} LLC.
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
