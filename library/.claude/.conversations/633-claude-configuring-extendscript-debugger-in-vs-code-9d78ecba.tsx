import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
