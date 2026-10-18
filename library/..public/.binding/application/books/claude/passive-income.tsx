import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.passive-income/.book';
import Cover from '../../../../../.claude/.passive-income/.cover';
import Synopsis from '../../../../../.claude/.passive-income/.synopsis';
import Table from '../../../../../.claude/.passive-income/.table';
import TheProject1 from '../../../../../.claude/.passive-income/1-the-project';
import AnaProfilePassiveIncome12 from '../../../../../.claude/.passive-income/2-ana-profile-passive-income-1';
import AnaProfilePassiveIncome23 from '../../../../../.claude/.passive-income/3-ana-profile-passive-income-2';
import ClaudeClaudeCodePortfolioC90a25d84 from '../../../../../.claude/.passive-income/4-claude-claude-code-portfolio-c90a25d8';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {AnaProfilePassiveIncome12()}
        {AnaProfilePassiveIncome23()}
        {ClaudeClaudeCodePortfolioC90a25d84()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
