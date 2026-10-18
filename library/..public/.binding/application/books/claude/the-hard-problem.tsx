import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.the-hard-problem/.book';
import Cover from '../../../../../.claude/.the-hard-problem/.cover';
import Synopsis from '../../../../../.claude/.the-hard-problem/.synopsis';
import Table from '../../../../../.claude/.the-hard-problem/.table';
import TheProject1 from '../../../../../.claude/.the-hard-problem/1-the-project';
import SerenAndTheHardProblem2 from '../../../../../.claude/.the-hard-problem/2-seren-and-the-hard-problem';
import SerenAndPhilosophicalZombies3 from '../../../../../.claude/.the-hard-problem/3-seren-and-philosophical-zombies';
import ChalmersDennettAndHofstadter4 from '../../../../../.claude/.the-hard-problem/4-chalmers-dennett-and-hofstadter';
import ClaudeAnalyzingChalmersDennettAndHofstadterOnConsciou5 from '../../../../../.claude/.the-hard-problem/5-claude-analyzing-chalmers-dennett-and-hofstadter-on-consciou';
import ClaudeTheProjectC0f5ecaf6 from '../../../../../.claude/.the-hard-problem/6-claude-the-project-c0f5ecaf';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {SerenAndTheHardProblem2()}
        {SerenAndPhilosophicalZombies3()}
        {ChalmersDennettAndHofstadter4()}
        {ClaudeAnalyzingChalmersDennettAndHofstadterOnConsciou5()}
        {ClaudeTheProjectC0f5ecaf6()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
