import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.book';
import Cover from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/.table';
import June2520261 from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/1-june-25-2026';
import June2620262 from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/2-june-26-2026';
import June3020263 from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/3-june-30-2026';
import July120264 from '../../../../../../.claude/.conversations/claude--amazon-package-forwarding-to-georgia--0db0ae88/4-july-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2520261()}
        {June2620262()}
        {June3020263()}
        {July120264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
