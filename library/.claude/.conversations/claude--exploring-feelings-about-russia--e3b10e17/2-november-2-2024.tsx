import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[2 November 2024](2024-11-02)</Date>
        </Dated>
        <Title>[[ 2 November 2024 ]]</Title>
        <Message
            at="2024-11-02T00:24:18.207954Z"
        >
            <Origin>345e33bb-59a8-4dcc-a0bc-12714e0061d7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is bipolar disorder in one paragrqph</Paragraph>
        </Message>
        <Message
            at="2024-11-02T00:24:18.207954Z"
        >
            <Origin>5fff8fc1-15a9-4bed-bd89-88616121d0a6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Bipolar disorder is a chronic mental health condition characterized by significant mood swings between
                episodes of mania (or hypomania) and depression. During manic episodes, individuals may experience
                heightened energy, reduced need for sleep, racing thoughts, impulsive behavior, and euphoria, while
                depressive episodes involve deep sadness, loss of interest in activities, changes in sleep and appetite,
                fatigue, and sometimes thoughts of death or suicide. These mood swings can last for days to months and vary
                in severity, with some people experiencing mixed episodes where features of both mania and depression occur
                simultaneously. While the exact cause isn't fully understood, factors like genetics, brain structure, and
                environmental triggers play roles, and the condition typically requires long-term management through a
                combination of medication (such as mood stabilizers), psychotherapy, and lifestyle adjustments.
            </Paragraph>
        </Message>
    </Chapter>
);
