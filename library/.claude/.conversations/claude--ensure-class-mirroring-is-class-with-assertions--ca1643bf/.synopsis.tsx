import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            See how I have this "is" function? I want a class called Ensure, where for each method in Is, there is an
            equivalent method in Ensure that uses is to return asserts value is &#123;whatever&#125;
        </Paragraph>
    </Chapter>
);
