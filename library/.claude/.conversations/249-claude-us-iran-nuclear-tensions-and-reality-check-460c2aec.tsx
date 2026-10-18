import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.cover.tsx';
import TheSynopsis from './claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ US-Iran nuclear tensions and reality check ]]( claude--US-Iran nuclear tensions and reality check--460c2aec )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ US-Iran nuclear tensions and reality check ]]( claude--US-Iran nuclear tensions and reality check--460c2aec )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
