import { BaseDriver } from './../../test-utils/base-driver';

export type PunchCardRowDriver = {
    dotCount: () => number;
    label: () => string;
    getDotScale: (dotIdx: number) => number;
};

export const createPunchCardRowDriver = (container: BaseDriver): PunchCardRowDriver => {
    return {
        dotCount: () => container.$$('.punch-card-dot').length,
        label: () => container.$('.punch-card-row-label').text(),
        getDotScale: (dotIdx: number) => {
            const scale = container.$$('.dot-wrapper')[dotIdx].getAttribute('data-scale');
            return parseFloat(scale);
        }
    };
};
