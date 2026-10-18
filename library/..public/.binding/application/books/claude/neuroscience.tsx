import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.neuroscience/.book';
import Cover from '../../../../../.claude/.neuroscience/.cover';
import Synopsis from '../../../../../.claude/.neuroscience/.synopsis';
import Table from '../../../../../.claude/.neuroscience/.table';
import TheProject1 from '../../../../../.claude/.neuroscience/1-the-project';
import ClaudeAcademicCredentialsAndResearchImpactAssessmentC2 from '../../../../../.claude/.neuroscience/2-claude-academic-credentials-and-research-impact-assessment-c';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudeAcademicCredentialsAndResearchImpactAssessmentC2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
