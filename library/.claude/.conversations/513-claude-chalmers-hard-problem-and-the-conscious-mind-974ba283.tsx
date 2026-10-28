import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--chalmers-hard-problem-and-the-conscious-mind--974ba283/.cover.tsx';
import TheSynopsis from './claude--chalmers-hard-problem-and-the-conscious-mind--974ba283/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[29 March 2026](2026-03-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chalmers' hard problem and the conscious mind ]]( claude--Chalmers' hard problem and the conscious mind--974ba283 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Chalmers' hard problem and the conscious mind ]]( claude--Chalmers' hard problem and the conscious mind--974ba283 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
