import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/.table';
import March2820251 from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/1-march-28-2025';
import March2920252 from '../../../../../../.claude/.conversations/claude--algorithmic-art-project-evolvedsvg--c583291c/2-march-29-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2820251()}
        {March2920252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
