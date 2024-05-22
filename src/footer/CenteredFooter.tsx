import { FooterCopyright } from './FooterCopyright';

const CenteredFooter = () => (
  <div className="text-center">
    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
