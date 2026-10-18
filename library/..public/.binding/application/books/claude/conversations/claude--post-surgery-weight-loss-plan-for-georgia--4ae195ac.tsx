import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.book';
import Cover from '../../../../../../.claude/.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/.table';
import August120261 from '../../../../../../.claude/.conversations/claude--post-surgery-weight-loss-plan-for-georgia--4ae195ac/1-august-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
