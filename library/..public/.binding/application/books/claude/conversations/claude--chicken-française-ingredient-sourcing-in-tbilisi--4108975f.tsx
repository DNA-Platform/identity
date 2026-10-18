import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.table';
import August2320261 from '../../../../../../.claude/.conversations/claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/1-august-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
