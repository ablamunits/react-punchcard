import { PunchCardRowProps, PunchCardRow } from './index';
import { renderAndMountComponent, pointsBuilder } from '../../test-utils';
import { createPunchCardRowDriver, PunchCardRowDriver } from './driver';

export const defaultProps: PunchCardRowProps = {
    value: {
        points: pointsBuilder(3)
    }
};

export const setup = (partialProps: Partial<PunchCardRowProps>): PunchCardRowDriver => {
    const props = {...defaultProps, ...partialProps};
    const base = renderAndMountComponent<PunchCardRowProps>(PunchCardRow, props);
    return createPunchCardRowDriver(base);
};

describe('PunchCardRow', () => {
    it('Shows 5 punch card dots', () => {
        const value = {points: pointsBuilder(5)};
        const driver = setup({value});

        const count = driver.dotCount();
        expect(count).toBe(5);
    });

    it('Shows row label', () => {
        const label = 'This is a row label';
        const value = {...defaultProps.value, label};
        const driver = setup({value});

        expect(driver.label()).toBe(label);
    });
});
