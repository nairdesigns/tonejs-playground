"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playMelody = playMelody;
var _synth = require("./synth.js");
var _effects = require("./effects.js");
var _melody = require("./melody.js");
console.log('app.js loaded!');
document.getElementById("playButton").addEventListener("click", playMelody);
console.log('playbutton added');
// get reverbdecay input
var reverbDecayInput = document.getElementById("reverbDecay");
var synth = (0, _synth.createSynth)();
var chorus = (0, _effects.createChorus)();
var reverb = (0, _effects.createReverb)();
if (reverbDecayInput) {
  reverbDecayInput.addEventListener("input", function () {
    var decayValue = parseFloat(reverbDecayInput.value);
    reverb.decay = decayValue;
    console.log("reverb working");
    console.log(reverb.decay);
  });
}
function playMelody() {
  (0, _effects.connectEffects)(synth, chorus, reverb);
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
  console.log('synth:' + synth);
}