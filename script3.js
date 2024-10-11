import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 20,
  curvePoints: 35,
  curveLerp: 0.65,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 100,
  sleepRadiusX: 350,
  sleepRadiusY: 200,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})