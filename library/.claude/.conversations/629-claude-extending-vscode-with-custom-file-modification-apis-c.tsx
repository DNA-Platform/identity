import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--extending-vscode-with-custom-file-modification-apis--c29707c0/.cover.tsx';
import TheSynopsis from './claude--extending-vscode-with-custom-file-modification-apis--c29707c0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2025</Part>
        <Dated>
            <Date>[20 February 2025](2025-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Extending VSCode with Custom File Modification APIs ]]( claude--Extending VSCode with Custom File Modification APIs--c29707c0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 108 exchanges: <Means>$[[ Extending VSCode with Custom File Modification APIs ]]( claude--Extending VSCode with Custom File Modification APIs--c29707c0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
