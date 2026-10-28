import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/.cover.tsx';
import TheSynopsis from './claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[21 November 2024](2024-11-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Automating Illustrator Tasks with TypeScript Plugins ]]( claude--Automating Illustrator Tasks with TypeScript Plugins--ff7a7be0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 354 exchanges: <Means>$[[ Automating Illustrator Tasks with TypeScript Plugins ]]( claude--Automating Illustrator Tasks with TypeScript Plugins--ff7a7be0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
