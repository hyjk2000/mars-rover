const prompt = require('prompt');
const store = require('./configureStore');

store.subscribe(() => {
  console.log(store.getState());
});

prompt.start();
const promptSchema = {
  properties: {
    instruction: {
      type: 'string',
      pattern: /^[LRM]+$/i,
      message: 'Instruction must be a string consists of L, R and M.',
      required: true
    }
  }
};
(function askForInstruction() {
  prompt.get(promptSchema, (err, result) => {
    if (err && err.message === 'canceled') process.exit();
    const instruction = result.instruction.toUpperCase().split('');
    instruction.forEach(type => {
      try {
        store.dispatch({ type });
      } catch (err) {
        console.warn(err.message);
      }
    });
    return askForInstruction();
  });
})();
