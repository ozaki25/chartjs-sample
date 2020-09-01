import React, { useRef } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

function App() {
  const lineRef = useRef(null);

  const data = {
    labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
    datasets: [
      {
        label: 'Value',
        data: [1, 4, 2, 5, 3],
      },
    ],
  };

  const onClick = elems => {
    console.log('onClick');
    console.log(elems);
    console.log(lineRef.current);
  };

  const onElementsClick = elems => {
    console.log('onElementsClick');
    console.log(elems);
    if (elems.length) alert(elems[0]._model.label);
  };

  const getElementsAtEvent = elems => {
    console.log('getElementsAtEvent');
    console.log(elems);
  };

  const getElementAtEvent = elems => {
    console.log('getElementAtEvent');
    console.log(elems);
  };

  const getDatasetAtEvent = elems => {
    console.log('getDatasetAtEvent');
    console.log(elems);
  };

  return (
    <HorizontalBar
      ref={lineRef}
      data={data}
      onElementsClick={onElementsClick}
      // getElementsAtEvent={getElementsAtEvent}
      // getElementAtEvent={getElementAtEvent}
      // getDatasetAtEvent={getDatasetAtEvent}
      // options={{ onClick }}
    />
  );
}

export default App;
