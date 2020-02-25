import React from "react";
import '../css/style.css'

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.rows = 100;
        this.columns = 100;
        this.outerArray = Array(this.rows);
        for (let i = 0; i < this.outerArray.length; i++) {
            this.outerArray[i] = Array(this.columns).fill(false);
        }
        this.state = {
            status: 'off',
            allCells: this.outerArray
        }
    }

    cellClicked = (cell, event) => {
        let gridCopy = JSON.parse(JSON.stringify(this.state.allCells));
        console.log('hello shrutha', gridCopy[cell.row][cell.column].props.className)
        if(gridCopy[cell.row][cell.column].props.className === 'cell off'){
            gridCopy[cell.row][cell.column].props.className = 'cell on'
        }else{
            gridCopy[cell.row][cell.column].props.className = 'cell off'
        }
        // gridCopy[cell.row][cell.column].className = 'cell on'
        this.setState({
            allCells: gridCopy
        })
    }

    componentDidMount(){
        // react dom will not re-render if the references are same.
        const newArray = Array(this.rows);

        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = Array(this.columns);
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                newArray[i][j] = <div className={'cell'+this.state.status} key={i + '-' + j} onClick={(event)=>this.cellClicked({row: i, column: j},event)}></div>
            }
        }
        this.setState({
            allCells: newArray
        })

    }

    render() {
        return (
            <div className='grid'>{this.state.allCells}</div>
        )
    }
}

export default Grid;