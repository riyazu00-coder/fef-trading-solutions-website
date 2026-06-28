type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  gradient?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, gradient, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-electric">
          <span className="h-px w-7 bg-electric/70" />
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance text-4xl font-black tracking-normal text-white sm:text-5xl lg:text-6xl">
        {title} {gradient ? <span className="text-gradient">{gradient}</span> : null}
      </h1>
      {description ? <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-steel">{description}</p> : null}
    </div>
  );
}
