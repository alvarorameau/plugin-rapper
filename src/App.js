import React, {useEffect} from 'react';
import WisperIframe from './iframe/WhisperIframe';


import fit_ui_container from './fit_to_screen';

function App() {

  useEffect(() => {
    fit_ui_container();

    window.onresize = fit_ui_container;
  })

  return (
    <WisperIframe src="http://localhost:3000" />
  );
}

export default App;
