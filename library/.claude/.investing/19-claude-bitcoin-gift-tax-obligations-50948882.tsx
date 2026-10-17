import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bitcoin-gift-tax-obligations--50948882/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoin-gift-tax-obligations--50948882/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin gift tax obligations ]]( claude--Bitcoin gift tax obligations--50948882 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Bitcoin gift tax obligations ]]( claude--Bitcoin gift tax obligations--50948882 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
