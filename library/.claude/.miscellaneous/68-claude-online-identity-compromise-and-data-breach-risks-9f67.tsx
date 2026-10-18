import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.cover.tsx';
import TheSynopsis from '../.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Online identity compromise and data breach risks ]]( claude--Online identity compromise and data breach risks--9f679ede )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Online identity compromise and data breach risks ]]( claude--Online identity compromise and data breach risks--9f679ede )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
