import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--russian-keyboard-stickers-in-tbilisi--2e947e7f/.cover.tsx';
import TheSynopsis from './claude--russian-keyboard-stickers-in-tbilisi--2e947e7f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian keyboard stickers in Tbilisi ]]( claude--Russian keyboard stickers in Tbilisi--2e947e7f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Russian keyboard stickers in Tbilisi ]]( claude--Russian keyboard stickers in Tbilisi--2e947e7f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
