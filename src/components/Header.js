import React from 'react'
import PropTypes from 'prop-types';
import { Button } from './Button';

export const Header = ({ title, showAddTaskForm, showAddTask }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} onClick={showAddTaskForm} />
        </header>
    )
}

//typesrcipt ile yazmıyorsak bu şekide type tanımı yapabiliriz.
Header.propTypes = {
    title: PropTypes.string.isRequired
}

//props gönderilmemişse default olarak bu görünür.
Header.defaultProps = {
    title: 'Task Tracker'
}
