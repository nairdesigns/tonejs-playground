// Import the necessary modules and functions for testing
const Tone = require("tone");

// Import the functions to test
const {
  createSynth,
  createReverb,
  createChorus,
  connectEffects,
  playNoteSequence,
} = require("./script");

// Test the createSynth function
test("createSynth creates a Tone.js synth with the correct settings", () => {
  const synth = createSynth();
  expect(synth).toBeInstanceOf(Tone.Synth);
  // Add more specific assertions for the synth's settings if needed
});

// Test the createReverb function
test("createReverb creates a Tone.js reverb with the correct settings", () => {
  const reverb = createReverb();
  expect(reverb).toBeInstanceOf(Tone.Reverb);
  // Add more specific assertions for the reverb's settings if needed
});

// Test the createChorus function
test("createChorus creates a Tone.js chorus with the correct settings", () => {
  const chorus = createChorus();
  expect(chorus).toBeInstanceOf(Tone.Chorus);
  // Add more specific assertions for the chorus's settings if needed
});

// Test the connectEffects function
test("connectEffects connects the synth, chorus, and reverb in the correct order", () => {
  const synth = new Tone.Synth();
  const chorus = new Tone.Chorus();
  const reverb = new Tone.Reverb();
  connectEffects(synth, chorus, reverb);
  // Add assertions to check if the connections are set up correctly
});

// Test the playNoteSequence function
test("playNoteSequence plays the notes in the correct order and duration", () => {
  // Mock the necessary objects for testing
  const synth = {
    triggerAttackRelease: jest.fn(),
  };
  const melody = [
    { note: "A4", duration: "4n" },
    { note: "G4", duration: "4n" },
    { note: "E4", duration: "2n" },
  ];

  // Call the function to test
  playNoteSequence(synth, melody);

  // Add assertions to check if the notes are played correctly
  expect(synth.triggerAttackRelease).toHaveBeenCalledTimes(3);
  expect(synth.triggerAttackRelease).toHaveBeenCalledWith("A4", "4n");
  expect(synth.triggerAttackRelease).toHaveBeenCalledWith("G4", "4n");
  expect(synth.triggerAttackRelease).toHaveBeenCalledWith("E4", "2n");
});
