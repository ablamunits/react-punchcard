import * as React from 'react';
import { PunchCardRow, PunchCardRowValue } from './punch-card-row/index';
import * as classNames from 'classnames';
import { Point } from '../domain.types';

export type PunchCardProps = {
    value: PunchCardRowValue[];

    className?: string;
    renderAxisTick?: (p: Point) => string
    minDotScale?: number;
    maxDotScale?: number;
};

export class PunchCard extends React.PureComponent<PunchCardProps> {
    renderPunchCardAxis = () => {
        const firstVal = this.props.value[0];
        const punchCardAxisTicks = firstVal ? (
            firstVal.points.map((p, i) => {
                return <div key={i} className='punch-card-axis-tick'>{this.props.renderAxisTick(p)}</div>;
            })
        ) : null;

        return (
            <div className='punch-card-axis'>
                {punchCardAxisTicks}
            </div>
        );
    }

    render () {
        const {props} = this;
        const cn = classNames('punch-card', props.className);

        const rowProps = {
            maxDotScale: props.maxDotScale,
            minDotScale: props.minDotScale
        };

        return (
            <div className={cn}>
                {props.value.map((rowValue, i) => <PunchCardRow {...rowProps} key={i} value={rowValue}/>)}
                {props.renderAxisTick ? this.renderPunchCardAxis() : null}
            </div>
        );
    }
}
