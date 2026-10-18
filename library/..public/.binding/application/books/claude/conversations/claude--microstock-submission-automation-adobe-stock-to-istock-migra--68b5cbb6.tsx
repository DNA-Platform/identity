import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--microstock-submission-automation-adobe-stock-to-istock-migra--68b5cbb6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--microstock-submission-automation-adobe-stock-to-istock-migra--68b5cbb6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--microstock-submission-automation-adobe-stock-to-istock-migra--68b5cbb6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--microstock-submission-automation-adobe-stock-to-istock-migra--68b5cbb6/.table';
import March1020261 from '../../../../../../.claude/.conversations/claude--microstock-submission-automation-adobe-stock-to-istock-migra--68b5cbb6/1-march-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
