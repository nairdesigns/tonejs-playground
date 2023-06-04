function playMelody() {
  // Create a Tone.js polyphonic synth
  const synth = createSynth();

  // Define the melody with notes and durations
  const melody = [
    { note: "A4", duration: "4n" },
    { note: "G4", duration: "4n" },
    { note: "E4", duration: "2n" },
    { note: "C4", duration: "4n" },
    { note: "D4", duration: "4n" },
    { note: "E4", duration: "4n" },
    { note: "F4", duration: "4n" },
    { note: "E4", duration: "2n" },
  ];

  // Create and connect effects
  const reverb = createReverb();
  const chorus = createChorus();
  connectEffects(synth, chorus, reverb);

  // Play the melody
  playNoteSequence(synth, melody);
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
