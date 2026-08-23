export default function SystemArchitecture({ t }) {
  return (
    <section className="architecture-section" aria-labelledby="architecture-title">
      <div className="max-w-3xl">
        <p className="section-kicker text-cyan-700" id="architecture-title">
          {t.architecture.title}
        </p>
        <p className="mt-4 text-base leading-8 text-slate-600">{t.architecture.subtitle}</p>
      </div>

      <div className="architecture-flow" role="list">
        {t.architecture.layers.map((layer, index) => (
          <div className="architecture-layer" role="listitem" key={layer.label}>
            <div className="architecture-layer-content">
              <p className="architecture-label">{layer.label}</p>
              <p className="architecture-detail">{layer.detail}</p>
            </div>

            {index < t.architecture.layers.length - 1 ? (
              <div className="architecture-arrow" aria-hidden="true">
                ↓
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="architecture-implementations">
        <p className="architecture-label">{t.architecture.implementationsLabel}</p>
        <p className="architecture-detail">{t.architecture.implementations}</p>
      </div>
    </section>
  )
}
