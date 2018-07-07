import { Point } from './domain.types';

export const normalizePoints = (values: Point[]): Point[] => {
	const maxY = Math.max(...values.map((v) => v.y));
	return values.map((val) => {
		const normalizedY = Math.floor((val.y * 100) / maxY);
		return {...val, y: normalizedY};
	});
};
