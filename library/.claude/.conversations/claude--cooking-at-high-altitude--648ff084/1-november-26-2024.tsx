import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 November 2024](2024-11-26)</Date>
        </Dated>
        <Title>[[ 26 November 2024 ]]</Title>
        <Message
            at="2024-11-26T08:49:21.110356Z"
        >
            <Origin>dfeadb6d-3f9c-41fa-8f4d-fba8793140da</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I’m at 6000 feet. Does it change cooking in any way</Paragraph>
        </Message>
        <Message
            at="2024-11-26T08:49:21.110356Z"
        >
            <Origin>46813afb-e254-4c19-a952-83b23033261e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, altitude significantly affects cooking! At 6,000 feet, you'll need to make several adjustments because
                water boils at a lower temperature (approximately 201°F/94°C instead of 212°F/100°C at sea level) and the
                air pressure is lower. Here are the main adjustments you'll need to make:
            </Paragraph>
            <Paragraph>For baking:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Increase oven temperature by 25°F</Line>
                <Line>Decrease sugar in recipes by 1-2 tablespoons per cup</Line>
                <Line>Increase liquid by 2-4 tablespoons per cup</Line>
                <Line>Decrease leavening agents (baking powder/soda) by 20-25%</Line>
                <Line>Add an extra egg or egg white to provide more structure</Line>
            </Paragraph>
            <Paragraph>For boiling/cooking liquids:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Increase cooking time by 15-25%</Line>
                <Line>Keep pots covered when possible</Line>
                <Line>Use slightly more liquid in recipes as evaporation happens faster</Line>
            </Paragraph>
            <Paragraph>For example, if you're cooking pasta:</Paragraph>
            <Paragraph>
                <List />
                <Line>Add extra water to the pot</Line>
                <Line>Expect it to take a few minutes longer to cook</Line>
                <Line>You may need to keep it at a more vigorous boil</Line>
            </Paragraph>
            <Paragraph>For things like rice and beans:</Paragraph>
            <Paragraph>
                <List />
                <Line>Plan for 25% longer cooking times</Line>
                <Line>You might need to add more liquid during cooking</Line>
            </Paragraph>
            <Paragraph>Would you like specific adjustments for any particular dishes you're planning to make?</Paragraph>
        </Message>
    </Chapter>
);
