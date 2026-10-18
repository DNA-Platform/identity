import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--popes-warning-on-ai-and-hidden-human-slavery--b9e26720/.cover.tsx';
import TheSynopsis from './claude--popes-warning-on-ai-and-hidden-human-slavery--b9e26720/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pope's warning on AI and hidden human slavery ]]( claude--Pope's warning on AI and hidden human slavery--b9e26720 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Pope's warning on AI and hidden human slavery ]]( claude--Pope's warning on AI and hidden human slavery--b9e26720 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
