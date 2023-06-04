const reverb = createReverb();
const chorus = createChorus();
// Get the reverbDecay element
const reverbDecayInput = document.getElementById("reverbDecay");

function playMelody() {
  // Create a Tone.js polyphonic synth
  const synth = createSynth();

  // Define the melody with notes and durations
  const melody = [
    { note: "C4", duration: "8n" },
    { note: "E4", duration: "8n" },
    { note: "G4", duration: "8n" },
    { note: "C4", duration: "8n" },
    { note: "E4", duration: "8n" },
    { note: "G4", duration: "8n" },
    { note: "F4", duration: "8n" },
    { note: "E4", duration: "8n" },
    { note: "D4", duration: "8n" },
    { note: "G4", duration: "8n" },
    { note: "F4", duration: "8n" },
    { note: "E4", duration: "8n" },
    { note: "D4", duration: "8n" },
  ];



  connectEffects(synth, chorus, reverb);

  // Play the melody
  playNoteSequence(synth, melody);
  console.log(reverb.decay)
}

function createSynth() {
  return new Tone.Synth({
    oscillator: {
      type: "sine", // Use a sine wave for a smooth sound
    },
    envelope: {
      attack: 0.1,
      decay: 0.2,
      sustain: 0.5,
      release: 1,
    },
  }).toDestination();
}

function createReverb() {
  return new Tone.Reverb({
    decay: 5, // Adjust the decay time for the reverb effect
  });
}

function createChorus() {
  return new Tone.Chorus({
    frequency: 1.5, // Adjust the chorus frequency
    depth: 0.5, // Adjust the chorus depth
    delayTime: 3, // Adjust the chorus delay time
  });
}

function connectEffects(synth, chorus, reverb) {
  synth.chain(chorus, reverb, Tone.Destination);
}

function playNoteSequence(synth, melody) {
  let index = 0;
  const playNote = () => {
    if (index >= melody.length) return;
    const { note, duration } = melody[index];
    synth.triggerAttackRelease(note, duration);
    index++;
    setTimeout(playNote, Tone.Time(duration).toMilliseconds());
  };

  playNote();
}


// Add an event listener to the reverbDecay input element
reverbDecayInput.addEventListener("input", () => {
  const decayValue = parseFloat(reverbDecayInput.value);
  // Set the new decay value for the reverb effect
  reverb.decay = decayValue;
  console.log("reverb working");
  console.log(reverb.decay)
});
