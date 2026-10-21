import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--iphone-app-logout-instructions--1bb2f9fd/.cover.tsx';
import TheSynopsis from './claude--iphone-app-logout-instructions--1bb2f9fd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ iPhone app logout instructions ]]( claude--iPhone app logout instructions--1bb2f9fd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ iPhone app logout instructions ]]( claude--iPhone app logout instructions--1bb2f9fd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
