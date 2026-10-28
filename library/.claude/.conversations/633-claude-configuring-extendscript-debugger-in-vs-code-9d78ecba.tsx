import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--configuring-extendscript-debugger-in-vs-code--9d78ecba/.cover.tsx';
import TheSynopsis from './claude--configuring-extendscript-debugger-in-vs-code--9d78ecba/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2025</Part>
        <Dated>
            <Date>[7 February 2025](2025-02-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Configuring ExtendScript Debugger in VS Code ]]( claude--Configuring ExtendScript Debugger in VS Code--9d78ecba )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Configuring ExtendScript Debugger in VS Code ]]( claude--Configuring ExtendScript Debugger in VS Code--9d78ecba )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
