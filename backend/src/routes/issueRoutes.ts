import { Router } from 'express';
import { IssueController } from '../controllers/issueController';

const router = Router();
const issueController = new IssueController();

router.post('/issues', (req, res) => issueController.createIssue(req, res));
router.get('/issues', (req, res) => issueController.getIssues(req, res));
router.put('/issues/:id', (req, res) => issueController.updateIssue(req, res));
router.delete('/issues/:id', (req, res) => issueController.deleteIssue(req, res));

export default router;
