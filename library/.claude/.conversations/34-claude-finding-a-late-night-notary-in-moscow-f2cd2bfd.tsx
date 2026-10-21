import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--finding-a-late-night-notary-in-moscow--f2cd2bfd/.cover.tsx';
import TheSynopsis from './claude--finding-a-late-night-notary-in-moscow--f2cd2bfd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding a late-night notary in Moscow ]]( claude--Finding a late-night notary in Moscow--f2cd2bfd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Finding a late-night notary in Moscow ]]( claude--Finding a late-night notary in Moscow--f2cd2bfd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
