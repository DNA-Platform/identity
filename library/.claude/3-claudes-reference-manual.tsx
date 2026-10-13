import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.manual/.cover.tsx';
import TheSynopsis from './.manual/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[14 October 2026](2026-10-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claudes Reference Manual ]]</Title>
        <Paragraph>
            <Caption />
            The words a message of Claude's is made of: <Means>$[[ Claudes Reference Manual ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
