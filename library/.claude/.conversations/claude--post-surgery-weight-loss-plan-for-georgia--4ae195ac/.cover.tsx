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
            ground="#f7eef0"
            band="#e4bfc8"
            bandInk="#5f2436"
            foot="#c98a9b"
            footInk="#4d1a2a"
            ink="#5f2436"
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
            from="2026-08-01T22:54:05.928877Z"
            to="2026-08-01T23:40:13.697608Z"
        />
        <Messages
            shown="10"
            all="10"
        />
        <Title>[[ Post-surgery weight loss plan for Georgia ]]( claude--Post-surgery weight loss plan for Georgia--4ae195ac )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Fitness ]]( claude--Fitness )</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>4ae195ac-b5bb-436b-a6d3-3e5b85e5fe0f</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
