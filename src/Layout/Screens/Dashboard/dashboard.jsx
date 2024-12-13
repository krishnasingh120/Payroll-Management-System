import React from 'react'
import './dashboard.css'
import { PlusOutlined, VerticalLeftOutlined, VerticalRightOutlined } from '@ant-design/icons'

const Dashboard = () => {

  return (
    <div className="dashboard">
      {/* Dashboard Head */}
      <div className="dashboard__header">
        <h3>Dashboard</h3>
        <button className='btn-b'>Buddy Punching +</button>
        <button className='btn-m'>Manager POV</button>
      </div>
      {/* FirstBar */}
      <div className="firstbar">
        <div className="headerone">
          <h5>Good to see you!</h5>
          <p>You are 15 minutes early today!</p>
        </div>
        <div className="headerone_icons">
          <button className='btn-one'><VerticalLeftOutlined />Punch In</button>
          <button className='btn-two'><VerticalRightOutlined />Punch Out</button>
        </div>
      </div>
      {/* SecondBar */}
      <div className='secondbar'>
        <div className="headertwo">
          <table className='table-main'>

            <tr className='border-right'><h4 className='table-head'>Total leave allowance</h4>
              <tr className='number'>34</tr>
              <td>Paid <span className='paid-number'>22</span> Unpaid <span className='unpaid-number'>12</span></td>
            </tr>

            <tr className='border-right'><h4 className='table-head'>Total leave taken</h4>
              <tr className='number'>20</tr>
              <td>Paid <span className='paid-number'>16</span> Unpaid <span className='unpaid-number'>4</span></td>
            </tr>

            <tr className='border-right'><h4 className='table-head'>Total leave available</h4>
              <tr className='number'>87</tr>
              <td>Paid <span className='paid-number'>55</span> Unpaid <span className='unpaid-number'>32</span></td>
            </tr>

            <tr className='border-right'> <h4 className='table-head'>Leave request pending</h4>
              <tr className='number'>13</tr>
              <td>Paid <span className='paid-number'>6</span> Unpaid <span className='unpaid-number'>7</span></td>
            </tr>

          </table>
        </div>
      </div>
      {/* ThirdBar */}
      <div className="thirdbar">
        <div className="headerthree">
          <table className='table-main-one'>

            <tr className='table-header'>Time Log </tr>

            <tr><h2>Today</h2>
              <div className="header-one">
                <td className='one'><div className="text">8:00<span>Scheduled</span></div></td>
                <td className='two'><div className="text">12:00<span>Balance</span></div></td>
                <td className='three'><div className="text">05:00<span>Overtime</span></div></td>
              </div>
            </tr>

            <tr><h2>This month</h2>
              <div className="header-two">
                <td>
                <tr className='p-one'>Total <span>218hrs</span></tr>
                <tr className='p-two'>Worked Time <span>189hrs</span></tr>
                </td>
                <td>
                <tr className='p-three'>Shortage Time <span>29hrs</span></tr>
                <tr className='p-four'>Over Time <span>56hrs</span></tr>
                </td>
              </div>
            </tr>

          </table>
        </div>
      </div>
      {/* FourthBar */}
      <div className="fourthbar">
        <div className="headerfour">
          <table className='announcement-table'>
            <thead>
              <tr className='announcement-header'>Announcements</tr>
              <tr className='announcement-first-row'>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className='announcement-second-row'>
                <td>Software Developer</td>
                <td>Dec 4,2019 21:42</td>
                <td>Dec 7,2019 22:00</td>
                <td>High resolution imagery Option </td>
              </tr>
              <tr className='announcement-third-row'>
                <td>Software Tester</td>
                <td>Oct 4,2019 19:42</td>
                <td>Oct 8,2019 23:00</td>
                <td>Embedded analytics Scripts</td>
              </tr>
              <tr className='announcement-fourth-row'>
                <td>UI/UX Designer</td>
                <td>July 7,2019 11:42</td>
                <td>July 17,2019 12:00</td>
                <td>Enhanched UX for cart quality updates </td>
              </tr>
              <tr className='announcement-fifth-row'>
                <td>Ethical Hacker</td>
                <td>Aug 18,2019 14:50</td>
                <td>Aug 26,2019 23:30</td>
                <td>Cart history fixes</td>
              </tr>
              <tr className='announcement-sixth-row'>
                <td>Scrum Master</td>
                <td>Sept 4,2019 09:45</td>
                <td>Sept 17,2019 14:00</td>
                <td>Corrected Item alignment</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>


    </div>
  );
};

export default Dashboard
