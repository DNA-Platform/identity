import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
