import React from 'react';
import moment from 'moment';

const Select = ({ handleSelectChange, newStartDate }) => {
  const date = newStartDate.split('-');
  console.log('date:', date);
  const getYears = () => {
    const output = [];
    for (let i = 2018; i >= 2000; i--) {
      output.push(i);
    }
    return output;
  };
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const getDaysInMonth = () => {
    const days = [];
    if (date[1] === 'MM') return days;
    const month = moment(date.slice(0, 2).join('-'), 'YYYY-MM');
    for (let i = 1; i <= month.daysInMonth(); i++) {
      days.push(i);
    }
    return days;
  };
  return (
    <div>
      <select
        name="year"
        id="year-select"
        value={date[0] === 'YYYY' ? 'Select a year' : date[0]}
        onChange={(e) => handleSelectChange(e, 'year')}
      >
        <option value="Select a year">Select a year</option>
        {getYears().map(year => (
          <option value={year} key={year}>{year}</option>
        ))}
      </select>
      <select
        name="month"
        id="month-select"
        value={date[1] === 'MM' ? 'Select a month' : months[+date[1] - 1]}
        onChange={(e) => handleSelectChange(e, 'month')}
      >
        <option value="Select a month">Select a month</option>
        {months.map(month => (
          <option value={month} key={month}>{month}</option>
        ))}
      </select>
      <select
        name="date"
        id="date-select"
        value={date[2] === 'DD' ? 'Select a date' : +date[2]}
        onChange={(e) => handleSelectChange(e, 'date')}
      >
        <option value="Select a date">Select a date</option>
        {getDaysInMonth().map(date => (
          <option value={date} key={date}>{date}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
