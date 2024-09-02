import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { getIssues, deleteIssue } from '../services/issueService';
import IssueForm from './IssueForm';

const IssueList: React.FC = () => {
    const [issues, setIssues] = useState<Array<{ id: number; title: string; description: string }>>([]);
    const [editingIssue, setEditingIssue] = useState<{ id: number; title: string; description: string } | null>(null);
    const [mode, setMode] = useState<'create' | 'update'>('create');

    const fetchIssues = async () => {
        const data = await getIssues();
        setIssues(data);
    };

    const handleDelete = async (id: number) => {
        await deleteIssue(id);
        fetchIssues();
    };

    const handleEdit = (issue: { id: number; title: string; description: string }) => {
        setEditingIssue(issue);
        setMode('update');
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    return (
        <Box>
            <Box sx={{ marginBottom: 2 }}>
                <IssueForm issueToEdit={editingIssue} onSubmit={fetchIssues} mode={mode} />
            </Box>
            <List>
                {issues.map(issue => (
                    <ListItem key={issue.id}>
                        <ListItemText primary={issue.title} secondary={issue.description} />
                        <Button variant="outlined" onClick={() => handleEdit(issue)}>Edit</Button>
                        <Button variant="contained" color="error" onClick={() => handleDelete(issue.id)}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default IssueList;
