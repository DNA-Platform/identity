import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--online-identity-compromise-and-data-breach-risks--9f679ede/.cover.tsx';
import TheSynopsis from './claude--online-identity-compromise-and-data-breach-risks--9f679ede/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Online identity compromise and data breach risks ]]( claude--Online identity compromise and data breach risks--9f679ede )</Title>
        <Paragraph>
            <Caption />
            A conversation, 54 exchanges: <Means>$[[ Online identity compromise and data breach risks ]]( claude--Online identity compromise and data breach risks--9f679ede )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
