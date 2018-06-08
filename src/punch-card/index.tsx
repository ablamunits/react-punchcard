import * as React from 'react';
import { PunchCardRow, PunchCardRowValue } from './punch-card-row/index';

export type PunchCardProps = {
    value: PunchCardRowValue[];
};

export class PunchCard extends React.PureComponent<PunchCardProps> {

    render () {
        const {props} = this;
        return (
            <div className='punch-card'>
                {props.value.map((rowValue, i) => <PunchCardRow key={i} value={rowValue}/>)}
            </div>
        );
    }
}
