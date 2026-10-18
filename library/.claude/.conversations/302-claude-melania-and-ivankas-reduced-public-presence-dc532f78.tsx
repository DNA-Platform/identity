import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--melania-and-ivankas-reduced-public-presence--dc532f78/.cover.tsx';
import TheSynopsis from './claude--melania-and-ivankas-reduced-public-presence--dc532f78/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[2 April 2026](2026-04-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Melania and Ivanka's reduced public presence ]]( claude--Melania and Ivanka's reduced public presence--dc532f78 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Melania and Ivanka's reduced public presence ]]( claude--Melania and Ivanka's reduced public presence--dc532f78 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
