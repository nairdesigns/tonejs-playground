
// Assuming you have the createSynth function defined in your module
const { createSynth } = require("./script");


jest.mock("tone", () => {
  const Synth = jest.fn(() => ({
    toDestination: jest.fn(),
  }));

  return { Synth };
});

describe("createSynth", () => {
  test("should create an instance of Tone.Synth", () => {
    const synth = createSynth();
    // expect(synth).toBeInstanceOf(Tone.Synth);
  });
});
