import { Octokit } from '@octokit/rest';

class GitHubService {
  constructor() {
    this.octokit = new Octokit({
      // Para uso público, no necesitamos token para leer issues
      // Si quieres que los usuarios puedan crear issues, necesitarás OAuth
    });
    this.owner = 'SimonuwuMC';
    this.repo = 'Simonuwu-Fabric-Project';
  }

  async getIssues(page = 1, per_page = 10, state = 'all') {
    try {
      const response = await this.octokit.rest.issues.listForRepo({
        owner: this.owner,
        repo: this.repo,
        state: state, // 'open', 'closed', or 'all'
        sort: 'created',
        direction: 'desc',
        page,
        per_page
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub issues:', error);
      return [];
    }
  }

  async getIssueComments(issueNumber) {
    try {
      const response = await this.octokit.rest.issues.listComments({
        owner: this.owner,
        repo: this.repo,
        issue_number: issueNumber,
        sort: 'created',
        direction: 'asc'
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching issue comments:', error);
      return [];
    }
  }

  async createIssue(title, body, token) {
    try {
      const authenticatedOctokit = new Octokit({
        auth: token
      });

      const response = await authenticatedOctokit.rest.issues.create({
        owner: this.owner,
        repo: this.repo,
        title,
        body,
        labels: ['user-feedback', 'website']
      });
      return response.data;
    } catch (error) {
      console.error('Error creating GitHub issue:', error);
      throw error;
    }
  }

  async createComment(issueNumber, body, token) {
    try {
      const authenticatedOctokit = new Octokit({
        auth: token
      });

      const response = await authenticatedOctokit.rest.issues.createComment({
        owner: this.owner,
        repo: this.repo,
        issue_number: issueNumber,
        body
      });
      return response.data;
    } catch (error) {
      console.error('Error creating comment:', error);
      throw error;
    }
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Get repository statistics
  async getRepoStats() {
    try {
      const response = await this.octokit.rest.repos.get({
        owner: this.owner,
        repo: this.repo
      });
      return {
        stars: response.data.stargazers_count,
        forks: response.data.forks_count,
        issues: response.data.open_issues_count,
        watchers: response.data.watchers_count
      };
    } catch (error) {
      console.error('Error fetching repo stats:', error);
      return null;
    }
  }
}

export default new GitHubService();