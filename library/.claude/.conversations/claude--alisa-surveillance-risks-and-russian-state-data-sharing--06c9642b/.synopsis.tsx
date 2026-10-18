import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged Claude in a detailed operational security assessment regarding surveillance risks associated
            with a Yandex Alisa voice assistant device in the context of a Russian family court case. The conversation
            centered on evaluating whether the device posed location disclosure risks for Ana, who had relocated from
            Russia to Georgia with her children while involved in custody proceedings at Cheremushkinsky District Court
            in Moscow against her ex-husband Maxim.
        </Paragraph>
    </Chapter>
);
