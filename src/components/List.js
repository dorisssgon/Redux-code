import React from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import {isSort,changeItem} from '../../src/redux/redux'

class List extends React.Component {
  handleOnChange = (e) => {
    this.props.changeItem(e.target.value)
  }
  handleOnClick = () => {
    this.props.isSort()
  }
  renderItems = () => {
    let items = this.props.data.items.slice()
    if (this.props.data.filterBy !== 'all') {
      items = _.filter(items, {type: this.props.data.filterBy})
    }
    if (this.props.data.isSort) {
      items = _.sortBy(items, ['name'])
    }else{
      items =_.sortBy(items,['name']).reverse()
    }
    return items.map(item => <li key={item.name}>{item.name}</li>)
  }
  render(){
    return (
      <div className="content">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <label>Filter by:
            <select value={this.props.sortBy} onChange={this.handleOnChange}>
              <option value="all">All</option>
              <option value="car">Car</option>
              <option value="fruit">Fruit</option>
            </select>
          </label>
          <button onClick = {this.handleOnClick}>Sort:{this.props.isSort?'ascending':'descending'}</button>
        </div>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return{
      data: state.reducer
    }
  }
const mapDispatchToProps = (dispatch) =>{
  isSort: ()=>dispatch(isSort())
  changeItem: (data)=>dispatch(changeItem(data))
}
export default connect(mapStateToProps,{isSort,changeItem})(List)