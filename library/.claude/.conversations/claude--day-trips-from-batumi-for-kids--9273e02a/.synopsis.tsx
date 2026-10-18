import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is planning a family day trip from Batumi, Georgia with two children and needed help identifying
            destinations roughly an hour's drive away that would require a car rather than a cab. They are
            self-described beach people. Claude recommended three clustered attractions in the Shekvetili area (~45-50
            km north of Batumi): the Shekvetili Dendrological Park, the magnetic black-sand beach at Shekvetili/Ureki,
            and the Tsitsinatela amusement park.
        </Paragraph>
    </Chapter>
);
