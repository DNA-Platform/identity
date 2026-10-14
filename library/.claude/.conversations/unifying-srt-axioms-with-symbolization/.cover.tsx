import { Author, Chapter, Cover, Subject, Title } from '@dna-platform/public';
import { Messages, Participant, Participants, Period, Scheme } from '../../../.manual/.book';
import { Project } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Cover />
        <Scheme
            ground="#eff1f6"
            band="#c0c9df"
            bandInk="#2a3a63"
            foot="#8e9fc8"
            footInk="#1f2d50"
            ink="#2a3a63"
        />
        <Participants>
            <Participant>$[[ Doug ]]( Dougs Story )</Participant>
            <Participant>$[[ Claude ]]( Dougs Claude )</Participant>
        </Participants>
        <Period
            from="2026-05-31T13:35:13.667621Z"
            to="2026-06-03T20:52:28.667864Z"
        />
        <Messages
            shown="401"
            all="449"
        />
        <Title>[[ Unifying SRT axioms with symbolization ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]</Project>
    </Chapter>
);
