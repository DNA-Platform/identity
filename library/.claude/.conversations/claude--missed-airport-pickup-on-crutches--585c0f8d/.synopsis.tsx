import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user contacted Claude from Istanbul Airport facing an urgent travel situation. They were waiting for
            special assistance transportation to their connecting flight but had been left waiting without pickup,
            creating time pressure as their flight was already boarding. The user needed immediate, actionable contact
            information to resolve the situation quickly. Claude provided specific phone numbers for Istanbul Airport's
            special assistance services, including the main airport information line (+90 212 465 3000) and HAVAŞ ground
            services hotline (444 1 442), along with instructions to request special assistance or handicap services.
            Claude also suggested alternative approaches like flagging down airport staff or finding information desk
            personnel who could radio for immediate assistance. The response emphasized urgency and provided multiple
            backup options rather than waiting passively, while also asking for clarifying details about terminal
            location and connection type to better assess whether passport control was actually required.
        </Paragraph>
    </Chapter>
);
