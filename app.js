
import { createSynth } from "./synth.js";
import { createChorus, createReverb, connectEffects } from "./effects.js";
import { playNoteSequence } from "./melody.js";
console.log('app.js loaded!')
document.getElementById("playButton").addEventListener("click", playMelody);
console.log('playbutton added')
// get reverbdecay input
const reverbDecayInput = document.getElementById("reverbDecay");
const synth = createSynth();
const chorus = createChorus();
const reverb = createReverb();

if (reverbDecayInput) {
    reverbDecayInput.addEventListener("input", () => {
        const decayValue = parseFloat(reverbDecayInput.value);
        reverb.decay = decayValue;
        console.log("reverb working");
        console.log(reverb.decay);
    });
}


export function playMelody() {
    
    
    
    
    connectEffects(synth, chorus, reverb);
    
    console.log(reverbDecayInput);
    const melody = [
        { note: "A4", duration: "4n" },
        { note: "G4", duration: "4n" },
        { note: "E4", duration: "2n" },
        { note: "C4", duration: "4n" },
        { note: "D4", duration: "4n" },
        { note: "E4", duration: "4n" },
        { note: "F4", duration: "4n" },
        { note: "E4", duration: "2n" },
    ];
    
    playNoteSequence(synth, melody);
    console.log(reverb.decay);
    console.log(synth)

    
}
