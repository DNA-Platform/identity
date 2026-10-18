import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--trump-and-the-epstein-files-mystery--122879af/.cover.tsx';
import TheSynopsis from './claude--trump-and-the-epstein-files-mystery--122879af/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[13 April 2026](2026-04-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump and the Epstein files mystery ]]( claude--Trump and the Epstein files mystery--122879af )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Trump and the Epstein files mystery ]]( claude--Trump and the Epstein files mystery--122879af )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
