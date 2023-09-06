import { range } from './utils';

function Grid({ numRows, numCols }) {
  const cards = [];

  const rowsRange = range(numRows);
  const colsRange = range(numCols);

  function cols() {
    for (let col=0; col<colsRange; col++) {
      let column = (<div><p>Paragraph</p></div>);
      cards.push(column);
      
    }
    
    return {cards};
  }

  




  return <div className="grid">{cards}</div>;
}

export default Grid;