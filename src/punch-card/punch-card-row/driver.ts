import { BaseDriver } from './../../test-utils/base-driver';

export type PunchCardRowDriver = {
    dotCount: () => number;
    label: () => string;
};

export const createPunchCardRowDriver = (container: BaseDriver): PunchCardRowDriver => {
    return {
        dotCount: () => container.$$('.punch-card-dot').length,
        label: () => container.$('.punch-card-row-label').text()
    };
};
