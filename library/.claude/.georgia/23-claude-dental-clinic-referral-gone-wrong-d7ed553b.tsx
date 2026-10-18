import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[23 January 2026](2026-01-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dental clinic referral gone wrong ]]( claude--Dental clinic referral gone wrong--d7ed553b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 January 2026: <Means>$[[ Dental clinic referral gone wrong ]]( claude--Dental clinic referral gone wrong--d7ed553b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
