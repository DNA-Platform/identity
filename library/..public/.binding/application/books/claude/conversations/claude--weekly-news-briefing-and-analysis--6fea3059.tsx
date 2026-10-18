import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--weekly-news-briefing-and-analysis--6fea3059/.book';
import Cover from '../../../../../../.claude/.conversations/claude--weekly-news-briefing-and-analysis--6fea3059/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--weekly-news-briefing-and-analysis--6fea3059/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--weekly-news-briefing-and-analysis--6fea3059/.table';
import April1920261 from '../../../../../../.claude/.conversations/claude--weekly-news-briefing-and-analysis--6fea3059/1-april-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
