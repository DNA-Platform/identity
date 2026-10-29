import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--translating-matt-levines-style-to-russian--57fa0150/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-matt-levines-style-to-russian--57fa0150/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[3 March 2026](2026-03-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating Matt Levine's style to Russian ]]( claude--Translating Matt Levine's style to Russian--57fa0150 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 March 2026: <Means>$[[ Translating Matt Levine's style to Russian ]]( claude--Translating Matt Levine's style to Russian--57fa0150 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
