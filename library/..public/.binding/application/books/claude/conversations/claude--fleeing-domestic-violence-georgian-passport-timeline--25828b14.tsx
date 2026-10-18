import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/.table';
import January1620261 from '../../../../../../.claude/.conversations/claude--fleeing-domestic-violence-georgian-passport-timeline--25828b14/1-january-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
