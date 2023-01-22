import React, { useState, useRef } from "react";

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

	let parentRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={parentRef}
			className="relative min-h-[100vh] h-full w-full overflow-hidden select-none"
		>
			<Window
				windowPosition={windowPosition}
				setWindowPosition={setWindowPosition}
				parentRef={parentRef}
			/>
		</div>
	);
};

export default App;
