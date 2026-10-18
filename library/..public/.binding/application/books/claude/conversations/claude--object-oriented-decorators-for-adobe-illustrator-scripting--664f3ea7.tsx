import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--object-oriented-decorators-for-adobe-illustrator-scripting--664f3ea7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--object-oriented-decorators-for-adobe-illustrator-scripting--664f3ea7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--object-oriented-decorators-for-adobe-illustrator-scripting--664f3ea7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--object-oriented-decorators-for-adobe-illustrator-scripting--664f3ea7/.table';
import December420241 from '../../../../../../.claude/.conversations/claude--object-oriented-decorators-for-adobe-illustrator-scripting--664f3ea7/1-december-4-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December420241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
