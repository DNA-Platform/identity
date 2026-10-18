import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged Claude in an extensive collaborative process to develop a comprehensive framework for
            conducting market research experiments, culminating in two polished documents: "Definition of Experiment"
            and a user story demonstrating the framework in action. The conversation began with Doug sharing his vision
            for a systematic approach to market research that would leverage both his observational capabilities and
            Claude's text processing abilities. Through iterative refinement across multiple versions, they developed a
            framework based on three experimental "characters" (Survey, Probe, Test) positioned along an
            exploration-confirmation axis, with Survey requiring maximum experimentalist judgment, Probe requiring
            moderate judgment, and Test designed to minimize judgment through statistical-like procedures.
        </Paragraph>
    </Chapter>
);
