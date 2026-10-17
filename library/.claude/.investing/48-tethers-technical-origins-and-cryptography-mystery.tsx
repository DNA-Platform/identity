import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/tethers-technical-origins-and-cryptography-mystery/.cover.tsx';
import TheSynopsis from '../.conversations/tethers-technical-origins-and-cryptography-mystery/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tether's technical origins and cryptography mystery ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 January 2026: <Means>$[[ Tether's technical origins and cryptography mystery ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
