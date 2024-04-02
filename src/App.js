// src/App.js
import './App.css';
import { useFeatureFlagEnabled, PostHogFeature, usePostHog, useFeatureFlagVariantKey } from 'posthog-js/react';

function App() {
  
  const posthog = usePostHog();

  posthog.featureFlags.override('home-button-test', 'test')
  const flagValue = useFeatureFlagVariantKey('home-button-test')

  const handleClick = () => {
    posthog.capture('button clicked');
  };

  return (
    <div className="App">
      <h1>We are testing this button:</h1>
      {flagValue === 'test' ? (
        <button onClick={handleClick}>Sign up for free!</button>
      ) : (
        <button onClick={handleClick}>Click me!</button>
      )}
    </div>
  );
}

export default App;