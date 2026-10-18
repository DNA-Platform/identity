import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--matt-gaetz-republican-congressman-from-florida--0e223450/.cover.tsx';
import TheSynopsis from './claude--matt-gaetz-republican-congressman-from-florida--0e223450/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[14 November 2024](2024-11-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Matt Gaetz: Republican Congressman from Florida ]]( claude--Matt Gaetz: Republican Congressman from Florida--0e223450 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Matt Gaetz: Republican Congressman from Florida ]]( claude--Matt Gaetz: Republican Congressman from Florida--0e223450 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
