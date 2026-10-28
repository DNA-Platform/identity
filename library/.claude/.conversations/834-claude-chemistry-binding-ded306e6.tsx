import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--chemistry-binding--ded306e6/.cover.tsx';
import TheSynopsis from './claude--chemistry-binding--ded306e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[21 September 2025](2025-09-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ $Chemistry Binding ]]( claude--$Chemistry Binding--ded306e6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 214 exchanges: <Means>$[[ $Chemistry Binding ]]( claude--$Chemistry Binding--ded306e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
