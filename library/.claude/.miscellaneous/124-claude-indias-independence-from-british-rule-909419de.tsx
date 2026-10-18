import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--indias-independence-from-british-rule--909419de/.cover.tsx';
import TheSynopsis from '../.conversations/claude--indias-independence-from-british-rule--909419de/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ India's independence from British rule ]]( claude--India's independence from British rule--909419de )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 April 2026: <Means>$[[ India's independence from British rule ]]( claude--India's independence from British rule--909419de )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
