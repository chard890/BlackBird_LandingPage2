export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.34em] text-charcoal/55">
        {eyebrow}
      </p>
      <h2 className="text-balance font-serif text-4xl leading-none text-charcoal sm:text-5xl lg:text-[3.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-base leading-8 text-charcoal/72 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
