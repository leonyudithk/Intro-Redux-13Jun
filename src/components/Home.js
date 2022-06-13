import React from 'react';
import AddProducts from './AddProducts';
import List from './List';

const Home = () => {
    return (
        <div>
            <AddProducts/>
            <hr/>
            <List/>
        </div>
    );
};

export default Home;