'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine'; // ✅ Doğru tip

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        particles: {
          number: { value: 30 },
          size: { value: 3 },
          color: { value: '#7c3aed' },
          links: { enable: true, color: '#a78bfa' },
          move: { enable: true, speed: 0.6 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
