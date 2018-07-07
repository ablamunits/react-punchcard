import { PunchCard, PunchCardProps } from '.';
import { renderAndMountComponent, pointsBuilder } from '../test-utils';
import { PunchCardDriver, createPunchCardDriver } from './driver';

export const defaultProps: PunchCardProps = {
    value: []
};

export const setup = (partialProps: Partial<PunchCardProps>): PunchCardDriver => {
    const props = {...defaultProps, ...partialProps};
    const base = renderAndMountComponent<PunchCardProps>(PunchCard, props);
    return createPunchCardDriver(base);
};

describe('PunchCard', () => {
    it('Creates a punch card of 3 rows with labels and axis values', () => {
        const rows = [
            {points: pointsBuilder(3), label: 'Row 1'},
            {points: pointsBuilder(3), label: 'Row 2'},
            {points: pointsBuilder(3), label: 'Row 3'},
        ];
        const renderAxisTick = (p) => `${p.x}`;
        const driver = setup({value: rows, renderAxisTick});

        expect(driver.rowCount()).toBe(3);
        expect(driver.row(0).label()).toBe('Row 1');
        expect(driver.row(1).label()).toBe('Row 2');
        expect(driver.row(2).label()).toBe('Row 3');

        const expectedAxisLabels = rows[0].points.map((p) => `${p.x}`);
        expect(driver.axisLabels()).toEqual(expectedAxisLabels);
    });
});
