import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 November 2024](2024-11-06)</Date>
        </Dated>
        <Title>[[ 6 November 2024 ]]</Title>
        <Message
            at="2024-11-06T23:50:49.236304Z"
        >
            <Origin>1d17b416-d3f3-47c1-860c-e30b7fe83cb6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do I need a lawyer to navigate the SSDI application?</Paragraph>
        </Message>
        <Message
            at="2024-11-06T23:50:49.236304Z"
        >
            <Origin>c3d1fa8d-3431-4dcd-8b76-ecf548e430ca</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                While you don't legally require a lawyer for Social Security Disability Insurance (SSDI) applications,
                here's what you should consider:
            </Paragraph>
            <Paragraph>Without a lawyer:</Paragraph>
            <Paragraph>
                <List />
                <Line>You can complete the initial application yourself online, by phone, or in person</Line>
                <Line>The process is designed to be accessible to individuals</Line>
                <Line>It's free to apply on your own</Line>
                <Line>SSA representatives can answer basic questions</Line>
            </Paragraph>
            <Paragraph>Reasons to consider a lawyer:</Paragraph>
            <Paragraph>
                <List />
                <Line>Initial applications have a high denial rate (around 65%)</Line>
                <Line>Lawyers understand how to:</Line>
                <Paragraph>
                    <List />
                    <Line>Present medical evidence effectively</Line>
                    <Line>Frame your condition in terms of SSA's requirements</Line>
                    <Line>Meet technical documentation requirements</Line>
                    <Line>Navigate appeals if needed</Line>
                </Paragraph>
                <Line>Most disability lawyers work on contingency (they only get paid if you win)</Line>
                <Paragraph>
                    <List />
                    <Line>Fees are typically limited to 25% of back pay or $6,000, whichever is less</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Common middle ground:</Paragraph>
            <Paragraph>
                <List />
                <Line>Apply initially on your own</Line>
                <Line>Consider hiring a lawyer if denied and need to appeal</Line>
                <Line>Contact free disability advocates or legal aid organizations for guidance</Line>
            </Paragraph>
            <Paragraph>Would you like me to provide more specific information about any of these aspects?</Paragraph>
        </Message>
        <Message
            at="2024-11-06T23:54:40.654530Z"
        >
            <Origin>251959ac-98b0-4966-944e-e2fbc74da069</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What website do I go to to check the SSDI amount that I would get monthly?</Paragraph>
        </Message>
        <Message
            at="2024-11-06T23:54:40.654530Z"
        >
            <Origin>43aee03c-d454-4687-b1fe-437b62a370a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You can check your potential SSDI benefits amount at the official Social Security Administration website:
                www.ssa.gov/myaccount/
            </Paragraph>
            <Paragraph>Here are the steps to check:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Create or sign into your "my Social Security" account</Line>
                <Line>Look for "Social Security Statement" or "Benefits Calculator"</Line>
                <Line>
                    Your statement will show your estimated disability benefits based on your work history and earnings
                </Line>
            </Paragraph>
            <Paragraph>Important notes:</Paragraph>
            <Paragraph>
                <List />
                <Line>You need to have paid Social Security taxes through work to qualify</Line>
                <Line>The amount is based on your average lifetime earnings</Line>
                <Line>Benefits can vary based on:</Line>
                <Paragraph>
                    <List />
                    <Line>Your work history</Line>
                    <Line>How much you've paid into Social Security</Line>
                    <Line>Whether you receive other government benefits</Line>
                    <Line>If you have dependents who might qualify for additional benefits</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>If you don't want to create an online account, you can:</Paragraph>
            <Paragraph>
                <List />
                <Line>Call SSA at 1-800-772-1213</Line>
                <Line>Visit your local Social Security office in person</Line>
            </Paragraph>
            <Paragraph>Would you like me to explain more about how SSDI benefits are calculated?</Paragraph>
        </Message>
    </Chapter>
);
