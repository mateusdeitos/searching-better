import { useState } from "react";

export const useRandomThemeColor = (shadeValue = 500) => {
	const colors = [
		"red",
		"blue",
		"green",
		"yellow",
	];

	const [currentRandomColor, setRandomColor] = useState(`${colors[0]}.${shadeValue}`);

	const updateColor = () => {
		const _colors = colors.filter(color => color != currentRandomColor.split(".")[0]);
		const newColor = _colors[Math.floor(Math.random() * colors.length)];
		setRandomColor(`${newColor}.${shadeValue}`);
	};

	return {
		updateColor,
		randomColor: currentRandomColor,
	};
}
