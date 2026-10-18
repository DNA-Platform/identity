import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/.table';
import March1720261 from '../../../../../../.claude/.conversations/claude--microstock-metadata-research-and-keyword-strategy-plan--4d245f0b/1-march-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
