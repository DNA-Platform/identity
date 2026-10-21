import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 November 2024](2024-11-09)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-09T20:48:13.060222Z"
        >
            <Origin>ece645d1-0bc2-4f17-bd2b-afc9a8e6e6a9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is tom cruz a prototype for aladdin in the movie</Paragraph>
        </Message>
        <Message
            at="2024-11-09T20:48:13.060222Z"
        >
            <Origin>01fe8a68-fa2f-4b72-a8e5-bfd862012cc1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I aim to be historically accurate - there appears to be a misunderstanding here. The character of Aladdin in
                Disney's 1992 animated film was not based on Tom Cruise. The animators actually used actor Tom Cruise's
                contemporaries as inspiration - specifically Scott Weinger (who voiced Aladdin) and Michael J. Fox. The
                supervising animator Glen Keane has stated that he drew inspiration from these actors for Aladdin's
                appearance and movements, wanting to capture a youthful, energetic quality.
            </Paragraph>
            <Paragraph>
                The facial features and design were meant to reflect what the animators called a "teen heartthrob" look that
                was popular in the early 1990s, which may be why some people see a resemblance to various actors of that
                era, including Tom Cruise.
            </Paragraph>
        </Message>
    </Chapter>
);
