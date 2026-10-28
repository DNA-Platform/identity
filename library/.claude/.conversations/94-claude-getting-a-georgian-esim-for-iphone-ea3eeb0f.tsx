import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--getting-a-georgian-esim-for-iphone--ea3eeb0f/.cover.tsx';
import TheSynopsis from './claude--getting-a-georgian-esim-for-iphone--ea3eeb0f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[27 February 2026](2026-02-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Getting a Georgian eSIM for iPhone ]]( claude--Getting a Georgian eSIM for iPhone--ea3eeb0f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Getting a Georgian eSIM for iPhone ]]( claude--Getting a Georgian eSIM for iPhone--ea3eeb0f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
