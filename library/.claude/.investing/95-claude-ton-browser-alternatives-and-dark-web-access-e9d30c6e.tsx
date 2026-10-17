import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON browser alternatives and dark web access ]]( claude--TON browser alternatives and dark web access--e9d30c6e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ TON browser alternatives and dark web access ]]( claude--TON browser alternatives and dark web access--e9d30c6e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
