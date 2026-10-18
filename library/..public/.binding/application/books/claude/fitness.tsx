import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.fitness/.book';
import Cover from '../../../../../.claude/.fitness/.cover';
import Synopsis from '../../../../../.claude/.fitness/.synopsis';
import Table from '../../../../../.claude/.fitness/.table';
import TheProject1 from '../../../../../.claude/.fitness/1-the-project';
import ClaudePostSurgeryWeightLossPlanForGeorgia4ae195ac2 from '../../../../../.claude/.fitness/2-claude-post-surgery-weight-loss-plan-for-georgia-4ae195ac';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudePostSurgeryWeightLossPlanForGeorgia4ae195ac2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
