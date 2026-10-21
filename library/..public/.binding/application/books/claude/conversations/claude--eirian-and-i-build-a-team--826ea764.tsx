import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-i-build-a-team--826ea764/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-i-build-a-team--826ea764/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-i-build-a-team--826ea764/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-i-build-a-team--826ea764/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--eirian-and-i-build-a-team--826ea764/1-conversation';
import UpworkJobPostingAcademicProjectCoordinatorForConsciouo1 from '../../../../../../.claude/.conversations/claude--eirian-and-i-build-a-team--826ea764/o1-upwork-job-posting-academic-project-coordinator-for-consciou';
import AcademicResearchCoordinatorNeurosciencePublicationsV2o2 from '../../../../../../.claude/.conversations/claude--eirian-and-i-build-a-team--826ea764/o2-academic-research-coordinator-neuroscience-publications-v2';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {UpworkJobPostingAcademicProjectCoordinatorForConsciouo1()}
        {AcademicResearchCoordinatorNeurosciencePublicationsV2o2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
