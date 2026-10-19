import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.design/.book';
import Cover from '../../../../../.claude/.design/.cover';
import Synopsis from '../../../../../.claude/.design/.synopsis';
import Table from '../../../../../.claude/.design/.table';
import StartingFromTheAudit1 from '../../../../../.claude/.design/1-starting-from-the-audit';
import TheConversationsPage2 from '../../../../../.claude/.design/2-the-conversations-page';
import TheProjectPage3 from '../../../../../.claude/.design/3-the-project-page';
import TheConversationsAtAThousand4 from '../../../../../.claude/.design/4-the-conversations-at-a-thousand';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {StartingFromTheAudit1()}
        {TheConversationsPage2()}
        {TheProjectPage3()}
        {TheConversationsAtAThousand4()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
