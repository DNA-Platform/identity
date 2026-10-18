import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bitcoin-gift-tax-obligations--50948882/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoin-gift-tax-obligations--50948882/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin gift tax obligations ]]( claude--Bitcoin gift tax obligations--50948882 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Bitcoin gift tax obligations ]]( claude--Bitcoin gift tax obligations--50948882 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
