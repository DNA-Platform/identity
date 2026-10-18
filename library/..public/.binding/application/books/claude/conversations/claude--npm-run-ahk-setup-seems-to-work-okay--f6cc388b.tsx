import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/.table';
import March1320251 from '../../../../../../.claude/.conversations/claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/1-march-13-2025';
import EnhancedEnvironmentSetupScriptV1o1 from '../../../../../../.claude/.conversations/claude--npm-run-ahk-setup-seems-to-work-okay--f6cc388b/o1-enhanced-environment-setup-script-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1320251()}
        {EnhancedEnvironmentSetupScriptV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
