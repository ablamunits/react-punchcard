import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Point } from '../domain.types';
import { BaseDriver, createBaseDriver } from './base-driver';

export * from './base-driver';

export const renderAndMountComponent = <T extends {}>(Comp: React.ComponentClass<T>, props: T): BaseDriver => {
    const elem = document.createElement('div');
    document.body.appendChild(elem);
    ReactDOM.render(<Comp {...props}/>, elem);
    return createBaseDriver(elem);
};

export const pointsBuilder = (count: number): Point[] => {
    return new Array(count).fill('').map((_, idx) => ({x: idx + 1, y: Math.floor(Math.random() * 100)}));
};
