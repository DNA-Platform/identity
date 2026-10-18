import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I write illustrator scripts in TypeScript targeting ES5 and using types for adobe, but I wrote a custom
            little compiler that converts to jsx. Even though I am using TypeScript, and it supports classes and can
            compile them to ES3, I still don't have access to object and array methods. Instead I have created classes
            like A&lt;T initialized with f(array) and Str initialized with str("string") and various other things to
            help. Process this framework and try to understand it
        </Paragraph>
    </Chapter>
);
