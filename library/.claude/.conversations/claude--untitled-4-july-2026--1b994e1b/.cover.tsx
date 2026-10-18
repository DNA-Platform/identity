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
            <Participant>$[[ Claude ]]( Dougs Claude )</Participant>
        </Participants>
        <Period
            from="2026-07-04T20:22:38.166366Z"
            to="2026-07-04T20:54:43.356645Z"
        />
        <Messages
            shown="10"
            all="10"
        />
        <Title>[[ Untitled, 4 July 2026 ]]( claude--Untitled, 4 July 2026--1b994e1b )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>1b994e1b-5560-4452-959b-789583d6c5a3</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
