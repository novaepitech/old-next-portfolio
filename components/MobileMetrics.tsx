import NumberTicker from "./magicui/number-ticker";

export default function MobileMetrics() {
  return (
    <section className="metrics mt-20 flex flex-wrap justify-evenly gap-12 lg:hidden">
      <div className="metric flex w-[290px]">
        <p className="w-[100px] whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
          <NumberTicker value={7} />
        </p>
        <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
          {" "}
          Technologies maîtrisées
        </p>
      </div>
      <div className="metric flex w-[290px]">
        <p className="w-[100px] whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
          <NumberTicker value={22} />
        </p>
        <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
          {" "}
          Projets réalisés
        </p>
      </div>
      <div className="metric flex w-[290px]">
        <p className="w-[100px] whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
          <NumberTicker value={834} />
        </p>
        <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
          {" "}
          commits sur GitHub
        </p>
      </div>
      <div className="metric flex w-[290px]">
        <p className="w-[100px] whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
          <NumberTicker value={120} />
        </p>
        <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
          {" "}
          kg au bench
        </p>
      </div>
    </section>
  );
}
