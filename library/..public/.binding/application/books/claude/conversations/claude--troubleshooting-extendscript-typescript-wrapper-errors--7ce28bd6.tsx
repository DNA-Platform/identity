import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/.table';
import January1220251 from '../../../../../../.claude/.conversations/claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/1-january-12-2025';
import January1320252 from '../../../../../../.claude/.conversations/claude--troubleshooting-extendscript-typescript-wrapper-errors--7ce28bd6/2-january-13-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1220251()}
        {January1320252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
