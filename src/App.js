import React from 'react';
import { Line } from 'react-chartjs-2';

function App() {
  const data = {
    labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
    datasets: [{ label: 'Value', data: [1, 4, 2, 5, 3] }],
  };
  return <Line data={data} />;
}

export default App;
