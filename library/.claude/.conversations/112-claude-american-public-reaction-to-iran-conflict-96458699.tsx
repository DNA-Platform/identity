import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--american-public-reaction-to-iran-conflict--96458699/.cover.tsx';
import TheSynopsis from './claude--american-public-reaction-to-iran-conflict--96458699/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[31 March 2026](2026-03-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ American public reaction to Iran conflict ]]( claude--American public reaction to Iran conflict--96458699 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ American public reaction to Iran conflict ]]( claude--American public reaction to Iran conflict--96458699 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
