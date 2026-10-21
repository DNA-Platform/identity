import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-25T18:51:44.465352Z"
        >
            <Origin>019e607a-99cb-7c9c-b4c4-75e3a9c2e20b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do i log out of this iphone app?!</Paragraph>
        </Message>
        <Message
            at="2026-05-25T18:51:49.944044Z"
        >
            <Origin>019e607a-99cd-7daa-a487-8915c5a647b8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “how to log out of Claude iPhone app”</Action>
            <Paragraph>Tap your initials in the upper right corner, then select "Log Out" from the menu.</Paragraph>
        </Message>
    </Chapter>
);
