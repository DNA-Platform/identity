import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.cover.tsx';
import TheSynopsis from './claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[30 April 2026](2026-04-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Building and practicing a personal vocabulary ]]( claude--Building and practicing a personal vocabulary--2fb9debb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Building and practicing a personal vocabulary ]]( claude--Building and practicing a personal vocabulary--2fb9debb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
