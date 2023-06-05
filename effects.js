
 export function createReverb() {
  return new Tone.Reverb({
    decay: 5,
  });
}

 export function createChorus() {
  return new Tone.Chorus({
    frequency: 1.5,
    depth: 0.5,
    delayTime: 3,
  });
}

 export function connectEffects(synth, chorus, reverb) {
  synth.chain(chorus, reverb, Tone.Destination);
}
