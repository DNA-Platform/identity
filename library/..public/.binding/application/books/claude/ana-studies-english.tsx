import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.ana-studies-english/.book';
import Cover from '../../../../../.claude/.ana-studies-english/.cover';
import Synopsis from '../../../../../.claude/.ana-studies-english/.synopsis';
import Table from '../../../../../.claude/.ana-studies-english/.table';
import TheProject1 from '../../../../../.claude/.ana-studies-english/1-the-project';
import ClaudeBuildingAndPracticingAPersonalVocabulary2fb9deb2 from '../../../../../.claude/.ana-studies-english/2-claude-building-and-practicing-a-personal-vocabulary-2fb9deb';
import ClaudePreservingContinuityAcrossAccountTransitionF54993 from '../../../../../.claude/.ana-studies-english/3-claude-preserving-continuity-across-account-transition-f5499';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudeBuildingAndPracticingAPersonalVocabulary2fb9deb2()}
        {ClaudePreservingContinuityAcrossAccountTransitionF54993()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
