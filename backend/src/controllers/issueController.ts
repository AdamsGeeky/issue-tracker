import { Request, Response } from 'express';
import { IssueService } from '../services/issueService';
import { Issue } from '../models/issue';

export class IssueController {
    private issueService: IssueService;

    constructor() {
        this.issueService = new IssueService();
    }

    public createIssue(req: Request, res: Response): void {
        const { title, description } = req.body;
        const newIssue = new Issue(this.issueService.getIssues().length + 1, title, description);
        this.issueService.createIssue(newIssue);
        res.status(201).json(newIssue);
    }

    public getIssues(req: Request, res: Response): void {
        const issues = this.issueService.getIssues();
        res.status(200).json(issues);
    }

    public updateIssue(req: Request, res: Response): void {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedIssue = new Issue(parseInt(id, 10), title, description);
        this.issueService.updateIssue(parseInt(id, 10), updatedIssue);
        res.status(200).json(updatedIssue);
    }

    public deleteIssue(req: Request, res: Response): void {
        const { id } = req.params;
        this.issueService.deleteIssue(parseInt(id, 10));
        res.status(204).send();
    }
}
