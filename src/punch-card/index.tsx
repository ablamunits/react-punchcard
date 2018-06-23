import * as React from 'react';
import { PunchCardRow, PunchCardRowValue } from './punch-card-row/index';
import * as classNames from 'classnames';

export type PunchCardProps = {
    value: PunchCardRowValue[];
    className?: string;
};

export class PunchCard extends React.PureComponent<PunchCardProps> {
    render () {
        const {props} = this;
        const cn = classNames('punch-card', props.className);

        return (
            <div className={cn}>
                {props.value.map((rowValue, i) => <PunchCardRow key={i} value={rowValue}/>)}
            </div>
        );
    }
}
