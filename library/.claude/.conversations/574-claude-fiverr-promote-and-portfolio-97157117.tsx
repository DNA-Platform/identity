import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--fiverr-promote-and-portfolio--97157117/.cover.tsx';
import TheSynopsis from './claude--fiverr-promote-and-portfolio--97157117/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fiverr promote and Portfolio ]]( claude--Fiverr promote and Portfolio--97157117 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 108 exchanges: <Means>$[[ Fiverr promote and Portfolio ]]( claude--Fiverr promote and Portfolio--97157117 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
