import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Glucose substitute for veterinary antibiotic injection ]]( claude--Glucose substitute for veterinary antibiotic injection--1dba50eb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 August 2026: <Means>$[[ Glucose substitute for veterinary antibiotic injection ]]( claude--Glucose substitute for veterinary antibiotic injection--1dba50eb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
