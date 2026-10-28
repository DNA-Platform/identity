import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--fefermans-extensions-of-turings-doctoral-work--a504dc68/.cover.tsx';
import TheSynopsis from './claude--fefermans-extensions-of-turings-doctoral-work--a504dc68/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Feferman's extensions of Turing's doctoral work ]]( claude--Feferman's extensions of Turing's doctoral work--a504dc68 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Feferman's extensions of Turing's doctoral work ]]( claude--Feferman's extensions of Turing's doctoral work--a504dc68 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
