import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--troubleshooting-vscode-extension-packaging--b6399323/.cover.tsx';
import TheSynopsis from './claude--troubleshooting-vscode-extension-packaging--b6399323/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2025</Part>
        <Dated>
            <Date>[19 February 2025](2025-02-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Troubleshooting VSCode Extension Packaging ]]( claude--Troubleshooting VSCode Extension Packaging--b6399323 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Troubleshooting VSCode Extension Packaging ]]( claude--Troubleshooting VSCode Extension Packaging--b6399323 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
