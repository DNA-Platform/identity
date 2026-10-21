import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/1-conversation';
import SemanticReferenceTheoryFormalFoundationsV1o1 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/o1-semantic-reference-theory-formal-foundations-v1';
import TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo2 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/o2-the-architecture-of-subjective-experience-symbols-literals-a';
import TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo3 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis--20b704e8/o3-the-architecture-of-subjective-experience-symbols-literals-a';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {SemanticReferenceTheoryFormalFoundationsV1o1()}
        {TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo2()}
        {TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo3()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
