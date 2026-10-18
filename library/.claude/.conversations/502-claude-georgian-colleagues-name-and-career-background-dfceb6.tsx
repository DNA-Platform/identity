import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgian-colleagues-name-and-career-background--dfceb666/.cover.tsx';
import TheSynopsis from './claude--georgian-colleagues-name-and-career-background--dfceb666/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[19 July 2026](2026-07-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian colleague's name and career background ]]( claude--Georgian colleague's name and career background--dfceb666 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Georgian colleague's name and career background ]]( claude--Georgian colleague's name and career background--dfceb666 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
