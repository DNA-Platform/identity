import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.cover.tsx';
import TheSynopsis from '../.conversations/uae-as-crypto-fiat-bridge-for-telegrams-digital-ecosystem/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ UAE as crypto-fiat bridge for Telegram's digital ecosystem ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
