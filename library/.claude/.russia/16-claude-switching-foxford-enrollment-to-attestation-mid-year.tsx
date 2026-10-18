import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[28 January 2026](2026-01-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Switching Foxford enrollment to attestation mid-year ]]( claude--Switching Foxford enrollment to attestation mid-year--040113a8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ Switching Foxford enrollment to attestation mid-year ]]( claude--Switching Foxford enrollment to attestation mid-year--040113a8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
