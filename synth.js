// Create a Tone.js synth with a smooth sound
const synth = new Tone.Synth({
  oscillator: {
    type: "sine", // Use a sine wave for a smooth sound
  },
  envelope: {
    attack: 0.1,
    decay: 0.2,
    sustain: 0.5,
    release: 1,
  },
});

// Create a reverb effect with initial parameters
const reverb = new Tone.Reverb({
  decay: 5, // Initial decay value
});

// Create a chorus effect with initial parameters
const chorus = new Tone.Chorus({
  frequency: 1.5, // Initial frequency value
  depth: 0.5, // Initial depth value
  delayTime: 3, // Initial delay time value
});

// Connect the synth to the effects and then to the destination
synth.chain(chorus, reverb, Tone.Destination);

// Define the melody with notes and durations
const melody = [
  { note: "C4", duration: "4n" },
  { note: "D4", duration: "4n" },
  { note: "E4", duration: "4n" },
  { note: "F4", duration: "4n" },
  { note: "G4", duration: "4n" },
  { note: "A4", duration: "4n" },
  { note: "B4", duration: "4n" },
  { note: "C5", duration: "4n" },
];

// Play the melody
// ... Previous code ...

// Function to handle changes in the reverb decay parameter
function handleReverbDecayChange(event) {
  const decayValue = parseFloat(event.target.value);
  reverb.set({ decay: decayValue });
}

// Function to handle changes in the chorus effect parameters
function handleChorusParameterChange(event) {
  const frequency = parseFloat(document.getElementById("chorusFrequency").value);
  const depth = parseFloat(document.getElementById("chorusDepth").value);
  const delayTime = parseFloat(document.getElementById("chorusDelay").value);

  chorus.set({
    frequency,
    depth,
    delayTime,
  });
}

// Function to play the smooth synth with effects
function playSmoothSynthWithEffects() {

  // Create a Tone.js sequence to play the melody
  const sequence = new Tone.Sequence(
    (time, { note, duration }) => {
      synth.triggerAttackRelease(note, duration, time);
    },
    melody,
    "4n"
  );

  // Start the sequence
  sequence.start();
}

