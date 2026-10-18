import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I am coding with ExtendScript. This is a TypeScript wrapper around the object model. It is broken I am
            getting this crazy PARM error when accessing the parent functon in the code below. But the execution
            platform doesn't enter the function. Could it be a problem that I am storing references on an item that
            might be deleted? Could it be something like that?
        </Paragraph>
    </Chapter>
);
