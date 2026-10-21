import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/1-conversation';
import DynamicChildrenTestsV1o1 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o1-dynamic-children-tests-v1';
import DynamicChildrenTestsV2o2 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o2-dynamic-children-tests-v2';
import DynamicChildrenTestsV3o3 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o3-dynamic-children-tests-v3';
import DynamicChildrenTestsV4o4 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o4-dynamic-children-tests-v4';
import DynamicChildrenTestsV5o5 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o5-dynamic-children-tests-v5';
import StyledComponentsWithChemistryV1o6 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o6-styled-components-with-chemistry-v1';
import DynamicChildrenTestsV6o7 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o7-dynamic-children-tests-v6';
import DynamicChildrenTestsV7o8 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o8-dynamic-children-tests-v7';
import DynamicChildrenTestsV8o9 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o9-dynamic-children-tests-v8';
import DynamicChildrenTestsV9o10 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o10-dynamic-children-tests-v9';
import DynamicChildrenTestsV10o11 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o11-dynamic-children-tests-v10';
import DynamicChildrenTestsV11o12 from '../../../../../../.claude/.conversations/claude--next-js-dynamic-component-loading-issue--efd87c1a/o12-dynamic-children-tests-v11';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {DynamicChildrenTestsV1o1()}
        {DynamicChildrenTestsV2o2()}
        {DynamicChildrenTestsV3o3()}
        {DynamicChildrenTestsV4o4()}
        {DynamicChildrenTestsV5o5()}
        {StyledComponentsWithChemistryV1o6()}
        {DynamicChildrenTestsV6o7()}
        {DynamicChildrenTestsV7o8()}
        {DynamicChildrenTestsV8o9()}
        {DynamicChildrenTestsV9o10()}
        {DynamicChildrenTestsV10o11()}
        {DynamicChildrenTestsV11o12()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
