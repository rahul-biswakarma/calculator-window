import React, { useState } from "react";

import Window from "./components/Window";

const App: React.FC = () => {
  type WindowPosition = {
    x: number;
    y: number;
  };

  const [windowPosition, setWindowPosition] = useState<WindowPosition>({
    x: 0,
    y: 0,
  });
  return (
    <div className="relative min-h-[100vh] h-full w-full">
      <Window
        windowPosition={windowPosition}
        setWindowPosition={setWindowPosition}
      />
    </div>
  );
};

export default App;
