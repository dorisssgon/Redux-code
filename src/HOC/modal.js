import React from 'react'

function modal(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { open } = this.props 
      if ( open ) {
        return (
          <div className="modal">
            <WrappedComponent className="modal-content" {...this.props}/>
          </div>
        )
      } else {
        return <div></div>
      }
    }
  }
}

export default modal