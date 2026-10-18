import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/.table';
import April120261 from '../../../../../../.claude/.conversations/claude--mars-sample-return-and-extraterrestrial-life-evidence--0ff8e5ba/1-april-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
