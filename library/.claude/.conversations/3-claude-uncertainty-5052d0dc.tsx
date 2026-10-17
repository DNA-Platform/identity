import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--uncertainty--5052d0dc/.cover.tsx';
import TheSynopsis from './claude--uncertainty--5052d0dc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Uncertainty ]]( claude--Uncertainty--5052d0dc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 78 exchanges: <Means>$[[ Uncertainty ]]( claude--Uncertainty--5052d0dc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
