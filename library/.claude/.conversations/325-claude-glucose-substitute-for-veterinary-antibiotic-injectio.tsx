import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.cover.tsx';
import TheSynopsis from './claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[28 August 2026](2026-08-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Glucose substitute for veterinary antibiotic injection ]]( claude--Glucose substitute for veterinary antibiotic injection--1dba50eb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ Glucose substitute for veterinary antibiotic injection ]]( claude--Glucose substitute for veterinary antibiotic injection--1dba50eb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
