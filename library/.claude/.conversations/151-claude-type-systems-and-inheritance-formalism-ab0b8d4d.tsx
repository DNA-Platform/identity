import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--type-systems-and-inheritance-formalism--ab0b8d4d/.cover.tsx';
import TheSynopsis from './claude--type-systems-and-inheritance-formalism--ab0b8d4d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[9 February 2026](2026-02-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Type systems and inheritance formalism ]]( claude--Type systems and inheritance formalism--ab0b8d4d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 65 exchanges: <Means>$[[ Type systems and inheritance formalism ]]( claude--Type systems and inheritance formalism--ab0b8d4d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
