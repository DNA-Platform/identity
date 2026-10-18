import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.life/.book';
import Cover from '../../../../../.claude/.life/.cover';
import Synopsis from '../../../../../.claude/.life/.synopsis';
import Table from '../../../../../.claude/.life/.table';
import TheProject1 from '../../../../../.claude/.life/1-the-project';
import ClaudeRebuildingRoutineAfterAnkleSurgery91ffb1322 from '../../../../../.claude/.life/2-claude-rebuilding-routine-after-ankle-surgery-91ffb132';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudeRebuildingRoutineAfterAnkleSurgery91ffb1322()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
