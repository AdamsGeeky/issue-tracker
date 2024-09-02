import React from 'react';
import IssueList from '../components/IssueList';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Issue Tracker</h1>
            <IssueList />
        </div>
    );
};

export default HomePage;
