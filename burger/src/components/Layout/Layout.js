import React from 'react';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <>
        <Toolbar />
        <main className={style.Content}>
            {props.children}
        </main>
    </>
);

export default layout;