// src/App.js
import './App.css';

import { Experiment, Variant, emitter, experimentDebugger } from '@marvelapp/react-ab-test'

experimentDebugger.enable();

emitter.addPlayListener("Theo-Test-AB", function(experimentName, variantName) {
  // Perform any necessary operations to send experiment data to server or analytics provider.
  console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
});

emitter.addWinListener("Theo-Test-AB", function(experimentName, variantName) {
  // Perform any necessary operations to send experiment data to server or analytics provider.
  console.log(
    `Variant ${variantName} of experiment ${experimentName} was clicked`
  );
});

function App() {
  function handleClick (e) {
    emitter.emitWin('Theo-Test-AB');
  }

  return (
    <div className="App">
      <Experiment name="Theo-Test-AB">
        <Variant name='control'>
          <button onClick={handleClick}>Original Button</button>
        </Variant>
        <Variant name='addl-info'>
          <p>A/B testing is a way to compare two versions of a single variable typically by testing a subject's response to variable A against variable B, and determining which of the two variables is more effective.
          </p>
          <button onClick={handleClick}>Variant Button</button>
        </Variant>
      </Experiment>
    </div>
  );
}

export default App;