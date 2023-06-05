jest.mock("tone");

import { createSynth } from "../synth.js";
import { Tone } from "tone/build/esm/core/Tone.js";
describe("createSynth", () => {
  test("should create a fake Tone.Synth object for testing", () => {
    const Tone = new Tone
    const synth = createSynth();

    expect(Tone.Synth).toHaveBeenCalled();
    expect(synth.oscillator.type).toBe("sine");
    expect(synth.envelope.attack).toBe(0.1);
    expect(synth.envelope.decay).toBe(0.2);
    expect(synth.envelope.sustain).toBe(0.5);
    expect(synth.envelope.release).toBe(1);
    expect(synth.toDestination).toHaveBeenCalled();
  });
});
