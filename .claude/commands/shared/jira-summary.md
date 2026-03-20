Analyze all changes in the current branch compared to the default branch and prepare a summary suitable for a Jira ticket comment.

Steps:
1. Detect the default branch by running `git symbolic-ref refs/remotes/origin/HEAD --short` (returns e.g. `origin/master` or `origin/develop`). Strip the `origin/` prefix to get the branch name.
2. Run `git branch --show-current` to get the current branch name.
3. Run `git log <default-branch>..HEAD --oneline` to see all commits in this branch.
4. Run `git diff <default-branch>...HEAD` to see the full diff against the default branch.
5. Write a clear, structured summary of all changes for a Jira comment.
6. Write manual QA steps based on the changes. If the changes are purely internal (e.g. refactoring, CI config, dependencies, infra) and cannot be manually tested via the UI or API, explain why manual QA is not applicable instead.

Summary format rules:
- Do NOT use tables. Use bullet lists instead.
- Start with a one-line summary of what was done overall.
- Group changes by area/topic using headers (e.g. **Backend**, **API**, **Cron**, **Tests**).
- Under each group, use bullet points to describe what changed and why.
- Mention affected files/classes only when it adds clarity.
- Keep it concise but informative — a reviewer should understand the scope without reading the code.
- Use plain text formatting compatible with Jira (bold with *text*, bullet lists with - or *).

QA steps rules:
- Add a *Manual QA* section after the change summary.
- Write numbered steps that a QA engineer can follow to verify the changes work correctly.
- Steps should be actionable and specific (e.g. "Open the user settings page", "Enter an invalid email", "Verify an error message appears").
- Cover both the happy path and key edge cases where relevant.
- If the changes cannot be manually tested (e.g. pure refactoring, CI/infra changes, dependency updates), replace the steps with a brief explanation of why manual QA is not applicable and what was done instead to verify correctness (e.g. "All changes are internal refactoring with no user-facing impact. Verified by passing CI tests.").

Output the summary directly to the user so they can copy-paste it into Jira.
