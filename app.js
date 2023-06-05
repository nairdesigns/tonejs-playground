import * as Tone from "tone";
import { createSynth } from "./synth";
import { createReverb, createChorus, connectEffects } from "./effects";
import { playNoteSequence } from "./melody.js";



console.log('app.js loaded!')
export function playMelody(reverbDecayInput) {
    const synth = createSynth();
    const chorus = createChorus();
    const reverb = createReverb();
    
    
    document.getElementById("playButton").addEventListener("click", function () {
        const reverbDecayInput = document.getElementById("reverbDecay");
        playMelody(reverbDecayInput);
    });
    
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
    
    if (reverbDecayInput) {
        reverbDecayInput.addEventListener("input", () => {
            const decayValue = parseFloat(reverbDecayInput.value);
            reverb.decay = decayValue;
            console.log("reverb working");
            console.log(reverb.decay);
        });
    }
}
