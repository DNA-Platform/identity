import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--tethers-technical-origins-and-cryptography-mystery--42e15967/.cover.tsx';
import TheSynopsis from '../.conversations/claude--tethers-technical-origins-and-cryptography-mystery--42e15967/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tether's technical origins and cryptography mystery ]]( claude--Tether's technical origins and cryptography mystery--42e15967 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 January 2026: <Means>$[[ Tether's technical origins and cryptography mystery ]]( claude--Tether's technical origins and cryptography mystery--42e15967 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
