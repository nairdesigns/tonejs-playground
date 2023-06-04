const Tone = require("tone");

// Assuming you have the createSynth function defined in your module
const { createSynth } = require("tone");

jest.mock("tone", () => ({
  Synth: jest.fn(() => ({
    // Mock implementation of Tone.Synth constructor
    toDestination: jest.fn(),
  })),
}));

describe("createSynth", () => {
  test("should create an instance of Tone.Synth", () => {
    const synth = createSynth();
    expect(synth).toBeInstanceOf(Tone.Synth);
  });
});
