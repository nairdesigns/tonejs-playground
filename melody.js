
 export function playNoteSequence(synth, melody) {
  let index = 0;
  console.log("Entering the while loop");
  while (index < 10) {
    console.log("In the while loop. Index = " + index);
    index++;
  }
  const playNote = () => {
    if (index >= melody.length) return;
    const { note, duration } = melody[index];
    synth.triggerAttackRelease(note, duration);
    index++;
    Tone.Transport.scheduleOnce(playNote, Tone.Time(duration));
  };

  playNote();
}

