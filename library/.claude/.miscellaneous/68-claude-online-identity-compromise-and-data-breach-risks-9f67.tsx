import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.cover.tsx';
import TheSynopsis from '../.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Online identity compromise and data breach risks ]]( claude--Online identity compromise and data breach risks--9f679ede )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Online identity compromise and data breach risks ]]( claude--Online identity compromise and data breach risks--9f679ede )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
