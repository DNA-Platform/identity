import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/.table';
import December1220241 from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/1-december-12-2024';
import December1320242 from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/2-december-13-2024';
import December1420243 from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/3-december-14-2024';
import December1520244 from '../../../../../../.claude/.conversations/claude--typescript-types-for-adobe-illustrator-scripting--07f0404b/4-december-15-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1220241()}
        {December1320242()}
        {December1420243()}
        {December1520244()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
