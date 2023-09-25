const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section className={`padding max-w-7xl mx-auto relative z-0`} id={idName}>
        <span className="hash-span">&nbsp;</span>
        <Component />
      </section>
    );
  };

export default StarWrapper;
