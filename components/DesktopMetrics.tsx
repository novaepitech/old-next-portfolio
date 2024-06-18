import NumberTicker from "./magicui/number-ticker";

export default function DesktopMetrics() {
  return (
    <section className="metrics mt-20 flex justify-evenly max-lg:hidden">
      <div className="flex">
        <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
          <NumberTicker value={7} />
        </p>
        <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
          {" "}
          Technologies maîtrisées
        </p>
      </div>
      <div className="flex">
        <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
          <NumberTicker value={22} />
        </p>
        <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
          {" "}
          Projets réalisés
        </p>
      </div>
      <div className="flex">
        <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
          <NumberTicker value={834} />
        </p>
        <p className="w-1/2 pl-4 text-lg font-thin tracking-tighter text-white">
          {" "}
          commits sur GitHub
        </p>
      </div>
      <div className="flex">
        <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-white">
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
