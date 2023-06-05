import * as Tone from "tone";

export function playNoteSequence(synth, melody) {
  let index = 0;
  const playNote = () => {
    if (index >= melody.length) return;
    const { note, duration } = melody[index];
    synth.triggerAttackRelease(note, duration);
    index++;
    Tone.Transport.scheduleOnce(playNote, Tone.Time(duration));
  };

  playNote();
}