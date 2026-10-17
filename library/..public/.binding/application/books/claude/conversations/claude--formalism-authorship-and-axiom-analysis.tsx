import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/.book';
import Cover from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/.table';
import September420251 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/1-september-4-2025';
import SemanticReferenceTheoryFormalFoundationsV1o1 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/o1-semantic-reference-theory-formal-foundations-v1';
import TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo2 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/o2-the-architecture-of-subjective-experience-symbols-literals-a';
import TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo3 from '../../../../../../.claude/.conversations/claude--formalism-authorship-and-axiom-analysis/o3-the-architecture-of-subjective-experience-symbols-literals-a';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September420251()}
        {SemanticReferenceTheoryFormalFoundationsV1o1()}
        {TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo2()}
        {TheArchitectureOfSubjectiveExperienceSymbolsLiteralsAo3()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
