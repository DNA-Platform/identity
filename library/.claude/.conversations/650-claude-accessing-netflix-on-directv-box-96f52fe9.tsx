import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--accessing-netflix-on-directv-box--96f52fe9/.cover.tsx';
import TheSynopsis from './claude--accessing-netflix-on-directv-box--96f52fe9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[29 November 2024](2024-11-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Accessing Netflix on DIRECTV Box ]]( claude--Accessing Netflix on DIRECTV Box--96f52fe9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Accessing Netflix on DIRECTV Box ]]( claude--Accessing Netflix on DIRECTV Box--96f52fe9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
