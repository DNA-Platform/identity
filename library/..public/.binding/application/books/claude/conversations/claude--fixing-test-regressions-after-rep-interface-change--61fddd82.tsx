import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fixing-test-regressions-after-rep-interface-change--61fddd82/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--fixing-test-regressions-after-rep-interface-change--61fddd82/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
