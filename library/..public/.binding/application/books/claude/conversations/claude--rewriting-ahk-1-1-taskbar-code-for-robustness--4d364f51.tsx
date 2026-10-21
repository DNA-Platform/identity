import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/.book';
import Cover from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/1-conversation';
import TaskbarAhkImprovedWindowsTaskbarAutomationLibraryV1o1 from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/o1-taskbar-ahk-improved-windows-taskbar-automation-library-v1';
import TaskbartestAhkTestSuiteForTaskbarLibraryV1o2 from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/o2-taskbartest-ahk-test-suite-for-taskbar-library-v1';
import TaskbarmanualtestAhkManualTestingScriptV1o3 from '../../../../../../.claude/.conversations/claude--rewriting-ahk-1-1-taskbar-code-for-robustness--4d364f51/o3-taskbarmanualtest-ahk-manual-testing-script-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {TaskbarAhkImprovedWindowsTaskbarAutomationLibraryV1o1()}
        {TaskbartestAhkTestSuiteForTaskbarLibraryV1o2()}
        {TaskbarmanualtestAhkManualTestingScriptV1o3()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
