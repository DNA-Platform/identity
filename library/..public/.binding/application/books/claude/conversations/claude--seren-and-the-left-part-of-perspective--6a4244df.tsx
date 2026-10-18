import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/.table';
import March2720261 from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/1-march-27-2026';
import March2820262 from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/2-march-28-2026';
import March2920263 from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/3-march-29-2026';
import May2320264 from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/4-may-23-2026';
import May2420265 from '../../../../../../.claude/.conversations/claude--seren-and-the-left-part-of-perspective--6a4244df/5-may-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2720261()}
        {March2820262()}
        {March2920263()}
        {May2320264()}
        {May2420265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
