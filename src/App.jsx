import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Scene from './Scene'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import './App.css'


import { KeyboardControls } from '@react-three/drei'
export default function App() {



  return (
    <div className='main'>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['w'] },
          { name: 'backward', keys: ['s'] },
          { name: 'left', keys: ['a'] },
          { name: 'right', keys: ['d'] },
          { name: 'jump', keys: ['Space'] },

        ]}
      >
        <Leva
          collapsed={false}
          oneLineLabels={false}
          flat={true}
          hidden
          theme={{
            sizes: {
              titleBarHeight: '28px',
            },
            fontSizes: {
              root: '10px',
            },
          }}
        />
        <Canvas
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
          }}
          camera={{
            fov: 70,
            near: 0.1,
            far: 20000,
            position: [3, 2, 9],
          }}
          shadows
        >
          <Scene />
          {/* <Perf position="top-left" /> */}

        </Canvas>
      </KeyboardControls>
    </div>
  )
}

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
