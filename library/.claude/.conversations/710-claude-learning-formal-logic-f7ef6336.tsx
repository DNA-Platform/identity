import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--learning-formal-logic--f7ef6336/.cover.tsx';
import TheSynopsis from './claude--learning-formal-logic--f7ef6336/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2025</Part>
        <Dated>
            <Date>[9 April 2025](2025-04-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning Formal Logic ]]( claude--Learning Formal Logic--f7ef6336 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 48 exchanges: <Means>$[[ Learning Formal Logic ]]( claude--Learning Formal Logic--f7ef6336 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
