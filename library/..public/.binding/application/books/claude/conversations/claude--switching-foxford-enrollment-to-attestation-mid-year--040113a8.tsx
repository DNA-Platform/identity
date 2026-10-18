import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.table';
import January2820261 from '../../../../../../.claude/.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/1-january-28-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
