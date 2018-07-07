import * as React from 'react';
import * as classNames from 'classnames';
import { Point } from '../../domain.types';
import { normalizePoints } from '../../utils';

export type PunchCardRowValue = {
    points: Point[];
    label?: string;
};

export type PunchCardRowProps = {
    value: PunchCardRowValue;
    className?: string;
    maxDotScale?: number;
    minDotScale?: number;
};

export class PunchCardRow extends React.PureComponent<PunchCardRowProps> {
    defaultMaxDotScale = 6;
    defaultMinDotScale = 0.5;

    renderDot = (point: Point, maxValue: number) => {
        const maxDotScale = this.props.maxDotScale || this.defaultMaxDotScale;
        const minDotScale = this.props.minDotScale || this.defaultMinDotScale;

        const value = point.y;
        const scaleAmount = Math.max((value * maxDotScale) / maxValue, minDotScale);

        const style = {
            transform: `scale(${scaleAmount})`
        };

        return (
            <div className='dot-wrapper' key={point.x} data-scale={scaleAmount}>
                <div style={style} className='punch-card-dot'/>
            </div>
        );
    }

    render () {
        const {props} = this;
        const cn = classNames('punch-card-row', props.className);
        const normalizedPoints = normalizePoints(props.value.points);
        const maxValue = Math.max(...normalizedPoints.map((p) => p.y));

        return (
            <div className={cn}>
                <div className='punch-card-row-label'>{props.value.label}</div>
                <div className='punch-card-dot-container'>
                    {normalizedPoints.map((point) => this.renderDot(point, maxValue))}
                </div>
            </div>
        );
    }
}
