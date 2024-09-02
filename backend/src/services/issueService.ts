import { Issue } from '../models/issue';
import seedData from '../seed.json';

export class IssueService {
    private issues: Issue[] = [];

    constructor() {
        this.loadSeedData();
    }

    private loadSeedData(): void {
        this.issues = seedData.map((data: any) => new Issue(data.id, data.title, data.description));
    }

    public createIssue(issue: Issue): void {
        this.issues.push(issue);
    }

    public getIssues(): Issue[] {
        return this.issues;
    }

    public updateIssue(id: number, updatedIssue: Issue): void {
        const index = this.issues.findIndex(issue => issue.getId() === id);
        if (index !== -1) {
            this.issues[index] = updatedIssue;
        }
    }

    public deleteIssue(id: number): void {
        this.issues = this.issues.filter(issue => issue.getId() !== id);
    }
}
