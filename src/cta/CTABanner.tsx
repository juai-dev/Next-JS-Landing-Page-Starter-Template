type ICTABannerProps = {
  title: string;
  subtitle: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <form name="contact" method="POST" data-netlify="true">
      <div className="text-2xl font-semibold">
        <div className="text-gray-900">{props.title}</div>
        <div className="text-primary-500">{props.subtitle}</div>
        <div className="my-12 flex w-full flex-col">
          <label className="font-bold text-gray-800" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            minLength={5}
            maxLength={150}
            required
            className=" border border-gray-100 bg-gray-50 p-4 "
            autoComplete="off"
            id="email"
          />
        </div>
      </div>

      <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
        <button
          type="submit"
          className="bg-primary-500 px-4 py-2 text-lg  font-semibold text-white"
        >
          Sign up for updates
        </button>
      </div>
    </form>
  </div>
);

export { CTABanner };
