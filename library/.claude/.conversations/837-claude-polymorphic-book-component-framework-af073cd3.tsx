import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--polymorphic-book-component-framework--af073cd3/.cover.tsx';
import TheSynopsis from './claude--polymorphic-book-component-framework--af073cd3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[15 September 2025](2025-09-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Polymorphic Book Component Framework ]]( claude--Polymorphic Book Component Framework--af073cd3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 162 exchanges: <Means>$[[ Polymorphic Book Component Framework ]]( claude--Polymorphic Book Component Framework--af073cd3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
