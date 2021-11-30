import React from 'react'

export const Popup = () => {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.closePopup}>close me</button>
            </div>
        </div>
    )
}
