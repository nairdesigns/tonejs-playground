// Import the necessary modules and functions for testing
const { createReverb } = require("./script.js");
const { playMelody } = require("./script.js");

// Mock the document.getElementById method to return a mock input element
jest.spyOn(document, "getElementById").mockReturnValue({
  addEventListener: jest.fn(),
  value: "5", // Initial value for the input element
});

// Test the event listener for reverbDecay
test("reverbDecay input event listener updates reverb decay", () => {
  // Create a new reverb effect
  const reverb = createReverb();

  // Call the playMelody function to set up the event listener
  playMelody();

  // Simulate an input event with a new value
  const newDecayValue = "8";
  document.getElementById("reverbDecay").value = newDecayValue;
  document.getElementById("reverbDecay").addEventListener.mock.calls[0][1]();

  // Verify that the decay value of the reverb effect is updated
  expect(reverb.decay).toBe(parseFloat(newDecayValue));
});
