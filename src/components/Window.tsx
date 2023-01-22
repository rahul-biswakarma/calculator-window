import React, { useRef, useState } from "react";

type WindowPosition = {
	x: number;
	y: number;
};

const Window: React.FC<{
	windowPosition: WindowPosition;
	setWindowPosition: React.Dispatch<React.SetStateAction<WindowPosition>>;
	parentRef: React.RefObject<HTMLDivElement>;
}> = ({ windowPosition, setWindowPosition, parentRef }) => {
	var windowRef = useRef<HTMLDivElement>(null);

	let X: number, Y: number;

	const [isMoving, setIsMoving] = useState(false);
	const [initialX, setInitialX] = useState(0);
	const [initialY, setInitialY] = useState(0);
	const [finalX, setFinalX] = useState(0);
	const [finalY, setFinalY] = useState(0);

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsMoving(true);
		setInitialX(e.clientX);
		setInitialY(e.clientY);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (parentRef && windowRef.current && isMoving && parentRef.current) {
			const maxX =
				parentRef.current.offsetWidth - windowRef.current.offsetWidth;
			const maxY =
				parentRef.current.offsetHeight - windowRef.current.offsetHeight;
			windowRef.current.style.top = `${Math.min(
				Math.max(windowPosition.y + (e.clientY - initialY), 0),
				maxY
			)}px`;
			windowRef.current.style.left = `${Math.min(
				Math.max(windowPosition.x + (e.clientX - initialX), 0),
				maxX
			)}px`;
			setFinalX(windowPosition.x + (e.clientX - initialX));
			setFinalY(windowPosition.y + (e.clientY - initialY));
		}
	};

	const handleMouseUp = () => {
		setIsMoving(false);
		setInitialX(finalX);
		setWindowPosition({ x: finalX, y: finalY });
	};

	return (
		<div ref={parentRef}>
			<div
				className={`absolute top-[${windowPosition.y}px] left-[${windowPosition.x}px] w-[300px] h-[300px] bg-[#000]/40 backdrop-blur-3xl border-[1px] border-[#49494e] border-radius-[5px]`}
				ref={windowRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				Window
			</div>
		</div>
	);
};

export default Window;
