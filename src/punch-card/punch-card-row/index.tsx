import * as React from 'react';
import * as classNames from 'classnames';
import { Point } from '../../domain.types';

export type PunchCardRowValue = {
    points: Point[];
    label?: string;
};

export type PunchCardRowProps = {
    value: PunchCardRowValue;
    className?: string;
};

export class PunchCardRow extends React.PureComponent<PunchCardRowProps> {
    render () {
        const {props} = this;
        const cn = classNames('punch-card-row', props.className);

        return (
            <div className={cn}>
                <div className='punch-card-row-label'>{props.value.label}</div>
                <div className='punch-card-dot-container'>
                    {props.value.points.map((point) => <div key={point.x} className='punch-card-dot'>{point.y}</div>)}
                </div>
            </div>
        );
    }
}
