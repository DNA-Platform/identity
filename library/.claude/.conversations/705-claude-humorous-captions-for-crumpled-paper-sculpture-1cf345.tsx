import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--humorous-captions-for-crumpled-paper-sculpture--1cf34555/.cover.tsx';
import TheSynopsis from './claude--humorous-captions-for-crumpled-paper-sculpture--1cf34555/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2024</Part>
        <Dated>
            <Date>[25 October 2024](2024-10-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Humorous Captions for Crumpled Paper Sculpture ]]( claude--Humorous Captions for Crumpled Paper Sculpture--1cf34555 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Humorous Captions for Crumpled Paper Sculpture ]]( claude--Humorous Captions for Crumpled Paper Sculpture--1cf34555 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
