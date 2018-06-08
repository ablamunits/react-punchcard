import * as React from 'react';
import { Point } from '../../domain';

export type PunchCardRowValue = {
    points: Point[];
    label?: string;
};

export type PunchCardRowProps = {
    value: PunchCardRowValue;
};

export class PunchCardRow extends React.PureComponent<PunchCardRowProps> {
    render () {
        const {props} = this;

        return (
            <div className='punch-card-row'>
                <div className='row-label'>{props.value.label}</div>
                {props.value.points.map((point) => <div key={point.x} className='punch-card-dot'>{point.y}</div>)}
            </div>
        );
    }
}
