import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/.book';
import Cover from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/1-conversation';
import TaskbarTestSuiteV1o1 from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/o1-taskbar-test-suite-v1';
import TaskbarTestSuiteAhk11V1o2 from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/o2-taskbar-test-suite-ahk11-v1';
import TaskbarTestSuiteForAhk11V2o3 from '../../../../../../.claude/.conversations/claude--autohotkey-taskbar-control-script--f72c8a89/o3-taskbar-test-suite-for-ahk-1-1-v2';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {TaskbarTestSuiteV1o1()}
        {TaskbarTestSuiteAhk11V1o2()}
        {TaskbarTestSuiteForAhk11V2o3()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
