function Node({ title, items, accent = false }) {
  return (
    <div className={`architecture-node ${accent ? 'architecture-node-accent' : ''}`}>
      <p className="text-sm font-bold text-slate-950">{title}</p>
      {items?.length ? (
        <p className="mt-2 text-sm leading-6 text-slate-600">{items.join(' · ')}</p>
      ) : null}
    </div>
  )
}

function Connector() {
  return <div className="architecture-connector" aria-hidden="true" />
}

export default function SystemArchitecture({ t }) {
  const nodes = t.architecture.nodes

  return (
    <section className="mt-10 border-t border-slate-200 pt-10">
      <div className="max-w-3xl">
        <p className="section-kicker text-cyan-700">{t.architecture.title}</p>
        <p className="mt-4 text-base leading-8 text-slate-600">{t.architecture.subtitle}</p>
      </div>

      <div className="mt-8 overflow-x-auto">
        <div className="architecture-diagram">
          <Node title={nodes.users} accent />
          <Connector />
          <Node title={nodes.frontend} items={nodes.frontendItems} />
          <Connector />
          <div>
            <Node title={nodes.dataLayer} accent />
            <div className="architecture-branches">
              <Node title={nodes.auth} items={nodes.authItems} />
              <Node title={nodes.database} items={nodes.databaseItems} />
              <Node title={nodes.storage} items={nodes.storageItems} />
            </div>
          </div>
          <Connector />
          <Node title={nodes.modules} items={nodes.modulesItems} />
          <Connector />
          <Node title={nodes.integrations} items={nodes.integrationsItems} />
          <Connector />
          <Node title={nodes.deployment} items={nodes.deploymentItems} />
          <Connector />
          <Node title={nodes.businesses} items={nodes.businessesItems} accent />
        </div>
      </div>
    </section>
  )
}
