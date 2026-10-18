import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.cover.tsx';
import TheSynopsis from '../.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Haircut instructions in Georgian and English ]]( claude--Haircut instructions in Georgian and English--777fc626 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 August 2026: <Means>$[[ Haircut instructions in Georgian and English ]]( claude--Haircut instructions in Georgian and English--777fc626 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
