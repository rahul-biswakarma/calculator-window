import React, { useRef, useState, useEffect } from "react";

type WindowPosition = {
	x: number;
	y: number;
};

const Window: React.FC<{
	windowPosition: WindowPosition;
	setWindowPosition: React.Dispatch<React.SetStateAction<WindowPosition>>;
	parentRef: React.RefObject<HTMLDivElement>;
}> = ({ windowPosition, setWindowPosition, parentRef }) => {
	let windowRef = useRef<HTMLDivElement>(null);
	var windowPosLocal: WindowPosition;
	useEffect(() => {
		if (localStorage.getItem("windowPosition"))
			windowPosLocal = JSON.parse(localStorage.getItem("windowPosition")!);
		if (windowRef.current)
			windowRef.current.style.top = `${windowPosLocal.y}px`;
		if (windowRef.current)
			windowRef.current.style.left = `${windowPosLocal.x}px`;
	}, []);

	const lightButtonCss =
		"w-[50px] h-[50px] bg-white/30 backdrop-blur-sm flex justify-center items-center border-none";
	const orangeButtonCss =
		"w-[50px] h-[50px] bg-[#ff9f1c] backdrop-blur-xl flex justify-center items-center border-none";
	const darkButtonCss =
		"w-[50px] h-[50px] bg-white/5 backdrop-blur-sm flex justify-center items-center border-none";
	const windowControlButtonCss = "w-[10px] h-[10px] rounded-full";

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
		localStorage.setItem(
			"windowPosition",
			JSON.stringify({ x: finalX, y: finalY })
		);
	};

	const handleCloseButtonClick = () => {
		console.log("Close button clicked");
		// add any other code here to handle the close button click
	};

	const handleMinimizeButtonClick = () => {
		console.log("Minimize button clicked");
		// add any other code here to handle the minimize button click
	};

	const handleMaximizeButtonClick = () => {
		console.log("Maximize button clicked");
		// add any other code here to handle the maximize button click
	};

	return (
		<div ref={parentRef}>
			<div
				className={`absolute top-[${windowPosition.y}px] left-[${windowPosition.x}px] bg-[#000]/30 backdrop-blur-3xl border-[1px] text-white font-[500] text-[1rem] border-[#49494e] rounded-lg`}
				ref={windowRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<div className="w-full h-[100px] flex justify-end items-end px-3 py-2 text-7xl">
					0
				</div>
				<div className="flex gap-[1px]">
					<div
						id="optional-buttons"
						className="flex flex-col gap-[1px]"
					>
						<div className="flex gap-[1px]">
							<span className={`${darkButtonCss}`}>(</span>
							<span className={`${darkButtonCss}`}>)</span>
							<span className={`${darkButtonCss}`}>mc</span>
							<span className={`${darkButtonCss}`}>m+</span>
							<span className={`${darkButtonCss}`}>m-</span>
							<span className={`${darkButtonCss}`}>mr</span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${darkButtonCss}`}>
								2<sup>nd</sup>
							</span>
							<span className={`${darkButtonCss}`}>
								x<sup>2</sup>
							</span>
							<span className={`${darkButtonCss}`}>
								x<sup>3</sup>
							</span>
							<span className={`${darkButtonCss}`}>
								x<sup>y</sup>
							</span>
							<span className={`${darkButtonCss}`}>
								e<sup>x</sup>
							</span>
							<span className={`${darkButtonCss}`}>
								10<sup>x</sup>
							</span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${darkButtonCss}`}>x!</span>
							<span className={`${darkButtonCss}`}>sin</span>
							<span className={`${darkButtonCss}`}>cos</span>
							<span className={`${darkButtonCss}`}>tan</span>
							<span className={`${darkButtonCss}`}>e</span>
							<span className={`${darkButtonCss}`}>EE</span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${darkButtonCss}`}>
								<sup>1</sup>/<sub>x</sub>
							</span>
							<span className={`${darkButtonCss}`}>&#8730;x</span>
							<span className={`${darkButtonCss}`}>&#8731;x</span>
							<span className={`${darkButtonCss}`}>&#8732;x</span>
							<span className={`${darkButtonCss}`}>ln</span>
							<span className={`${darkButtonCss}`}>
								log<sub>10</sub>
							</span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${darkButtonCss}`}>Rad</span>
							<span className={`${darkButtonCss}`}>sinh</span>
							<span className={`${darkButtonCss}`}>cosh</span>
							<span className={`${darkButtonCss}`}>tanh</span>
							<span className={`${darkButtonCss}`}>&pi;</span>
							<span className={`${darkButtonCss}`}>Rand</span>
						</div>
					</div>
					<div
						id="default-buttons"
						className="flex flex-col gap-[1px]"
					>
						<div className="flex gap-[1px]">
							<span className={`${darkButtonCss}`}>AC</span>
							<span className={`${darkButtonCss}`}>
								<sup>+</sup>/<sub> - </sub>
							</span>
							<span className={`${darkButtonCss}`}>%</span>
							<span className={`${orangeButtonCss}`}>&divide;</span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${lightButtonCss}`}>7</span>
							<span className={`${lightButtonCss}`}>8</span>
							<span className={`${lightButtonCss}`}>9</span>
							<span className={`${orangeButtonCss}`}>x</span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${lightButtonCss}`}>4</span>
							<span className={`${lightButtonCss}`}>5</span>
							<span className={`${lightButtonCss}`}>6</span>
							<span className={`${orangeButtonCss}`}> - </span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${lightButtonCss}`}>1</span>
							<span className={`${lightButtonCss}`}>2</span>
							<span className={`${lightButtonCss}`}>3</span>
							<span className={`${orangeButtonCss}`}>+</span>
						</div>
						<div className="flex gap-[1px]">
							<span className={`${lightButtonCss} w-[101px]`}>0</span>
							<span className={`${lightButtonCss}`}>.</span>
							<span className={`${orangeButtonCss}`}> = </span>
						</div>
					</div>
				</div>
				<div className="flex gap-[5px] absolute top-[0px] left-[0px] p-2">
					<span
						className={`${windowControlButtonCss} bg-rose-500`}
						onClick={handleCloseButtonClick}
					></span>
					<span
						className={`${windowControlButtonCss} bg-amber-500`}
						onClick={handleMinimizeButtonClick}
					></span>
					<span
						className={`${windowControlButtonCss} bg-lime-500`}
						onClick={handleMaximizeButtonClick}
					></span>
				</div>
			</div>
		</div>
	);
};

export default Window;
