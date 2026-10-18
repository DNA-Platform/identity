import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translating-matt-levines-style-to-russian--57fa0150/.cover.tsx';
import TheSynopsis from './claude--translating-matt-levines-style-to-russian--57fa0150/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[3 March 2026](2026-03-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating Matt Levine's style to Russian ]]( claude--Translating Matt Levine's style to Russian--57fa0150 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Translating Matt Levine's style to Russian ]]( claude--Translating Matt Levine's style to Russian--57fa0150 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
