#!/usr/bin/env node

const fs = require('fs');
const execSync = require('child_process').execSync;

// Function to get current branch name
function getCurrentBranchName() {
    return execSync('git branch --show-current').toString().trim();
}

// Function to extract ticket code from branch name
function extractTicketCode(branchName) {
    const match = branchName.match(/^[A-Za-z]{3}-\d+/);
    return match ? match[0].toUpperCase() : '';
}

// Main script execution
(function () {
    // Get the commit message file path
    const commitMsgFilePath = process.argv[2];

    // Read the existing commit message
    const originalCommitMsg = fs.readFileSync(commitMsgFilePath, 'utf-8').trim();

    // Get current branch name
    const branchName = getCurrentBranchName();

    // Extract the ticket code from the branch name
    const ticketCode = extractTicketCode(branchName);

    // Prepend the ticket code to the commit message if it's not already present
    if (ticketCode && !originalCommitMsg.startsWith(ticketCode)) {
        const updatedCommitMsg = `${ticketCode} ${originalCommitMsg}`;
        fs.writeFileSync(commitMsgFilePath, updatedCommitMsg, 'utf-8');
    }
})();
