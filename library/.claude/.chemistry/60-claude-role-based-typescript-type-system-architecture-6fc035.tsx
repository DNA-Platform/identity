import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--role-based-typescript-type-system-architecture--6fc035ef/.cover.tsx';
import TheSynopsis from '../.conversations/claude--role-based-typescript-type-system-architecture--6fc035ef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Role-based TypeScript type system architecture ]]( claude--Role-based TypeScript type system architecture--6fc035ef )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 November 2025: <Means>$[[ Role-based TypeScript type system architecture ]]( claude--Role-based TypeScript type system architecture--6fc035ef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
