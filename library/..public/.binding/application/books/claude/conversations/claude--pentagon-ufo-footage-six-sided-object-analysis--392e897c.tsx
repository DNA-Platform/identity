import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/.table';
import July1020261 from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/1-july-10-2026';
import July1120262 from '../../../../../../.claude/.conversations/claude--pentagon-ufo-footage-six-sided-object-analysis--392e897c/2-july-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1020261()}
        {July1120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
