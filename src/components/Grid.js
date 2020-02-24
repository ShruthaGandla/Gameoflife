import React from "react";
import '../css/style.css'

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.rows = 100;
        this.columns = 100;
    }

    generateAllCells = () => {
        const outerArray = Array(this.rows);

        for (let i = 0; i < outerArray.length; i++) {
            outerArray[i] = Array(this.columns)
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                outerArray[i][j] = <div className='cell' key={i + '-' + j}></div>
            }
        }

        return outerArray;
    }

    render() {
        return (
            <div className='grid'>{this.generateAllCells()}</div>
        )
    }
}

export default Grid;