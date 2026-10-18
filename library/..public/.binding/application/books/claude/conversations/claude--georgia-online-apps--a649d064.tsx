import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgia-online-apps--a649d064/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgia-online-apps--a649d064/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgia-online-apps--a649d064/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgia-online-apps--a649d064/.table';
import January920261 from '../../../../../../.claude/.conversations/claude--georgia-online-apps--a649d064/1-january-9-2026';
import January1020262 from '../../../../../../.claude/.conversations/claude--georgia-online-apps--a649d064/2-january-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January920261()}
        {January1020262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
