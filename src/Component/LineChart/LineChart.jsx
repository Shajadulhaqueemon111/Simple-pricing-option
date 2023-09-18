import React from 'react';
import PropTypes from 'prop-types';
import { LineChart as LChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const LineChart = () => {
  const mathMarksData = [
    {
      "name": "Student 1",
      "mathMarks": 85,
      "physics" :67
    },
    {
      "name": "Student 2",
      "mathMarks": 78,
      "physics" :65
    },
    {
      "name": "Student 3",
      "mathMarks": 92,
      "physics" :66
    },
    {
      "name": "Student 4",
      "mathMarks": 65,
      "physics" :68
    },
    {
      "name": "Student 5",
      "mathMarks": 88,
      "physics" :60
    },
    {
      "name": "Student 6",
      "mathMarks": 70,
      "physics" :64
    },
    {
      "name": "Student 7",
      "mathMarks": 95,
      "physics" :67
    },
    {
      "name": "Student 8",
      "mathMarks": 82,
      "physics" :67
    },
    {
      "name": "Student 9",
      "mathMarks": 75,
      "physics" :67
    },
    {
      "name": "Student 10",
      "mathMarks": 90,
      "physics" :67
    }
  ];

  return (
    <div>
      <LChart width={500} height={400} data={mathMarksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
      </LChart>
    </div>
  );
};

LineChart.propTypes = {};

export default LineChart;
