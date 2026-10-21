import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--dental-clinic-referral-gone-wrong--d7ed553b/.cover.tsx';
import TheSynopsis from './claude--dental-clinic-referral-gone-wrong--d7ed553b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[24 January 2026](2026-01-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dental clinic referral gone wrong ]]( claude--Dental clinic referral gone wrong--d7ed553b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 57 exchanges: <Means>$[[ Dental clinic referral gone wrong ]]( claude--Dental clinic referral gone wrong--d7ed553b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
