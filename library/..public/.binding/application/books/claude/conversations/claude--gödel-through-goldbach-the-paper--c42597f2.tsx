import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/.table';
import ThreeReaders1 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/1-three-readers';
import TheScopeOfThePaper2 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/2-the-scope-of-the-paper';
import TheFourCases3 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/3-the-four-cases';
import ProofCapacity4 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/4-proof-capacity';
import NoPointwiseLowerBounds5 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/5-no-pointwise-lower-bounds';
import TheTitle6 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/6-the-title';
import WhatGDelAccomplished7 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/7-what-g-del-accomplished';
import TheNotations8 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/8-the-notations';
import TheType9 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/9-the-type';
import ThePairRepresentation10 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/10-the-pair-representation';
import WhatGcRepresents11 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/11-what-gc-represents';
import MemoryExhaustion12 from '../../../../../../.claude/.conversations/claude--gödel-through-goldbach-the-paper--c42597f2/12-memory-exhaustion';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {ThreeReaders1()}
        {TheScopeOfThePaper2()}
        {TheFourCases3()}
        {ProofCapacity4()}
        {NoPointwiseLowerBounds5()}
        {TheTitle6()}
        {WhatGDelAccomplished7()}
        {TheNotations8()}
        {TheType9()}
        {ThePairRepresentation10()}
        {WhatGcRepresents11()}
        {MemoryExhaustion12()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
