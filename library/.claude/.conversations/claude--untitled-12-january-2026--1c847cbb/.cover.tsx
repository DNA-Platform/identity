import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Messages, Participant, Participants, Period, Scheme, Volume, Window } from '../../../.manual/.book';
import { Account, Origin } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#f3f0f8"
            band="#c9bfe3"
            bandInk="#3a2d63"
            foot="#8f7fc0"
            footInk="#2e2350"
            ink="#3a2d63"
        />
        <Window
            x="-32"
            y="-26"
        />
        <Participants>
            <Participant>$[[ Doug ]]( Dougs Story )</Participant>
        </Participants>
        <Period
            from="2026-01-12T18:04:19.312562Z"
            to="2026-01-12T18:04:19.312562Z"
        />
        <Messages
            shown="1"
            all="1"
        />
        <Title>[[ Untitled, 12 January 2026 ]]( claude--Untitled, 12 January 2026--1c847cbb )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>1c847cbb-d1bf-4c11-8e1d-fea5e678c275</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
