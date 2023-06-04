// File: __mocks__/tone.js

const createSynth = jest.fn(() => {
  return {
    triggerAttackRelease: jest.fn((note, duration) => {
      // Mock behavior for triggerAttackRelease
      // You can add assertions or perform any necessary logic here
    }),
  };
});

const createReverb = jest.fn(() => {
  return {
    // Implement the desired behavior for createReverb
    decay: 5, // Example property value
  };
});

const createChorus = jest.fn(() => {
  return {
    // Implement the desired behavior for createChorus
    frequency: 1.5, // Example property value
    depth: 0.5, // Example property value
    delayTime: 3, // Example property value
  };
});

const connectEffects = jest.fn(() => {
  // Implement the desired behavior for connectEffects
  // You can perform any necessary logic here
});

const playNoteSequence = jest.fn(() => {
  // Implement the desired behavior for playNoteSequence
  // You can perform any necessary logic here
});

module.exports = {
  createSynth,
  createReverb,
  createChorus,
  connectEffects,
  playNoteSequence,
};
