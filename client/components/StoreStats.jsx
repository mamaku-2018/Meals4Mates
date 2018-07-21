import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {connect} from 'react-redux'
import {getStoreStats} from '../actions/storeStats'

// const colors = ['#fff', '#F7CE3E']

export class StoreStats extends React.Component {
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
      <div className='stats' id='container'>
        <h3>Stores Monthly Stats</h3>
        {this.props.storeStats &&
        <BarChart width={700} height={500} data={this.props.storeStats} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray='4 4'/>
          <XAxis dataKey='Category' label={{value: 'Category', fill: '#F7CE3E', offset: -10, position: 'insideBottom'}}/>
          <YAxis label={{value: 'Monthly Donations & Redemptions', angle: -90, position: 'center', padding: 10, fill: '#1a2930'}}/>
          <Tooltip offset={20}/>
          <Legend algin='center' verticalAlign='bottom' height={300}/>
          <Bar dataKey='donations' fill='#F7CE3E' legendType="square" barSize={40}/>
          <Bar dataKey='redemptions' fill='#1a2930' legendType="square" barSize={40} />
        </BarChart> }

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
