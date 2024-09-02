import React from 'react';
import IssueList from './components/IssueList';
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
    return (
        <Container sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Issue Tracker
            </Typography>
            <IssueList />
        </Container>
    );
};

export default App;
