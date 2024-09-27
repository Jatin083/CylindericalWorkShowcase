import { Canvas } from "@react-three/fiber"
import React from 'react'
import './style.css'
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const App = () => {

  return (
<>
    <Canvas camera={{ fov: 60 }}>
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
        mipmapBlur
          intensity={50.0} // The bloom intensity.
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          
        
        />
        </EffectComposer>

    </Canvas>
    <div className="w-full bg-black py-32">
      <h1>Welcome Guy's</h1>

    </div>
    </>
  );
};

export default App
