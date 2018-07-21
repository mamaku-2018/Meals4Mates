import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {connect} from 'react-redux'
import {getMonthlyStoreStats} from '../actions'

const colors = ['#F7CE3E','#1a2930']

const data = [
  {name: 'Jan', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Feb', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Mar', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Apr', uv: 2780, pv: 3908, amt: 2000},
  {name: 'May', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Jun', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Jul', uv: 3490, pv: 4300, amt: 2100}
]

export class StoreStats extends React.Component({
  componentDidMount () {
    this.props.dispatch(getMonthlyStoreStats(id)) //getMonthlyStoreStats still to be written
    const {id, dispatch} = this.props
   
  }

    render (){
  	return (
      <div className='stats' id='container'>
        <h3>Stores Monthly Stats</h3>
        <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    )}

function mapStateToProps (state)
  return {
    storeStats: state.storeStats
  }
}

export default connect(mapStateToProps)
