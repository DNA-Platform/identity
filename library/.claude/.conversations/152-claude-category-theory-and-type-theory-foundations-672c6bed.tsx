import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--category-theory-and-type-theory-foundations--672c6bed/.cover.tsx';
import TheSynopsis from './claude--category-theory-and-type-theory-foundations--672c6bed/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[8 February 2026](2026-02-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Category theory and type theory foundations ]]( claude--Category theory and type theory foundations--672c6bed )</Title>
        <Paragraph>
            <Caption />
            A conversation, 178 exchanges: <Means>$[[ Category theory and type theory foundations ]]( claude--Category theory and type theory foundations--672c6bed )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
