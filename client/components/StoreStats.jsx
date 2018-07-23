import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import {connect} from 'react-redux'
import {getStoreStats} from '../actions/storeStats'

class StoreStats extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      donation: [],
      redemption: []
    }
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    this.props.dispatch(getStoreStats(id))
  }

  render () {
    return (
      <div className='stats'>
        <h3>Donations by Month</h3>
        {this.props.storeStats &&
        <ResponsiveContainer width='100%' height={400}>
          <BarChart data={this.props.storeStats} margin={{top: 5, right: 25, left: 0, bottom: 5}}>
            <CartesianGrid strokeDasharray='4 4'/>
            <XAxis dataKey='Month' label={{value: 'Month', fill: '#F7CE3E', offset: -10, position: 'insideBottom'}}/>
            <YAxis label={{value: 'Qty', angle: -90, position: 'center', padding: 10, fill: '#1a2930'}}/>
            <Tooltip offset={20}/>
            <Legend algin='center' verticalAlign='bottom' height={100}/>
            <Bar dataKey='donations' fill='#F7CE3E' legendType="square" barSize={40}/>
            <Bar dataKey='redemptions' fill='#1a2930' legendType="square" barSize={40} />
          </BarChart>
        </ResponsiveContainer> }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    storeStats: state.storeStats
  }
}

export default connect(mapStateToProps)(StoreStats)
