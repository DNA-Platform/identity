import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dental-clinic-referral-gone-wrong--d7ed553b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
