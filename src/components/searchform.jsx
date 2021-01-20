import React from 'react';

const Searchform = (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const item = inputRef.current.value;
        item && props.onSearch(item);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className='search_form' onSubmit={onSubmit}>
            <img src='./images/logo.png' alt='logo' />
            <span className='logo_title'>Youtube</span>
            <input
                ref={inputRef}
                type='text'
                className='search_input'
                placeholder='Search...'
            />
            <button className='search_btn'>Search</button>
        </form>
    );
};

export default Searchform;
