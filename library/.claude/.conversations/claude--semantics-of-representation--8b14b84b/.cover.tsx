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
            from="2026-09-10T21:16:16.926299Z"
            to="2026-09-11T15:43:44.638273Z"
        />
        <Messages
            shown="64"
            all="78"
        />
        <Title>[[ Semantics of Representation ]]( claude--Semantics of Representation--8b14b84b )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>8b14b84b-bfa7-4264-af28-ae3974cf3640</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
