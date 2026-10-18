import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested help writing a TypeScript method after asking Claude to first read their chemistry.ts
            file to understand their coding style. The task involved creating a method that walks up a prototype chain
            starting from Object.getPrototypeOf(chemical), collecting property names from each prototype until reaching
            (but excluding) one called $Chemistry. The method needed to return a Set of unique string property names.
        </Paragraph>
    </Chapter>
);
