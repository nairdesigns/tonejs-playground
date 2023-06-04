// synth.test.js
// import Tone from 'mock';

// Import the necessary modules and functions for testing
const Tone = require("mock");
const { playSmoothSynthWithEffects } = require("./synth.js");

// Mock the Tone.js functions and objects
jest.mock("tone");

describe("Synth with Effects Tests", () => {
  beforeEach(() => {
    // Clear all mock calls and instances before each test
    jest.clearAllMocks();
  });

  test("Play smooth synth with effects", () => {
    // Mock the Tone.js objects and functions
    const synth = {
      triggerAttackRelease: jest.fn(),
    };
    const sequence = {
      start: jest.fn(),
    };
    Tone.Synth.mockReturnValue(synth);
    Tone.Sequence.mockImplementation((callback) => {
      callback(0, { note: "C4", duration: "4n" });
      callback(0.5, { note: "D4", duration: "4n" });
      callback(1, { note: "E4", duration: "4n" });
      callback(1.5, { note: "F4", duration: "4n" });
      callback(2, { note: "G4", duration: "4n" });
      callback(2.5, { note: "A4", duration: "4n" });
      callback(3, { note: "B4", duration: "4n" });
      callback(3.5, { note: "C5", duration: "4n" });
      return sequence;
    });

    // Call the function to play the smooth synth with effects
    playSmoothSynthWithEffects();

    // Assertions
    expect(Tone.Synth).toHaveBeenCalled();
    expect(Tone.Sequence).toHaveBeenCalled();
    expect(synth.triggerAttackRelease).toHaveBeenCalledTimes(8);
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      1,
      "C4",
      "4n",
      0
    );
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      2,
      "D4",
      "4n",
      0.5
    );
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      3,
      "E4",
      "4n",
      1
    );
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      4,
      "F4",
      "4n",
      1.5
    );
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      5,
      "G4",
      "4n",
      2
    );
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      6,
      "A4",
      "4n",
      2.5
    );
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      7,
      "B4",
      "4n",
      3
    );
    expect(synth.triggerAttackRelease).toHaveBeenNthCalledWith(
      8,
      "C5",
      "4n",
      3.5
    );
    expect(sequence.start).toHaveBeenCalled();
  });
});
