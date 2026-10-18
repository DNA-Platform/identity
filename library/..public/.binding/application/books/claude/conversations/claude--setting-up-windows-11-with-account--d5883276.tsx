import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--setting-up-windows-11-with-account--d5883276/.book';
import Cover from '../../../../../../.claude/.conversations/claude--setting-up-windows-11-with-account--d5883276/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--setting-up-windows-11-with-account--d5883276/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--setting-up-windows-11-with-account--d5883276/.table';
import May820261 from '../../../../../../.claude/.conversations/claude--setting-up-windows-11-with-account--d5883276/1-may-8-2026';
import May920262 from '../../../../../../.claude/.conversations/claude--setting-up-windows-11-with-account--d5883276/2-may-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May820261()}
        {May920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
