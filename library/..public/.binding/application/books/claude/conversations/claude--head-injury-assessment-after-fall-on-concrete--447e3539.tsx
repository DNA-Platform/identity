import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.book';
import Cover from '../../../../../../.claude/.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.table';
import March1720261 from '../../../../../../.claude/.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/1-march-17-2026';

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
