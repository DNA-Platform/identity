import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--polymorphic-book-component-framework--af073cd3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--polymorphic-book-component-framework--af073cd3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Polymorphic Book Component Framework ]]( claude--Polymorphic Book Component Framework--af073cd3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 September 2025: <Means>$[[ Polymorphic Book Component Framework ]]( claude--Polymorphic Book Component Framework--af073cd3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
