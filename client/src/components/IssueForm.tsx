import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { createIssue, updateIssue } from '../services/issueService';

interface IssueFormProps {
    issueToEdit?: { id: number; title: string; description: string } | null;
    onSubmit: () => void;
    mode: 'create' | 'update';
}

const IssueForm: React.FC<IssueFormProps> = ({ issueToEdit, onSubmit, mode }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (issueToEdit) {
            setTitle(issueToEdit.title);
            setDescription(issueToEdit.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [issueToEdit]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === 'update' && issueToEdit) {
            await updateIssue({ id: issueToEdit.id, title, description });
        } else {
            await createIssue({ title, description });
        }
        setTitle('');
        setDescription('');
        onSubmit();
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                multiline
                rows={4}
            />
            <Button variant="contained" type="submit">
                {mode === 'update' ? 'Update Issue' : 'Create Issue'}
            </Button>
        </Box>
    );
};

export default IssueForm;
