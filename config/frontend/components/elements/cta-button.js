export default function CTAButton({ attributes }) {
  // if (!attributes) return <></>;
  return (
    <div class="inline-flex items-center group">
      <a
        class="text-secondary border-secondary hover:text-white hover:bg-secondary
          inline-block text-sm py-4 px-4 md:px-8 text-center uppercase tracking-widest border bg-transparent transition-colors duration-200"
        href="attributes.url"
      >
        browse our events
      </a>
      <a href="attributes.url">
        <svg
          viewbox="0 0 161.21 17.414"
          class="w-20 md:w-32 -ml-3 md:-ml-5 group-hover:ml-10 transition-all duration-200"
        >
          <g
            class="text-primary stroke-2 stroke-current"
            transform="translate(5923 8387.2)"
            fill="none"
            stroke-linecap="round"
          >
            <path transform="translate(10.85 38)" d="m-5933.4-8416.5h160" />
            <path transform="translate(11.505 64)" d="m-5782-8450.5 8 8-8 8" />
          </g>
        </svg>
      </a>
    </div>
  );
}
