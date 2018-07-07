import { BaseDriver } from './../test-utils/base-driver';
import { PunchCardRowDriver, createPunchCardRowDriver } from './punch-card-row/driver';

export type PunchCardDriver = {
    rowCount: () => number;
    row: (idx: number) => PunchCardRowDriver;
    axisLabels: () => string[];
};

export const createPunchCardDriver = (base: BaseDriver): PunchCardDriver => {
    return {
        rowCount: () => base.$$('.punch-card-row').length,
        row: (idx: number) => createPunchCardRowDriver(base.$$('.punch-card-row')[idx]),
        axisLabels: () => base.$$('.punch-card-axis-tick').map((tick) => tick.text())
    };
};
