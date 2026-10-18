import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--aladdins-resemblance-to-tom-cruise--da7470c4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--aladdins-resemblance-to-tom-cruise--da7470c4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--aladdins-resemblance-to-tom-cruise--da7470c4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--aladdins-resemblance-to-tom-cruise--da7470c4/.table';
import November920241 from '../../../../../../.claude/.conversations/claude--aladdins-resemblance-to-tom-cruise--da7470c4/1-november-9-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November920241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
