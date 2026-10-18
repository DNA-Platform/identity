import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dental clinic referral gone wrong ]]( claude--Dental clinic referral gone wrong--d7ed553b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 January 2026: <Means>$[[ Dental clinic referral gone wrong ]]( claude--Dental clinic referral gone wrong--d7ed553b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
