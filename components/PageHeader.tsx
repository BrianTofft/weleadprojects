const RED = "#cc2222";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  flip?: boolean;
};

export default function PageHeader({
  label,
  title,
  subtitle,
  image = "/hero.JPEG",
  flip = false,
}: Props) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ transform: flip ? "scaleX(-1)" : "none" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          width={1920}
          height={600}
          className="w-full h-full object-cover object-center brightness-[0.45] md:brightness-[0.32]"
        />
      </div>

      {/* Gradient: left-side vignette so text is always readable */}
      {/* Gradient: subtle top vignette on mobile, left vignette on desktop */}
      <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.0) 100%)" }} />
      <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 100%)" }} />

      {/* Content — pt-36 clears the fixed nav (h-20 = 80px) + breathing room */}
      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-16">
        <p
          className="font-semibold uppercase tracking-widest text-sm mb-3"
          style={{ color: RED }}
        >
          {label}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
