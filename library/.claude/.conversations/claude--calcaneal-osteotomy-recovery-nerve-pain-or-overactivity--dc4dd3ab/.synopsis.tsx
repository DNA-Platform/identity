import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is recovering from lateral calcaneal osteotomy surgery and is currently at week 8 of recovery,
            walking with a boot and one crutch. They sought Claude's help in understanding new pain and tenderness near
            their major incision site, along with some redness, trying to determine whether these symptoms indicated
            normal nerve sensation returning or problematic overactivity during recovery. The user had recently seen
            their doctor who confirmed the bone is healing as expected but not yet fully healed, which is normal at this
            stage.
        </Paragraph>
    </Chapter>
);
