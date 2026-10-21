import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/.cover.tsx';
import TheSynopsis from './claude--troubleshooting-a-vscode-extension-for-svg-interaction--cad4ab05/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2025</Part>
        <Dated>
            <Date>[16 February 2025](2025-02-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Troubleshooting a VSCode Extension for SVG Interaction ]]( claude--Troubleshooting a VSCode Extension for SVG Interaction--cad4ab05 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 88 exchanges: <Means>$[[ Troubleshooting a VSCode Extension for SVG Interaction ]]( claude--Troubleshooting a VSCode Extension for SVG Interaction--cad4ab05 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
