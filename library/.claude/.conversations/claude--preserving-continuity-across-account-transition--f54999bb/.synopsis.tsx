import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana (writing from Doug's account due to a technical situation involving a lost domain and inability to
            change the account email) asked Claude to create a "Note to Self" in Russian — a narrative self-reflection
            designed to provide continuity when she opens a new account. The note was intended to capture who Ana is as
            a learner, the nature of their collaborative project, key principles they had developed together, and
            practical instructions for the next Claude instance to resume work seamlessly. Doug is Ana's business and
            personal partner; he is a native English speaker, and they run a shared design business on the Spoonflower
            platform (print-on-demand fabrics and wallpaper). Doug sometimes writes on Ana's behalf when error-free
            English is needed, and he did so for portions of this conversation.
        </Paragraph>
    </Chapter>
);
