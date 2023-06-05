export function playNoteSequence(synth, melody) {
  let index = 0;

  const playNote = () => {
    if (index >= melody.length) return;
    const { note, duration } = melody[index];
    synth.triggerAttackRelease(note, duration);
    index++;
    Tone.Transport.scheduleOnce(playNote, `+${duration}`);
  };

  // Start the Tone.js Transport to begin scheduling events
  Tone.Transport.start();

  // Call the playNote function to start playing the melody
  playNote();
}
