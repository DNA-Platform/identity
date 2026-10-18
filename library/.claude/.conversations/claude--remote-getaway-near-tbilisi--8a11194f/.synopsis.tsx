import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is planning a low-key vacation in Georgia with his travel companion Ana, based out of Tbilisi. The
            conversation focused on finding a secluded getaway within reasonable driving distance of Tbilisi, with the
            key requirement being a remote-feeling place to stay with a beautiful view — not remote in terms of distance
            from Tbilisi, but remote in character at the accommodation itself. Doug clarified this distinction partway
            through the conversation after Claude initially focused on logistics of reaching remote areas, which shifted
            the recommendations meaningfully.
        </Paragraph>
    </Chapter>
);
