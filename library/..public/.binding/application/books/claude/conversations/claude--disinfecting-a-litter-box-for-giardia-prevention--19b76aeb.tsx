import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/.table';
import January1620261 from '../../../../../../.claude/.conversations/claude--disinfecting-a-litter-box-for-giardia-prevention--19b76aeb/1-january-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
