import { createMachine, interpret } from 'xstate';

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const playerMachine = createMachine({
  id: 'player',
  initial: 'idle',
  states: {
    idle: { on: { TOGGLE: 'active' } },
    walking: { on: { TOGGLE: 'idle' } },
    jump: { on: { TOGGLE: 'idle' } }
  }
});

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition(state => console.log(state.value))
  .start();
// => 'inactive'

toggleService.send('TOGGLE');
// => 'active'

toggleService.send('TOGGLE');
// => 'inactive'