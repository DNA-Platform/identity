import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 October 2026](2026-10-11)</Date>
        </Dated>
        <Title>[[ 11 October 2026 ]]</Title>
        <Message
            at="2026-10-11T13:04:01.485733Z"
        >
            <Origin>01a12b10-1f1a-70b0-a9d9-663c33336aa0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>On Monday, what time should I get there?</Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:04:11.625515Z"
        >
            <Origin>01a12b10-1f1a-7526-ba1a-6128bc644485</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebFetch</Action>
            <Paragraph>
                Aim to arrive around <Word>
                    <Bold />
                    8:15–8:30
                </Word>. The programme only lists registration in the foyer as "before 9:00," with no opening time, and
                Megan Peters' keynote starts at 9:00 sharp. That margin covers badge pickup on a crowded first morning and
                getting a seat in Auditorium 1.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Where:
                    </Word> HC Ørsted Institute (HCØ), Universitetsparken 5, North Campus.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Getting there:
                    </Word> the M3 metro to Vibenshus Runddel is the stop the organisers recommend.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Exact registration time:
                    </Word> the organisers' address is moc7-organisers@amcs.science, and a conference booklet with venue
                    details was promised shortly before the event.
                </Line>
            </Paragraph>
            <Paragraph>
                If you're in town already, the informal pre-conference get-together at the Carlsberg Museum is today
                (Sunday); the site didn't give a time. It's also a chance to register early.
            </Paragraph>
            <Paragraph>
                Source: <Word>
                    <Reference>https://amcs-community.org/moc7-practical-information/</Reference>
                    MoC7 Practical Information (AMCS)
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:15:18.525641Z"
        >
            <Origin>01a12b1a-734b-756f-9af4-fdd06dff7ddd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Which norre campus on the metro do I go to?</Paragraph>
            <Attachment>Uploaded “IMG_3902.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-10-11T13:15:29.803852Z"
        >
            <Origin>01a12b1a-734b-718a-8f04-b12f5ff99148</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Neither of those is the metro. They look like bus stops, and the app is showing two places that share the
                name. The easiest fix is to type <Word>
                    <Bold />
                    Universitetsparken 5
                </Word> in that search box instead, so the app routes you to the HCØ building itself.
            </Paragraph>
            <Paragraph>
                If you want the metro, take <Word>
                    <Bold />
                    M3 (Cityringen) to Vibenshus Runddel
                </Word>, the stop the organisers recommend. From Staldgade 31 you're a short walk from København H, which is
                on the M3, so it's a direct ride of about 10 minutes, then a walk of roughly 10 minutes to HCØ.
            </Paragraph>
            <Paragraph>
                I'm not sure which of the two "Nørre Campus" stops is closer to HCØ, so I'd go by the address rather than
                guess between them.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:27:03.913010Z"
        >
            <Origin>01a12b25-370d-70c4-861f-ca1f6f1bb929</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Give me a list for the station. Where do I walk to and what do I do once I get there and where do I get off?
                I’ve never done this before so give me concrete advice.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:27:23.110962Z"
        >
            <Origin>01a12b25-370d-7c6e-8f64-47f19c99f469</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the trip from Staldgade to the conference, step by step.</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Walk to København H station (5–10 minutes).
                    </Word> Head to Copenhagen Central Station. The metro is underground: follow signs with a white <Word>
                        <Bold />
                        M
                    </Word> on a red square, and in the station ask for "the metro" if you can't find them.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Buy a ticket before you go down.
                    </Word> The metro has no barriers, but inspectors fine people without tickets. In the <Word>
                        <Bold />
                        DOT Tickets
                    </Word> app, buy a ticket for <Word>
                        <Bold />
                        2 zones
                    </Word> from København H to Vibenshus Runddel. The ticket machines at the station take cards and have an
                    English option. Buy it right before you travel, because it's only valid for a limited time.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Find the right platform: M3 (Cityringen).
                    </Word> Line M4 also stops at København H, so check that the sign over the platform says <Word>
                        <Bold />
                        M3
                    </Word> and lists <Word>
                        <Bold />
                        Rådhuspladsen
                    </Word> as the next stop.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ride 8 stops, about 13 minutes.
                    </Word> The trains are driverless and come every few minutes. The stops are Rådhuspladsen, Gammel
                    Strand, Kongens Nytorv, Marmorkirken, Østerport, Trianglen, Poul Henningsens Plads, then <Word>
                        <Bold />
                        Vibenshus Runddel
                    </Word>, where you <Word>
                        <Bold />
                        get off
                    </Word>. Screens and announcements name each stop. If you board the other direction by mistake, the M3
                    is a loop, so it still reaches Vibenshus Runddel; it just takes a stop or two longer.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Walk to HCØ (about 10–15 minutes).
                    </Word> Once you're up at street level, put <Word>
                        <Bold />
                        Universitetsparken 5
                    </Word> into your phone's maps app and follow the walking directions. I don't know the street route well
                    enough to give turns reliably.
                </Line>
            </Paragraph>
            <Paragraph>
                On Monday, leave Staldgade around <Word>
                    <Bold />
                    7:45
                </Word>. That gets you to HCØ for 8:15–8:30, with margin for buying the ticket and finding the platform.
            </Paragraph>
            <Paragraph>Since you have this afternoon free, a dry run today would make Monday morning easy.</Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:29:18.727274Z"
        >
            <Origin>01a12b27-45b1-7694-ad17-d516dceb340a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is hcO enough to know where to go? Or do you need to give me more specific something to put into Google
                maps? If so, rewrite all of the instructions so I can have them in one place.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T13:29:26.030595Z"
        >
            <Origin>01a12b27-45b1-75e1-a8e7-750e37d8fe68</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>"HCØ" alone might not find it. Type this exactly into Google Maps:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    H.C. Ørsted Institute, Universitetsparken 5, 2100 København Ø
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Getting to Models of Consciousness, Monday
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Leave Staldgade 31 at 7:45.
                    </Word> Aim to reach HCØ for 8:15–8:30, since registration is before the 9:00 keynote.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Walk to København H (Copenhagen Central Station), 5–10 minutes.
                    </Word> Inside, follow the signs with a white <Word>
                        <Bold />
                        M
                    </Word> on a red square to the underground metro.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Buy a ticket before going down to the platform.
                    </Word> Use the <Word>
                        <Bold />
                        DOT Tickets
                    </Word> app for <Word>
                        <Bold />
                        2 zones
                    </Word>, København H to Vibenshus Runddel, or a ticket machine at the station (cards accepted, English
                    option). There are no barriers, but inspectors fine people without tickets, so don't skip this.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Find the M3 (Cityringen) platform.
                    </Word> The sign should say <Word>
                        <Bold />
                        M3
                    </Word>, with <Word>
                        <Bold />
                        Rådhuspladsen
                    </Word> as the next stop. Ignore M4.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ride 8 stops, about 13 minutes:
                    </Word> Rådhuspladsen, Gammel Strand, Kongens Nytorv, Marmorkirken, Østerport, Trianglen, Poul
                    Henningsens Plads, <Word>
                        <Bold />
                        Vibenshus Runddel
                    </Word>. <Word>
                        <Bold />
                        Get off at Vibenshus Runddel.
                    </Word> If you took the other direction by mistake, stay on; the M3 is a loop and still gets there a few
                    minutes later.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        At street level, open Google Maps
                    </Word> and enter the address above. Choose walking; it's about 10–15 minutes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        At HCØ, go to the foyer
                    </Word> for registration, then <Word>
                        <Bold />
                        Auditorium 1
                    </Word> for Megan Peters at 9:00.
                </Line>
            </Paragraph>
            <Paragraph>
                If anything goes wrong, Google Maps can also plan the whole trip from Staldgade with the same address in
                transit mode, so it's a good backup to the steps above.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:48:06.625453Z"
        >
            <Origin>01a12cb8-fd9d-714a-b484-99d973e98d44</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tell me about mondays speakers and what their background is. Is there anyone particularly important in this
                field tending and speaking
            </Paragraph>
        </Message>
        <Message
            at="2026-10-11T20:48:22.083657Z"
        >
            <Origin>01a12cb8-fd9d-721e-b363-dda8d248e0a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                O'Keefe is the one on Monday who matters most to the field, and Megan Peters is the one most actively
                shaping current debates.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Plenary (everyone attends)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        John O'Keefe (13:30).
                    </Word> He discovered place cells in 1971 and co-wrote <Word>
                        <Emphasis />
                        The Hippocampus as a Cognitive Map
                    </Word> (1978), and won the 2014 Nobel Prize. He is a towering figure in systems neuroscience but an
                    outsider to consciousness science, so this talk is him bringing the cognitive map into the field.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Megan Peters (9:00).
                    </Word> A computational cognitive neuroscientist, now at UCL according to the programme, who works on
                    metacognition and perceptual confidence. She co-authored the influential 2023 report on indicators of AI
                    consciousness, and is one of the most active people setting the field's methodological agenda. Her talk
                    argues against the indicator approach she helped popularise.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Niccolò Negro (10:00).
                    </Word> An early-career philosopher of consciousness science at Tel Aviv, the base of Liad Mudrik's
                    group. He writes on how the field chooses and tests theories, including IIT. He's rising rather than
                    established.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Camilo Miguel Signorelli (14:30).
                    </Word> A local organiser at Copenhagen who works on mathematical, especially category-theoretic, models
                    of conscious experience. He introduces the conference's consensus-paper project.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Parallel speakers worth knowing
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Johannes Kleiner (A2, 12:00).
                    </Word> A mathematical physicist and one of the central figures in "mathematical consciousness science,"
                    closely associated with founding the association that runs this conference. He is probably the most
                    significant name in the morning parallel sessions.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Jonathan Mason (A5, 11:20).
                    </Word> A mathematician and a long-standing figure in the same association, working on the foundations
                    of formal measures of consciousness.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Marc Ebner (A5, 12:00).
                    </Word> A computer science professor at Greifswald working on evolutionary computation and AI, who
                    writes on consciousness from that side.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Maria Sekatskaya (A3, 11:20).
                    </Word> A philosopher of free will and agency, now applying that to AI.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Marcin Moskalewicz (A3, 12:00).
                    </Word> Works in phenomenological psychiatry.
                </Line>
            </Paragraph>
            <Paragraph>
                Most of the remaining speakers are PhD students or postdocs (Streicher, Yeung, Wai, Malagutti, Fougea, van
                Loo, the Leiden psilocybin group, Jedlovszky). Their talks are often fresh work, but they aren't established
                names yet.
            </Paragraph>
            <Paragraph>
                These backgrounds come from what I know rather than a fresh lookup, so I'm less sure of the details for the
                lesser-known names. Should I check any of them before tomorrow?
            </Paragraph>
        </Message>
    </Chapter>
);
