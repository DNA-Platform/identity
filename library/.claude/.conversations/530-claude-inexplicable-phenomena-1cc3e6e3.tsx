import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--inexplicable-phenomena--1cc3e6e3/.cover.tsx';
import TheSynopsis from './claude--inexplicable-phenomena--1cc3e6e3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[13 July 2026](2026-07-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Inexplicable Phenomena ]]( claude--Inexplicable Phenomena--1cc3e6e3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 43 exchanges: <Means>$[[ Inexplicable Phenomena ]]( claude--Inexplicable Phenomena--1cc3e6e3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
