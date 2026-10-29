import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[28 August 2026](2026-08-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Glucose substitute for veterinary antibiotic injection ]]( claude--Glucose substitute for veterinary antibiotic injection--1dba50eb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 August 2026: <Means>$[[ Glucose substitute for veterinary antibiotic injection ]]( claude--Glucose substitute for veterinary antibiotic injection--1dba50eb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
