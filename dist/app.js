"use strict";

var _melody = require("./melody");
console.log('app.js loaded!');
function playMelody(reverbDecayInput) {
  var synth = createSynth();
  var chorus = createChorus();
  var reverb = createReverb();
  document.getElementById("playButton").addEventListener("click", function () {
    var reverbDecayInput = document.getElementById("reverbDecay");
    playMelody(reverbDecayInput);
  });
  connectEffects(synth, chorus, reverb);
  console.log(reverbDecayInput);
  var melody = [{
    note: "A4",
    duration: "4n"
  }, {
    note: "G4",
    duration: "4n"
  }, {
    note: "E4",
    duration: "2n"
  }, {
    note: "C4",
    duration: "4n"
  }, {
    note: "D4",
    duration: "4n"
  }, {
    note: "E4",
    duration: "4n"
  }, {
    note: "F4",
    duration: "4n"
  }, {
    note: "E4",
    duration: "2n"
  }];
  (0, _melody.playNoteSequence)(synth, melody);
  console.log(reverb.decay);
  if (reverbDecayInput) {
    reverbDecayInput.addEventListener("input", function () {
      var decayValue = parseFloat(reverbDecayInput.value);
      reverb.decay = decayValue;
      console.log("reverb working");
      console.log(reverb.decay);
    });
  }
}
module.exports = {
  playMelody: playMelody
};