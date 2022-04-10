// Home Button

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PowerBtn } from '../dataReact/PowerBtn';

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding: 0.5rem;
border-radius: 50%;
border: 1px solid #000;
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
z-index: 5;

&:hover {
    cursor: pointer;
    background-color: #b203b5;
    color: #ccc;
    box-shadow: 0 0 6px 4px #b203b5;
}

&>*:first-child {
    text-decoration: none;
    color: inherit;
    padding-top: 0.2rem;
}
`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to='/'>
                <PowerBtn width={25} height={25} fill='currentColor' />
            </NavLink>
        </Power>
    )
}

export default PowerButton;