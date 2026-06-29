interface Props {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageBanner({ title, subtitle, image }: Props) {
  return (
    <section className="relative h-[42vh] min-h-[280px] max-h-[420px] overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_30%_10%)]/85 via-[hsl(30_30%_10%)]/55 to-[hsl(140_40%_15%)]/45" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[hsl(40_30%_96%)] text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-[hsl(40_25%_88%)] text-base sm:text-lg max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
