export const Synth = jest.fn().mockImplementation(() => ({
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.1,
    decay: 0.2,
    sustain: 0.5,
    release: 1,
  },
  toDestination: jest.fn(),
}));
