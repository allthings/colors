Analyze my current git changes and create a commit.

Steps:
1. Run `git diff --staged`, `git diff`, and `git status -u` to see all changes (staged, unstaged, and untracked files).
2. Run `git branch --show-current` to get the current branch name.
3. Extract the ticket ID from the branch name (e.g. `APP-12345` from `APP-12345-some-feature`). The pattern is uppercase letters, a dash, then digits at the start of the branch name.
4. Analyze the changes and write a concise, meaningful commit description that:
    - Focuses on WHAT was changed and WHY, not listing files
    - Uses lowercase, imperative mood (e.g. "fix missing events in cron job scheduler")
    - If a ticket was found, the final message will be `feat(TICKET): description` (~18 char prefix) — keep description ~42-62 chars
    - If no ticket, the final message will be `feat: description` (~6 char prefix) — keep description ~54-74 chars
    - Total message must not exceed 80 characters
5. Stage all changes and commit using these commands:
   ```
   git add -A
   git commit -m "feat(TICKET): description"
   ```
   Replace `feat(TICKET): description` with the appropriate message (with or without ticket).
6. Show the resulting commit message to the user.

IMPORTANT: Do NOT ask the user for confirmation. Just analyze, generate the message, and commit.
IMPORTANT: Do NOT add any "Co-Authored-By" trailers or attribution lines to the commit message.