import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

function App() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [3, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const options = {
    // scales: {
    //   xAxes: [
    //     {
    //       ticks: {
    //         min: 1,
    //       },
    //     },
    //   ],
    // },
  };

  const onElementsClick = elements => {
    console.log('onElementsClick');
    console.log(elements);
    if (elements.length) {
      alert(`${elements[0]._index}: ${elements[0]._model.label}`);
    }
  };

  return (
    <HorizontalBar
      data={data}
      onElementsClick={onElementsClick}
      options={options}
    />
  );
}

export default App;
