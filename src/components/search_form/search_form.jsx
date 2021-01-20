import React, { useRef } from 'react';

const SearchForm = (props) => {
    const formRef = React.useRef();
    const inputRef = React.useRef();

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
            <button type='submit' className='search_btn'>
                <img src='/images/search.png' alt='search' />
            </button>
        </form>
    );
};

export default SearchForm;
