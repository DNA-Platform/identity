import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--indias-independence-from-british-rule--909419de/.cover.tsx';
import TheSynopsis from './claude--indias-independence-from-british-rule--909419de/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ India's independence from British rule ]]( claude--India's independence from British rule--909419de )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ India's independence from British rule ]]( claude--India's independence from British rule--909419de )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
