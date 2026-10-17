import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Messages, Participant, Participants, Period, Scheme, Volume, Window } from '../../../.manual/.book';
import { Account, Origin, Project } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#eff1f6"
            band="#c0c9df"
            bandInk="#2a3a63"
            foot="#8e9fc8"
            footInk="#1f2d50"
            ink="#2a3a63"
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
            from="2026-07-16T17:40:19.954599Z"
            to="2026-07-19T01:39:50.393154Z"
        />
        <Messages
            shown="141"
            all="229"
        />
        <Title>[[ The Semantics of Books ]]( claude--The Semantics of Books--8dbb8e2b )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>8dbb8e2b-d4c8-413e-aba0-45b382969754</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
