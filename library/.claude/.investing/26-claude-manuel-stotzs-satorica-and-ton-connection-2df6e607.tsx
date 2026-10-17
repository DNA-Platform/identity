import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--manuel-stotzs-satorica-and-ton-connection--2df6e607/.cover.tsx';
import TheSynopsis from '../.conversations/claude--manuel-stotzs-satorica-and-ton-connection--2df6e607/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Manuel Stotz's Satorica and TON connection ]]( claude--Manuel Stotz's Satorica and TON connection--2df6e607 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Manuel Stotz's Satorica and TON connection ]]( claude--Manuel Stotz's Satorica and TON connection--2df6e607 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
