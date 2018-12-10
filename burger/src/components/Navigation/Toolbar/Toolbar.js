import React from 'react';
import styles from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            {/* <ul>
                <li></li>
            </ul> */}
        </nav>
    </header>
);

export default toolbar;