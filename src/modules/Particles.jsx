import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const Demo = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
  fpsLimit: 60,
  particles: {
    color: {
      value: "#FFD700", // Gold color for particles
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom", // Particles move upward
      outModes: {
        default: "out", // Particles disappear when they go out of bounds
      },
    },
    number: {
      value: 50, // Number of particles
      density: {
        enable: true,
        area: 800, // Control particle spread area
      },
    },
    opacity: {
      value: { min: 0.5, max: 1 }, // Randomized opacity
    },
    shape: {
      type: "circle", // Circular particles
    },
    size: {
      value: { min: 3, max: 7 }, // Randomized size
    },
  },
  detectRetina: true,
}),    
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
export default  Demo