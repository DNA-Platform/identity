import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--i-need-you-to-do-some-quick-re--1dc25455/.cover.tsx';
import TheSynopsis from './claude--i-need-you-to-do-some-quick-re--1dc25455/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[4 July 2026](2026-07-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I need you to do some quick re… ]]( claude--I need you to do some quick re…--1dc25455 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ I need you to do some quick re… ]]( claude--I need you to do some quick re…--1dc25455 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
