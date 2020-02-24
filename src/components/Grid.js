import React from "react";
import '../css/style.css'

class Grid extends React.Component {
    constructor(props){
        super(props);
        this.rows = 100;
        this.columns = 100;
    }

    generateAllCells() {
        const innerArray = Array(this.columns).fill(false);
        const outerArray = Array(this.rows).fill(innerArray);
        const finalGrid =[];

        outerArray.map((item, outerIndex) => {
              item.map((innerItem, innerIndex) => {
                finalGrid.push(<div className='cell' key={outerIndex+'-'+innerIndex}></div>)
              })
        })

       
        return finalGrid;
    }

    render() {
        return (
            <div className='grid'>{this.generateAllCells()}</div>
        )
    }
}

export default Grid;