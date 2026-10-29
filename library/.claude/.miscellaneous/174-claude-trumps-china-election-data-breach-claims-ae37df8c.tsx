import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[17 July 2026](2026-07-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's China election data breach claims ]]( claude--Trump's China election data breach claims--ae37df8c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 July 2026: <Means>$[[ Trump's China election data breach claims ]]( claude--Trump's China election data breach claims--ae37df8c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
