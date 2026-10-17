import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--representation-and-the-part-whole-dichotomy--afd46f5f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--representation-and-the-part-whole-dichotomy--afd46f5f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--representation-and-the-part-whole-dichotomy--afd46f5f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--representation-and-the-part-whole-dichotomy--afd46f5f/.table';
import June1420261 from '../../../../../../.claude/.conversations/claude--representation-and-the-part-whole-dichotomy--afd46f5f/1-june-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
