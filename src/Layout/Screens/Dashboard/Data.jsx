import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';


const data = {
    employeeName: "Krishna",
    leaveAllowance: 20,
    leaveTaken: 5,
    leaveAvailable: 15,
    leaveRequestsPending: 2,
    timeLogs: {
      today: {
        scheduled: "8 hours",
        balance: "2 hours",
        worked: "6 hours"
      },
      thisMonth: {
        totalHours: "160 hours",
        workedHours: "120 hours",
        shortageTime: "10 hours"
      }
    },
    announcements: [
      {
        id: 1,
        title: "New Policy Announcement",
        startDate: "2022-01-01",
        endDate: "2022-01-31",
        description: "This is a new policy announcement."
      },
      {
        id: 2,
        title: "Holiday Reminder",
        startDate: "2022-12-25",
        endDate: "2022-12-25",
        description: "This is a holiday reminder."
      },
      {
        id: 3,
        title: "Team Meeting",
        startDate: "2022-07-26",
        endDate: "2022-07-26",
        description: "This is a team meeting announcement."
      }
    ]
};
export default data;

ReactDOM.render(
  <React.StrictMode>
    <Dashboard data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);