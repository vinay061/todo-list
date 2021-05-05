import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title, showAdd, displayAdd }) => {
    // const onClick = () => {
    //     console.log('click');
        
    // }
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button color={displayAdd ? 'Red' : 'Green'} 
                    text={displayAdd ? 'Close' : 'Add'} 
                    onClick={showAdd} />
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
