import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            My friend Ana is a freelancer. She is overwhelmed with work. She is both popular, but has trouble estimating
            the amount of time projects will take, and thus how much she should charge. I’d like to cone up with a
            system which factors in things like how much she enjoys doing something, how long it took and how much she
            charged - I’m imagining a google doc that I write custom code for if needed - and it computes how much she
            should have charged. But it’s tricky. We need to know delivery speed - she could charge more for fast
            deliver, charge more for things she enjoys less - but we need a sense of her work week. Let’s say we want
            her to work 30 hours a week and we assume that’s all she has. What columns do we need to give Ana a sense
            for what she should charge when she enters in the amount of time she thinks it will take and how much she
            enjoys it? We would need a sense of her recent prediction accuracy, and the amount of time she has available
            somehow
        </Paragraph>
    </Chapter>
);
