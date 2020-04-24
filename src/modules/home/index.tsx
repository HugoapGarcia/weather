import React from 'react';
import HomeComponent from './_components/homeComponent';

class Home extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <HomeComponent />
            </>
        );
    }
}

export default Home;