import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--illustrator-scripting--08ef93ab/.cover.tsx';
import TheSynopsis from './claude--illustrator-scripting--08ef93ab/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[23 November 2024](2024-11-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Illustrator Scripting ]]( claude--Illustrator Scripting--08ef93ab )</Title>
        <Paragraph>
            <Caption />
            A conversation, 72 exchanges: <Means>$[[ Illustrator Scripting ]]( claude--Illustrator Scripting--08ef93ab )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
