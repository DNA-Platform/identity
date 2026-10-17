import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/bitcoin-gift-tax-obligations/.cover.tsx';
import TheSynopsis from '../.conversations/bitcoin-gift-tax-obligations/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin gift tax obligations ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Bitcoin gift tax obligations ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
