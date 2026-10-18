import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--switching-foxford-enrollment-to-attestation-mid-year--040113a8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Switching Foxford enrollment to attestation mid-year ]]( claude--Switching Foxford enrollment to attestation mid-year--040113a8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ Switching Foxford enrollment to attestation mid-year ]]( claude--Switching Foxford enrollment to attestation mid-year--040113a8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
