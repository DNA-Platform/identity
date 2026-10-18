import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude about the Tesla Roadster "flying car" demo that occurred on October 15, wanting to
            know how much was hype, whether it had practical use, and its likely cost. Claude searched for recent
            coverage and explained that the reveal event (held near a SpaceX test site in McGregor, Texas) featured a
            Tesla driving up a ramp, flipping, and hovering briefly using compressed-air thrusters, similar technology
            to that used in Falcon 9 booster landings. Claude broke down the three announced trims (Performance, Thrust,
            and Rocket), noted that only the Rocket version has the flight hardware and is invite-only/not road-legal,
            and did a rough physics estimate showing the hover capability is limited to seconds, not practical flight.
            Claude also covered reservation pricing ($50k for Performance, $250k for Thrust) and Musk's stated 2028
            production target, flagging the car's history of missed deadlines since 2020.
        </Paragraph>
    </Chapter>
);
