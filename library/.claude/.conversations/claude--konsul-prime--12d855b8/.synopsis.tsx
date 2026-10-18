import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Anastasia (Красавина Анастасия Юрьевна, previously Savchenko) sought legal analysis regarding a Russian
            court decision governing her ex-husband Maxim's contact schedule with their two children (daughter around
            11, son around 9), after Maxim threatened to involve bailiffs over unmet holiday visitation terms following
            their custody dispute. Claude reviewed the court decision text, Russian Family Code provisions, enforcement
            procedures under federal law 229-FZ, and administrative penalty provisions (КоАП 5.35), finding that most
            holiday provisions (autumn, winter, spring, holidays) explicitly require considering the children's wishes,
            while only the 14-day summer vacation lacks this explicit carve-out (though the decision's reasoning section
            states Maxim's rights cannot be exercised against the children's will). Claude researched realistic
            timelines for bailiff enforcement, exit bans under Article 67 of the enforcement law, and the relationship
            between administrative fines and travel restrictions, concluding that fines (КоАП 5.35, up to 5,000 rubles)
            and exit bans are independent remedies—paying a fine does not lift a ban, only compliance or mutual
            agreement does. Anastasia provided a real-world benchmark (a prior alimony enforcement case where a ban
            appeared roughly a month after case initiation), which led Claude to revise its timeline estimate toward a
            longer window before a likely ban, given the current case involves non-monetary obligations requiring the
            bailiff to establish fault.
        </Paragraph>
    </Chapter>
);
