import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PunchCard } from '../src/punch-card/index';

const createRows = (count: number, itemsPerRow: number) => {
    return new Array(count).fill('').map((_, idx) => {
        return {
            id: idx + 1,
            label: `Row ${idx + 1}`,
            points: new Array(itemsPerRow).fill('')
                .map((__, i) => ({x: i + 1, y: Math.floor(Math.random() * 1000)}))
        };
    });
};

export class PunchCardDemo extends React.PureComponent {
    state = {
        rows: []
    };

    componentDidMount () {
        this.setRows();
    }

    setRows = () => this.setState({rows: createRows(5, 30)});

    render () {
        return (
            <div className='punch-card-demo'>
                <PunchCard value={this.state.rows}/>
                <div className='actions'>
                    <button onClick={this.setRows}>Refresh Data</button>
                </div>
            </div>
        );
    }
}

const elem = document.getElementById('demo');
ReactDOM.render(<PunchCardDemo/>, elem);
