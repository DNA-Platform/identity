import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.claude/.book';
import Cover from '../../../../../.claude/.claude/.cover';
import Synopsis from '../../../../../.claude/.claude/.synopsis';
import Table from '../../../../../.claude/.claude/.table';
import TheProject1 from '../../../../../.claude/.claude/1-the-project';
import ClaudeTest9facbd5d2 from '../../../../../.claude/.claude/2-claude-test-9facbd5d';
import ClaudeClaudeMiscellaneousEad0c8153 from '../../../../../.claude/.claude/3-claude-claude-miscellaneous-ead0c815';
import ClaudeCathyLibrariesB5de02874 from '../../../../../.claude/.claude/4-claude-cathy-libraries-b5de0287';
import ClaudeNancyVisualization999480775 from '../../../../../.claude/.claude/5-claude-nancy-visualization-99948077';
import ClaudeNancyNeuroscienceA4816e756 from '../../../../../.claude/.claude/6-claude-nancy-neuroscience-a4816e75';
import ClaudeArthurTeamF21e3ed37 from '../../../../../.claude/.claude/7-claude-arthur-team-f21e3ed3';
import ClaudeClaudeProgramming401768b28 from '../../../../../.claude/.claude/8-claude-claude-programming-401768b2';
import ClaudeClaudePhilosophyF8c40c379 from '../../../../../.claude/.claude/9-claude-claude-philosophy-f8c40c37';
import ClaudeCathyProgrammingB6395c0d10 from '../../../../../.claude/.claude/10-claude-cathy-programming-b6395c0d';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudeTest9facbd5d2()}
        {ClaudeClaudeMiscellaneousEad0c8153()}
        {ClaudeCathyLibrariesB5de02874()}
        {ClaudeNancyVisualization999480775()}
        {ClaudeNancyNeuroscienceA4816e756()}
        {ClaudeArthurTeamF21e3ed37()}
        {ClaudeClaudeProgramming401768b28()}
        {ClaudeClaudePhilosophyF8c40c379()}
        {ClaudeCathyProgrammingB6395c0d10()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
