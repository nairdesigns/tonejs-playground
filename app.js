import * as Tone from "tone";
import { createSynth } from "./synth";
import { createReverb, createChorus, connectEffects } from "./effects";
import { playNoteSequence } from "./melody.js";

function playMelody(reverbDecayInput) {
  const synth = createSynth();
  const chorus = createChorus();
  const reverb = createReverb();

  connectEffects(synth, chorus, reverb);

  console.log(reverbDecayInput);
  const melody = [
    // Define the melody...
  ];

  playNoteSequence(synth, melody);
  console.log(reverb.decay);

  if (reverbDecayInput) {
    reverbDecayInput.addEventListener
  }}