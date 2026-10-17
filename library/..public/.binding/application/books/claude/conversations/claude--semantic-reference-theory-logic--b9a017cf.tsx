import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/.table';
import September420251 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/1-september-4-2025';
import September520252 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/2-september-5-2025';
import September620253 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/3-september-6-2025';
import InheritanceWithoutRecursionTheSingleRelationFoundationo1 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o1-inheritance-without-recursion-the-single-relation-foundation';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV1o2 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o2-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v1';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV2o3 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o3-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v2';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV3o4 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o4-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v3';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV4o5 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o5-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v4';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV5o6 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o6-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v5';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV6o7 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o7-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v6';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV7o8 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o8-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v7';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV8o9 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o9-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v8';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV9o10 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o10-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v9';
import SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV10o11 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-logic--b9a017cf/o11-symbols-vs-sets-the-opposite-semantics-of-self-inclusion-v10';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September420251()}
        {September520252()}
        {September620253()}
        {InheritanceWithoutRecursionTheSingleRelationFoundationo1()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV1o2()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV2o3()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV3o4()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV4o5()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV5o6()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV6o7()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV7o8()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV8o9()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV9o10()}
        {SymbolsVsSetsTheOppositeSemanticsOfSelfInclusionV10o11()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
