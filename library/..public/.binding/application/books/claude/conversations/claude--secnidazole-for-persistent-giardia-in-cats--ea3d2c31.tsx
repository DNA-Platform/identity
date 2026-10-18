import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.book';
import Cover from '../../../../../../.claude/.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/.table';
import January2420261 from '../../../../../../.claude/.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/1-january-24-2026';
import February920262 from '../../../../../../.claude/.conversations/claude--secnidazole-for-persistent-giardia-in-cats--ea3d2c31/2-february-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2420261()}
        {February920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
