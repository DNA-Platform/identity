import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I have a private repo in github that I would like to deploy as a npm package. I have another contractor
            working with me who I will make a guest account for in my organization so that he has admin access. I have
            an npm organization that I can use to define the package. I'd like there to be CI/CD on the github repo so
            that commits to main deploy to npm. Can you give me a clear step by step instructions on how to accomplish
            this?
        </Paragraph>
    </Chapter>
);
