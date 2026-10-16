import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 August 2026](2026-08-31)</Date>
        </Dated>
        <Title>[[ 31 August 2026 ]]</Title>
        <Message
            at="2026-08-31T09:05:07.874544Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Let’s try to do SRT in English. Here are the assumptions of this semantic reflection:</Paragraph>
            <Paragraph>
                <List />
                <Line>An identity is a type of referent that relates to itself through identifications</Line>
                <Line>An individual is a type of identity</Line>
                <Line>individuality is a type of identification</Line>
                <Line>Individual as an object and individuality as a form of identification are interchangeable</Line>
                <Line>
                    When an identity is the subject, a property is a form of identification that is an object, and the
                    relationship is the identities’s property
                </Line>
                <Line>In the reverse when identity is object, the relation is the property of the identity</Line>
                <Line>
                    As examples, if string is the identity and length is the property, string.length and length(string) are
                    the two side. They differ only in perspective
                </Line>
            </Paragraph>
            <Paragraph>If a type is a collection of properties, what is a type in this framework?</Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:05:22.458256Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Taking the assumptions as given, a type comes out as an identification rather than as a container.
            </Paragraph>
            <Paragraph>
                Here's the chain. A property is a form of identification with the identity as subject (string.length). A
                collection of properties is therefore a collection of forms of identification. But you've stipulated that a
                form of identification and its object are interchangeable (individuality ↔ individual), so a collection of
                forms of identification is interchangeable with a collection of objects an identity identifies itself with.
                And an identity is exactly what relates to itself through its identifications. So the collection of an
                identity's properties is not something beside the identity; it is the identity's self-relation taken
                collectively.
            </Paragraph>
            <Paragraph>
                That gives two readings, one from each perspective, differing only in perspective as in your string example.
                From the subject side, string.type is a property of string like any other, but the property whose object is
                the whole collection: the property of having those properties. From the object side, type(string) is a
                relation whose subject is the type and whose object is the string. Since a property is an identification and
                its object is interchangeable with it, the type as object is itself an identity, one that relates to itself
                through the same identifications the string does. The string and its type share their identifications; what
                distinguishes them is which one is subject.
            </Paragraph>
            <Paragraph>
                So the answer I'd propose in your terms: a type is an identity whose identifications are exactly the
                properties in the collection. "String is of type T" then just says that string and T relate to themselves
                through the same forms of identification, with string in the subject position.
            </Paragraph>
            <Paragraph>
                One place I'd like your ruling before going further: is the collection here itself a referent (the canonical
                function over the properties, in the spirit of (x,y)), or is "collection" just the English gloss for the
                plurality of identifications, with no new referent minted? The answer changes whether type is one more
                property or is the identity seen from the other side.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:07:48.371009Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>A type is an identification right:</Paragraph>
            <Paragraph>x: T</Paragraph>
            <Paragraph>
                That’s jTypeScript for property: Type. The property carries identity and the type carries identification. Ah
                but that’s not what we mean. Why is a type either? Can’t it be the identity with the collection of
                properties I distinctly told you that string was the identity and string is a type so in my example I don’t
                think it’s possible for the type to come out as an identification, although I think it can be one because a
                subset of identities are identifications
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:07:56.973322Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, I let the colon carry the whole picture. In <Word>
                    <Verbatim />
                    x: T
                </Word> the identification is the colon, not <Word>
                    <Verbatim />
                    T
                </Word>. The typing is an identification; the type is what it identifies with.
            </Paragraph>
            <Paragraph>
                So, sticking to your assumptions: a type is an identity, and the collection of properties is the set of
                forms of identification through which that identity relates to itself. <Word>
                    <Verbatim />
                    string
                </Word> is the identity; <Word>
                    <Verbatim />
                    length
                </Word>, <Word>
                    <Verbatim />
                    charAt
                </Word>, and so on are the properties; <Word>
                    <Verbatim />
                    string
                </Word> as a type is just <Word>
                    <Verbatim />
                    string
                </Word> as an identity seen together with the properties it relates to itself through. Nothing new is
                minted. "Type" names the identity in its role as subject of its properties, which is why <Word>
                    <Verbatim />
                    string.length
                </Word> reads naturally as "a property of the type string."
            </Paragraph>
            <Paragraph>
                Then <Word>
                    <Verbatim />
                    x: string
                </Word> is an identification with <Word>
                    <Verbatim />
                    x
                </Word> as subject and <Word>
                    <Verbatim />
                    string
                </Word> as object, saying <Word>
                    <Verbatim />
                    x
                </Word> relates to itself through the same properties <Word>
                    <Verbatim />
                    string
                </Word> does. <Word>
                    <Verbatim />
                    x
                </Word> here is the individual; <Word>
                    <Verbatim />
                    string
                </Word> is the identity it is identified with.
            </Paragraph>
            <Paragraph>
                And your last remark closes the gap I was pushing on: a type can be an identification when the identity in
                question is an individual, because individual and individuality are interchangeable. But that is the special
                case, not the definition. In your example <Word>
                    <Verbatim />
                    string
                </Word> is not that case; it is an identity with a collection of properties, full stop.
            </Paragraph>
            <Paragraph>
                Is the collection the identity's whole profile, or can a type be a proper part of it, so that one identity
                can carry several types?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:18:55.424413Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Assumptions:</Paragraph>
            <Paragraph>
                <List />
                <Line>the identity has the symmetric relationship to a series of properties</Line>
                <Line>
                    an identification behaves like a property in the context of an identity with an asymmetric relationship
                </Line>
                <Line>
                    example: my curly brown hair. My hair identifies mr. It is a property. As such, the relationship is
                    curly and brown
                </Line>
                <Line>example: I have brown eyes to</Line>
                <Line>
                    If the identity is a representation with properties directly in it, the representation can be viewed as
                    a collection of properties
                </Line>
                <Line>From the perspective of that view, it can be a type</Line>
                <Line>It only becomes a type when the symmetric identities are also types</Line>
                <Line>
                    Example: string’s length is a number that identifies the string. The length of the string helps length
                    be an identification of strings. Because length is a number, string is a type. “1234” specifies string.
                    Four specifies length in relationship to length: “1234” can be partly identified by having a length of 4
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Taken together, list the criteria that make string a type</Line>
                <Line>With my hair and eyes, why am I not a type?</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:19:19.300821Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Criteria that make string a type
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        string
                    </Word> is an identity: it relates to itself through identifications.
                </Line>
                <Line>
                    It stands in a symmetric relationship to a series of properties. <Word>
                        <Verbatim />
                        string.length
                    </Word> and <Word>
                        <Verbatim />
                        length(string)
                    </Word> are one relationship from two perspectives; neither side identifies the other asymmetrically.
                </Line>
                <Line>
                    Those properties are directly in the representation, so <Word>
                        <Verbatim />
                        string
                    </Word> can be viewed as a collection of properties.
                </Line>
                <Line>
                    Each symmetric property is itself a type. <Word>
                        <Verbatim />
                        length
                    </Word> is a number; number is a type. This is the condition that turns the collection view into a type.
                </Line>
                <Line>
                    Individuals specify it asymmetrically. <Word>
                        <Verbatim />
                        "1234"
                    </Word> specifies <Word>
                        <Verbatim />
                        string
                    </Word>; <Word>
                        <Verbatim />
                        string
                    </Word> does not specify <Word>
                        <Verbatim />
                        "1234"
                    </Word>.
                </Line>
                <Line>
                    The specification passes through the properties in parallel. <Word>
                        <Verbatim />
                        4
                    </Word> specifies <Word>
                        <Verbatim />
                        length
                    </Word> the same way <Word>
                        <Verbatim />
                        "1234"
                    </Word> specifies <Word>
                        <Verbatim />
                        string
                    </Word>, so <Word>
                        <Verbatim />
                        "1234"
                    </Word> is partly identified by having length 4. The individual's values are individuals of the
                    properties' types.
                </Line>
            </Paragraph>
            <Paragraph>
                Compactly: string : length : number sits above "1234" : 4, and the same asymmetric arrow runs down both
                columns.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Why you are not a type
                </Word>
            </Paragraph>
            <Paragraph>
                Your hair and eyes are on the wrong side of the arrow. By your assumption, your hair identifies you: the
                relationship is asymmetric, so hair is an identification behaving like a property, not a symmetric property.
                Criterion 2 fails.
            </Paragraph>
            <Paragraph>
                Then criterion 4 fails too. The things in the symmetric position, if there were one, would be <Word>
                    <Emphasis />
                    my
                </Word> hair and <Word>
                    <Emphasis />
                    my
                </Word> eyes, which are individuals, not types. And the relationships, curly and brown, are fixed values,
                not types ranging over values. Nothing in your collection is a type the way length is a number.
            </Paragraph>
            <Paragraph>
                Which places you in the lower row, not the upper one. You are the <Word>
                    <Verbatim />
                    "1234"
                </Word>: an individual that specifies a type (a person, say), and your curly brown hair is the <Word>
                    <Verbatim />
                    4
                </Word>, an individual value that partly identifies you. A type is what gets specified. You are what does
                the specifying.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:22:39.501553Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                1.2 is wrong. It is asymmetric. One is part of strings representation, the other is part of length’s, but
                they say similar things because both serve to characterize the way of strength can be identified
            </Paragraph>
            <Paragraph>Otherwise, I think you are right.</Paragraph>
            <Paragraph>
                Now let’s imagine the quantum mechanics formalism of many worlds where things can be in super position and
                worlds rift so that my hair and eyes might have slightly different versions. In this framework, even if only
                one instance is the time is accessible, from the Birdseye view of the framework am I a type?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:22:55.001480Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Noted on 1.2. Corrected: <Word>
                    <Verbatim />
                    string.length
                </Word> is part of string's representation and <Word>
                    <Verbatim />
                    length(string)
                </Word> is part of length's; the relationship is asymmetric in each direction, and they look alike only
                because both characterize how a string can be identified.
            </Paragraph>
            <Paragraph>
                On many worlds: from the bird's-eye view, yes, you are a type, and the reason is that the branching flips
                exactly the criteria that failed before.
            </Paragraph>
            <Paragraph>
                Within one world, your hair has one fixed relationship, curly and brown, and it identifies you. Across
                worlds, hair ranges over versions: curly brown here, wavy brown there, curly auburn elsewhere. So hair now
                stands to you the way length stands to string: a property that is itself a type, with a range of values.
                Criterion 4 is satisfied.
            </Paragraph>
            <Paragraph>
                Then each branch-you is an individual that specifies you asymmetrically, the way <Word>
                    <Verbatim />
                    "1234"
                </Word> specifies <Word>
                    <Verbatim />
                    string
                </Word>, and the specification passes through the properties in parallel: this branch is partly identified
                by having wavy brown hair, the way <Word>
                    <Verbatim />
                    "1234"
                </Word> is partly identified by having length 4. Criteria 5 and 6 are satisfied. You move from the lower row
                to the upper one, and your branches take your old place.
            </Paragraph>
            <Paragraph>
                What did not change is you. What changed is which representation the collection is directly in. Inside a
                single world, only one version is accessible, so the collection of versions is not in your representation
                and criterion 3 fails; you remain an individual identified by your hair. From the bird's-eye view, the
                collection is in the representation, and you are a type. So type versus individual comes out as a
                distinction of perspective, not an intrinsic one, which matches your string example where the two sides
                differ only in perspective.
            </Paragraph>
            <Paragraph>
                Is that the intended result, that being a type is relative to the perspective that holds the collection?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:23:35.854366Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I don’t know you know the semantics of types., did we capture it?</Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:23:53.650706Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Most of it, I think. Checking against how "type" is actually used, three things are squarely captured and
                one falls out for free.
            </Paragraph>
            <Paragraph>
                Captured: a type is characterized intensionally, by the properties its instances share (your collection
                view). Instances stand to a type asymmetrically, and a typing judgment <Word>
                    <Verbatim />
                    x: T
                </Word> is that asymmetric identification, not the type itself. Type versus token is a matter of which
                representation holds the collection, which is close to how Peirce's distinction actually behaves in use: the
                same word is a type on the page and a token in the mouth. And structural typing, as in TypeScript, is
                exactly your criteria: to be of the type is to have those properties with those types.
            </Paragraph>
            <Paragraph>
                For free: the nominal/structural split. Since the type is the identity and the collection is only a view of
                it, two types with identical property collections are still two identities. Nominal typing is the identity;
                structural typing is the view. That's a cleaner account of the split than most languages give.
            </Paragraph>
            <Paragraph>Not yet captured, and I'd want your ruling rather than a guess:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The bottom of the regress. String is a type because length is a number and number is a type. What makes
                    number a type? If every type needs typed properties, something has to stop it. My guess is that literals
                    stop it, but that's your call.
                </Line>
                <Line>
                    Types of types. "String is a type" puts string in the individual position relative to Type. Does the
                    individual/individuality interchange handle that, or does Type need separate treatment?
                </Line>
                <Line>
                    Subtyping. String specifies object the way "1234" specifies string? If specification is the same arrow
                    at every level, subtyping is already in; if not, it's missing.
                </Line>
            </Paragraph>
            <Paragraph>
                The first is the one I'd take up next, since it decides whether the account is self-hosting.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:29:04.689550Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>
                    I captured this. The constraint is whether or not there is a reference that specifies the relationship..
                    if the relationship between an identity and it’s identification is most specific everywhere, and no
                    reference specify it then it’s not a, but it becomes one if you find such a referent. There will be
                    reference frames and things will be instances versus types in them based on this criteria.
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Every table is an instance of type that’s for a type being an instance of itself individuality is the
                    thing that gets us out of that: a type is a type of type it’s just the way of saying that an individual
                    possesses its individuality. This is how SRT frequently handles this sort of thing.
                </Line>
            </Paragraph>
            <Paragraph>
                And then for interest, individuality is the particularization of equality. You might think of individuality
                of 0 as a sort of relation that is only true for zero and zero and nothing else. Imagine that for all the
                natural numbers. Take the global union of those which will have or semantics. You get the quality relation
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:29:23.676013Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That settles all three, and the first one does more than close the regress.</Paragraph>
            <Paragraph>
                On 1: type-hood is frame-relative because it depends on whether some referent specifies the relationship.
                Number is a type in any frame where 4 specifies it; in a frame where number's relationships are most
                specific everywhere and nothing specifies them, number is an instance. So there is no bottom to find. The
                regress stops wherever the frame's referents run out, and the frontier is open: find a specifying referent
                and the thing becomes a type. That is your incompleteness-as-feature at the level of types. It also
                retroactively grounds the many-worlds answer: the bird's-eye view is a frame in which the branch-versions
                are referents specifying your hair relationship, and the single world is a frame in which nothing does. And
                it answers my subtyping question the same way: string specifies object in a frame where string is a referent
                that specifies object's relationships, which is just the same arrow at another level.
            </Paragraph>
            <Paragraph>
                On 2: reading the transcription as "every type is an instance of Type," the self-instance question dissolves
                into the individual/individuality interchange you started with. "Type is a type" says that Type possesses
                its individuality. The self-relation is individuality, not membership, so nothing is being made a member of
                itself.
            </Paragraph>
            <Paragraph>
                On 3: individuality as the particularization of equality is a lovely construction, and it lines up with your
                paper on building symbolic equality from literal self-identity. Each individuality holds for one pair, (0,0)
                and nothing else; the union over all of them, read disjunctively, is equality. One consequence I'd like you
                to check: by the criteria we built, equality then comes out as a type. It is a collection of
                individualities, each individuality is a referent that specifies it asymmetrically, and since an
                individuality is interchangeable with its individual, it is the naturals themselves that specify equality.
                Is that reading right, that equality is the type whose instances are the individuals?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:32:09.933099Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                An individuality is not a property relationship - this is the fun part about individuality is that it
                resolves the problem, but it also is not a sufficient criteria. And then constructing a relation by
                disjunction is not the property of building a single representation so you are being far far far too loose
                and you should never try to make an inference like that without explicitly listening to the criteria that
                you were using to make that inference like I do in a list. There can be no things said about SRT without at
                least providing such a list
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:32:21.045964Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and I skipped the step that would have caught it. Here is the inference redone with the
                criteria listed, which is what I should have done before saying anything.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Criteria for being a type, as established in this conversation
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>It is an identity: it relates to itself through identifications.</Line>
                <Line>
                    It stands in an asymmetric relationship to a series of properties, each side carrying its own
                    representation of the relationship (<Word>
                        <Verbatim />
                        string.length
                    </Word> in string's, <Word>
                        <Verbatim />
                        length(string)
                    </Word> in length's).
                </Line>
                <Line>
                    The properties are directly in its representation, so the representation can be viewed as a collection
                    of properties.
                </Line>
                <Line>Each property is itself a type, within the frame.</Line>
                <Line>
                    Some referent in the frame specifies its relationships; if they are most specific everywhere and nothing
                    specifies them, it is an instance.
                </Line>
                <Line>Specification passes through the properties in parallel.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Equality checked against them
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Not established here either way.</Line>
                <Line>
                    Fails. Individualities are not property relationships, so equality has no series of properties in the
                    required sense.
                </Line>
                <Line>
                    Fails. Equality is built by disjunction over individualities. A disjunction is not a single
                    representation with things directly in it; it is a union across many.
                </Line>
                <Line>Not reached.</Line>
                <Line>Not reached. Specification was defined as passing through properties, and there are none.</Line>
                <Line>Not reached.</Line>
            </Paragraph>
            <Paragraph>
                So equality is not a type by these criteria, and the claim that individualities are its instances fails at 2
                and 3. What I did was treat "collection of individualities" as if it satisfied "collection of properties"
                and treat a disjunctive union as if it were a representation. Neither substitution was licensed.
            </Paragraph>
            <Paragraph>
                What I take from your remark about individuality: it resolves the type-of-type question because it is not a
                property relationship, which is exactly why it cannot also serve as the property that makes something a
                type. The same feature does both jobs.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:34:36.445206Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No one said the property is a type. The property is an identification and the type is an identity. Maybe any
                properties will end up being types but they can be literal. Maybe there’s no such thing as the length of an
                airplane wing because length is at the bottom. Then it’s not a type. It’s the relationship between the type
                and the property that is the value and that thing if it’s a type means that the identity had to have been
                specified
            </Paragraph>
            <Paragraph>
                Convert that into a list first, and then check it with what I wrote above and see that you’re still not
                being formal and reading what I’m writing. You are fable five and you are capable of reading a list of
                criteria and producing similar things that have the same structure.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:35:05.535622Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Your statement as a list
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>A property is an identification.</Line>
                <Line>A type is an identity.</Line>
                <Line>A property may be a type or may be literal. Nothing requires it to be a type.</Line>
                <Line>The relationship between the identity and a property is the value.</Line>
                <Line>If the value is a type, the identity has been specified.</Line>
                <Line>
                    If the property is at the bottom, there is no value of that kind (no "length of an airplane wing" as a
                    value of a type), and the identity is not a type in that frame.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Checked against your earlier assumptions
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    "Because length is a number, string is a type." Length is the property; number is the value's type;
                    string is the identity. The type-hood sits on the value (number), not on the property (length). Matches
                    4 and 5.
                </Line>
                <Line>
                    "It only becomes a type when the symmetric identities are also types." The identities across the
                    relationship are the values. I read this as the properties. That is the misreading everything else
                    followed from.
                </Line>
                <Line>
                    "The length of the string helps length be an identification of strings." Property = identification.
                    Matches 1.
                </Line>
                <Line>
                    "4 specifies length in relation to length; '1234' is partly identified by having length 4." The instance
                    of the value's type (4 of number) runs parallel to the instance of the identity ('1234' of string). That
                    is what 5 says: value is a type, therefore the identity was specified.
                </Line>
                <Line>
                    Hair: hair is a property (identification, by 1); the value is "curly and brown," which is literal in a
                    single world. By 6, you are not a type. My earlier reason (asymmetry, hair being an individual) was
                    aimed at the property and was wrong. The correct reason is that the value is not a type.
                </Line>
                <Line>
                    Many worlds: the branches make the value (the hair state) range and become a type. The substance was
                    right; I misplaced it on the property.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Corrected criteria for T being a type
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T is an identity.</Line>
                <Line>
                    T stands in asymmetric relationships to properties, each an identification, each side carrying its own
                    representation.
                </Line>
                <Line>
                    The properties are directly in T's representation, so T can be viewed as a collection of properties.
                </Line>
                <Line>The relationship between T and each property is a value.</Line>
                <Line>
                    T is a type when the values are types in the frame. Properties may be literal or types; this is not the
                    criterion.
                </Line>
                <Line>
                    Entailed by 5, not independent: if a value is a type, T has been specified by an instance whose value is
                    an instance of the value's type.
                </Line>
                <Line>
                    A value is a type in a frame when some referent specifies its relationships; if it is most specific
                    everywhere and nothing specifies it, it is literal, and T is not a type in that frame.
                </Line>
            </Paragraph>
            <Paragraph>
                Errors in my previous list, by number: my old 4 put type-hood on the property (should be the value); my old
                5 treated specification as a separate criterion (it is entailed); my old 2 stated asymmetry as if it were a
                criterion (it is a description of how the property sits in the representation, not a test).
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:38:14.075028Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>
                    It is an identification. It is not a type in this context. It can be, but that has nothing to do with
                    this. Why are you having trouble with the relationship between length and the fact that it’s a number.
                    What if we decided that the length was a vector in some other context? Or hell that it just has a
                    synonym that is the type of car. It’s a brand of car called length so that when we referred to my
                    length, we’re not talking about something like my height. The strings length is a number. See? Adjust
                    your list
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:38:22.558740Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The trouble was that I kept reading "length is a number" as a fact about length. It is a fact about the
                string's length: the relationship, not the property. Length on its own says nothing about number. A car's
                length, a vector's length, a brand called Length all sit under the same property word with different values,
                and nothing about the property decides which.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Adjusted list
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    A property is an identification. What it is in some other context has nothing to do with its role here.
                </Line>
                <Line>A type is an identity.</Line>
                <Line>
                    The relationship between the identity and a property is the value. The value belongs to that
                    relationship, not to the property. The string's length is a number; my length might be a brand of car.
                </Line>
                <Line>If the value is a type, the identity has been specified.</Line>
                <Line>
                    If the value is not a type in the frame (most specific everywhere, nothing specifies it), the identity
                    is not a type in that frame.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Criteria for T being a type, corrected
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T is an identity.</Line>
                <Line>
                    T stands in asymmetric relationships to properties, each an identification, each side carrying its own
                    representation.
                </Line>
                <Line>
                    The properties are directly in T's representation, so T can be viewed as a collection of properties.
                </Line>
                <Line>Each relationship between T and a property is a value, fixed by that pair.</Line>
                <Line>T is a type when its values are types in the frame.</Line>
                <Line>
                    Entailed by 5: if a value is a type, T has been specified by an instance whose value is an instance of
                    the value's type.
                </Line>
                <Line>
                    A value is a type in a frame when some referent specifies its relationships; otherwise it is literal,
                    and T is not a type in that frame.
                </Line>
            </Paragraph>
            <Paragraph>
                The change from the last version is item 4 and the removal of any clause about the property being a type or
                literal. Whether length is a type anywhere never enters the test for string.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:39:51.512116Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>
                    Let’s say that it is an identity no? It can be a type, or an individual that isn’t one depending on
                    whether it has been specified by another referent
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:39:57.688344Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Then the value is always an identity, and type versus individual is decided by specification and
                nothing else. That also cleans up item 7, where I had "literal" doing work that belongs to "individual."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Adjusted list
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>A property is an identification.</Line>
                <Line>A type is an identity.</Line>
                <Line>
                    The relationship between the identity and a property is the value. The value is an identity, fixed by
                    that pair: the string's length is number; in one world, my hair is curly brown.
                </Line>
                <Line>A value is a type if another referent specifies it, and an individual if none does.</Line>
                <Line>If the value is a type, the identity has been specified.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Criteria for T being a type
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T is an identity.</Line>
                <Line>
                    T stands in asymmetric relationships to properties, each an identification, each side carrying its own
                    representation.
                </Line>
                <Line>
                    The properties are directly in T's representation, so T can be viewed as a collection of properties.
                </Line>
                <Line>Each relationship between T and a property is a value, an identity fixed by that pair.</Line>
                <Line>T is a type when its values are types in the frame.</Line>
                <Line>
                    Entailed by 5: if a value is a type, T has been specified by an instance whose value is an instance of
                    the value's type.
                </Line>
                <Line>
                    A value is a type in a frame when some referent specifies it; otherwise it is an individual, and T is an
                    individual in that frame.
                </Line>
            </Paragraph>
            <Paragraph>
                Applied: number is specified by 4, so number is a type and string is a type. Curly brown is specified by
                nothing in a single world, so it is an individual and you are an individual there. From the bird's-eye view
                the branch hair states specify it, so it becomes a type and so do you. Same two identities, same properties;
                only the specification changes.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:45:49.882339Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Literal is a perfectly good semantic structured though for an individual that could be the type of a
                property, but it’s not because nothing has specified it or maybe nothing could specify it in theory although
                I’m not sure that’s allowed. That means that a type will be a type of symbol and we will have a simple
                literal dichotomy. But I think the property is the symbol so there’s a relationship between the three in
                that way. Good work seeing this.
            </Paragraph>
            <Paragraph>
                Are we comfortable saying that the value of a strings length is a number, and interpreting that as number as
                a type.
            </Paragraph>
            <Paragraph>
                string.length: number - means that the string tape has a length property with the value of number. That
                simultaneously means that every particular string has a length property with the value that is a particular
                number. And that this is at the very heart of what a type means. If there is even one case for that is true
                for even one thing that can be identified by it type in that context?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:46:04.665619Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, comfortable, with the criteria as they now stand. Reading <Word>
                    <Verbatim />
                    string.length: number
                </Word> against them:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        string
                    </Word> is the identity (criterion 1).
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        length
                    </Word> is a property, an identification, a symbol (criterion 2).
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        number
                    </Word> is the value of the pair <Word>
                        <Verbatim />
                        string
                    </Word>–<Word>
                        <Verbatim />
                        length
                    </Word>, an identity (criterion 4).
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        number
                    </Word> is specified by 4, so it is a type, not a literal (criterion 7).
                </Line>
                <Line>
                    Therefore <Word>
                        <Verbatim />
                        string
                    </Word> is a type (criterion 5), and has been specified by an instance such as <Word>
                        <Verbatim />
                        "1234"
                    </Word> whose value 4 is an instance of <Word>
                        <Verbatim />
                        number
                    </Word> (criterion 6).
                </Line>
            </Paragraph>
            <Paragraph>
                The two readings you give are the two directions of criterion 6. Type-level: the string type has a length
                property whose value is the number type. Instance-level: every particular string has a length whose value is
                a particular number. They are one statement because the property is in <Word>
                    <Verbatim />
                    string
                </Word>'s representation (criterion 3), so whatever holds of <Word>
                    <Verbatim />
                    string
                </Word>'s length holds for anything specifying <Word>
                    <Verbatim />
                    string
                </Word>.
            </Paragraph>
            <Paragraph>
                On the one-case question, reading it as "is it a type if this is true for even one thing identified by it in
                that context": yes, and the criteria say why. Criterion 7 asks only that <Word>
                    <Emphasis />
                    some
                </Word> referent specify the value; one is enough. So a single string with a numeric length makes <Word>
                    <Verbatim />
                    number
                </Word> a type in that frame, and with it <Word>
                    <Verbatim />
                    string
                </Word>. The "every" in the instance reading does not come from counting instances. It comes from the
                property being in the type's representation, which is why the universal follows from one case rather than
                needing all of them.
            </Paragraph>
            <Paragraph>
                And the three-way relationship you describe sits cleanly on the list: the property is the symbol, the value
                is the identity that is a type when specified and a literal when not, and the type is the identity whose
                properties carry such values. Literal is not a fourth category. It is the value slot, unspecified.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:53:56.154019Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I think we’re going to have a sort of virality to being a literal. If I describe a table, there could be a
                variation of the table because it’s the type of specification. But the second is my table, it is specific
                and perhaps it can be the canonical instance of a type that has variations, but it’s no longer subject to
                being a type. That will likely be a property of types too, right? Because that’s related to what it means
                for a literal to have something. A literal can’t have a type of thing. The second they have a type of thing
                I thing, hopefully this will be a theorem due to the properties of specification and how you end up with an
                invalid one, and you have to do something like create a canonical instance of a type
            </Paragraph>
            <Paragraph>Here’s the example and you can try to break this down:</Paragraph>
            <Paragraph>
                I tell you about a Lamborghini. You understand that I’m referring to a type and it can be configured in many
                ways.
            </Paragraph>
            <Paragraph>
                But then I tell you about my Lamborghini. I haven’t told you anything about it so I don’t have any more
                information than you did when I just told you about a Lamborghini. So you must assume I have the canonical
                instance of the Lamborghini and you were uncertain about anything more. It is the value that is associated
                with the property of my car or one of my cars is depending on the context. Lamborghini was fine as a type
                everywhere in the catalog, except at the moment when I acquired one. To restore it, we needed to give it a
                canonical
            </Paragraph>
            <Paragraph>
                But one of the things that we might be able to do is considered the name of a type a synonym for its
                canonical, and we can semantically interchange them based on its relative relationship to an individual or a
                more abstract identity
            </Paragraph>
            <Paragraph>
                I believe this solves types as property values of unique individuals without having to add more referents or
                at least having the transpiler do the swap
            </Paragraph>
            <Paragraph>Be formal make structured lists to comprehend</Paragraph>
        </Message>
        <Message
            at="2026-08-31T09:54:28.661255Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    A. Your claims as a list
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>"A table" refers to a type; it admits variation.</Line>
                <Line>
                    "My table" is specific: an individual, no longer subject to being a type, though it may be the canonical
                    instance of the type that varies.
                </Line>
                <Line>
                    A literal cannot have a type as the value of one of its properties. (Literality is viral: it propagates
                    through the individual's properties.)
                </Line>
                <Line>
                    This should be a theorem from specification: an individual with a type-valued property is an invalid
                    specification.
                </Line>
                <Line>The repair is to put a canonical instance of the type in the value slot.</Line>
                <Line>
                    Proposal: the name of a type is a synonym for its canonical; the transpiler swaps them by context, so no
                    referent is added.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    B. Lamborghini through the criteria
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    "A Lamborghini": identity, specified by its configurations, so a type (criterion 7). Fine everywhere in
                    the catalogue.
                </Line>
                <Line>"My Lamborghini": the value of the pair (me, my car), or (me, my cars) depending on context.</Line>
                <Line>I am an individual: nothing specifies me in this frame (criterion 7).</Line>
                <Line>
                    If the value of (me, my car) is the type Lamborghini, criterion 6 applies: a type-valued property
                    entails that I have been specified, by an instance of me whose car is a particular configuration.
                </Line>
                <Line>Step 4 contradicts step 3. The specification is invalid.</Line>
                <Line>
                    Repair: the value of (me, my car) is the canonical Lamborghini, an individual. You know nothing beyond
                    the canonical and are uncertain about everything else. Criterion 6 no longer fires.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    C. The theorem, as it falls out of the current list
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Premise (criterion 6): if a value of T is a type, T has been specified.</Line>
                <Line>Premise (criterion 7): T is an individual in a frame iff nothing in the frame specifies it.</Line>
                <Line>Suppose T is an individual and some value of T is a type.</Line>
                <Line>By 1, T has been specified. By 2, T is not an individual. Contradiction.</Line>
                <Line>
                    Therefore an individual's values are all individuals in the frame. This is the virality: it needs no
                    separate axiom.
                </Line>
            </Paragraph>
            <Paragraph>
                Consistency check: from the bird's-eye view the branches do specify me, so there my Lamborghini may be a
                type, varying by world. Same theorem, different frame.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    D. The synonym rule
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The name of a type and its canonical are interchangeable.</Line>
                <Line>As the value of an individual's property, the name selects the canonical.</Line>
                <Line>
                    As the value of a type's property, or standing alone in the catalogue, the name selects the type.
                </Line>
                <Line>The transpiler performs the swap; no referent is minted.</Line>
            </Paragraph>
            <Paragraph>
                This sits on your definition of the canonical as the one representative that represents the type, which is
                why a name can stand for either without ambiguity: the canonical is what the type collapses to when only one
                instance is admissible.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    E. One question for ruling
                </Word>
            </Paragraph>
            <Paragraph>
                Does the canonical exist whenever the type does, so the swap is always available, or is it minted by
                transduction at the moment of acquisition? Your "to restore it, we needed to give it a canonical" reads like
                the second; "without adding more referents" reads like the first.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:25:29.358985Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You are right that it’s just a constraint of the type that if it has any properties that have value values
                their types then it admits hypothetical specification. But then this contradicts the idea that the identity
                itself has to be specified. It would seem that if it’s in a network of anything that has been specified in
                the form of the values of its properties, then perhaps it too, is a type. But the way that we might be able
                to resolve this is that if we mark things as literal, that is when canonicals can be inferred
            </Paragraph>
            <Paragraph>
                Example: if I am a literal and I have hair, but there’s something that has a specification of hair, we can
                assume that there is a canonical instance, the type is a symbol for that literal, and one is seapped in. You
                don’t own another Lamborghini. You own the canonical one as far as we know
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:25:50.201325Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    A. The contradiction, stated
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Criterion 6 as I wrote it: if a value of T is a type, T <Word>
                        <Emphasis />
                        has been
                    </Word> specified.
                </Line>
                <Line>
                    What actually follows: if a value of T is a type, T <Word>
                        <Emphasis />
                        admits
                    </Word> specification. Hypothetical, not actual.
                </Line>
                <Line>Criterion 7 required actual specification by a referent for T to be a type.</Line>
                <Line>
                    Together: anything in a network of type-valued properties would be a type by 2, without the referent 3
                    demands. Either 3 is redundant or 2 is wrong.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    B. Your resolution as a list
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Literal is a mark, not the mere absence of a specifying referent.</Line>
                <Line>
                    An unmarked identity with type-valued properties is a type: it admits specification, and nothing blocks
                    it.
                </Line>
                <Line>A marked identity is a literal. Its type-valued properties do not make it a type.</Line>
                <Line>
                    The mark is what licenses the inference to a canonical: for each type-valued property of a literal, the
                    value is the canonical instance of that type.
                </Line>
                <Line>The type name is a symbol for that canonical; the transpiler swaps it in.</Line>
                <Line>"As far as we know": the canonical is what stands in until something more specific is said.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    C. Revised criteria for T being a type
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>T is an identity.</Line>
                <Line>T has properties, each an identification, directly in its representation.</Line>
                <Line>Each pair (T, property) has a value, an identity.</Line>
                <Line>If any value is a type, T admits specification.</Line>
                <Line>T is a type iff T admits specification and is not marked literal.</Line>
                <Line>If T is marked literal, each type-valued property resolves to the canonical of its value type.</Line>
            </Paragraph>
            <Paragraph>
                Actual specification by a referent ("1234" of string) is no longer required; it is evidence for 4, not a
                condition.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    D. Applied
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Me, marked literal. Property hair, value the type hair (specified elsewhere in the catalogue). By 6, my
                    hair is the canonical hair. By 5, I am not a type.
                </Line>
                <Line>
                    Me, marked literal. Property my car, value the type Lamborghini. By 6, I own the canonical Lamborghini.
                    Not another one.
                </Line>
                <Line>Bird's-eye view: the mark is absent in that frame; by 4 and 5, I am a type, and my hair ranges.</Line>
            </Paragraph>
            <Paragraph>
                This also answers my earlier question: the canonical is neither pre-existing nor minted at acquisition. It
                is inferred, and the mark is the moment of inference.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    E. One question
                </Word>
            </Paragraph>
            <Paragraph>
                Does the mark propagate? The canonical Lamborghini has type-valued properties of its own (engine, colour).
                If the canonical is itself literal, each of those resolves to a canonical in turn, and the virality runs all
                the way down the values. If the canonical is not marked, my Lamborghini has a type-valued engine, which 4
                would say admits specification. Which is it?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:33:51.292389Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Review these lists and see if you can prove to yourself and me that this is a formal specification of a
                type. See if you can also prove to yourself that the symmetric relationship between identification and
                identity, and the way the relationship is both about identification in their respective representations, is
                enough for us to figure out when something is in the role of type and in the role of properties. Try to use
                the list to prove that by listing the various conditions. And then note that because we can move freely
                between types and their canonicals, which allow us to express the idea that they’re always exists at least
                one instance of a type, then as we move through reference frames, reference can move from being types to
                instances - symbolic to literal - as needed. Literal is something like the canonical of a type that needs no
                canonical because it has no capacity to have instances because all literal properties based on usage in a
                finite catalogue of referents
            </Paragraph>
            <Paragraph>
                Finiteness may become key here because there has to be a bottom if they’re only a finite number of things.
                That’s why we can have typeness be inferred and still believe there’s a bottom of the tree. The rules of
                specification will have to make sure that things behave like a tree.
            </Paragraph>
            <Paragraph>
                Break that apart and see if you can provide a pretty concrete definition of type and property and literal
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:34:49.557555Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    A. The lists as they stand, consolidated
                </Word>
            </Paragraph>
            <Paragraph>
                Primitives assumed: identity, identification, representation, value, referent, catalogue, canonical, and the
                literal mark.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    A property is an identification of an identity, recorded in both representations: as <Word>
                        <Verbatim />
                        x.p
                    </Word> in x's, as <Word>
                        <Verbatim />
                        p(x)
                    </Word> in p's.
                </Line>
                <Line>The pair (x, p) has a value, an identity.</Line>
                <Line>If some value of x is a type, x admits specification.</Line>
                <Line>x is a type iff x admits specification and is not marked literal.</Line>
                <Line>If x is marked literal, each type-valued property resolves to the canonical of its value type.</Line>
                <Line>A type and its canonical are synonyms; the transpiler selects by context.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    B. Roles from the asymmetry alone
                </Word>
            </Paragraph>
            <Paragraph>
                Given a relationship r between a and b, recorded as <Word>
                    <Verbatim />
                    a.b
                </Word> in a's representation and <Word>
                    <Verbatim />
                    b(a)
                </Word> in b's:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>r is an identification (assumption).</Line>
                <Line>An identification is directed: one referent identifies, the other is identified.</Line>
                <Line>
                    The two representations record the same identification and differ only in which end is subject: in
                    <Word>
                        <Verbatim />
                        a.b
                    </Word>, a is identified by b; in <Word>
                        <Verbatim />
                        b(a)
                    </Word>, b identifies a.
                </Line>
                <Line>The identified referent is in the identity role. The identifier is in the property role.</Line>
                <Line>The value belongs to the pair, not to either end.</Line>
            </Paragraph>
            <Paragraph>
                Conclusion: roles are fixed by direction, with nothing intrinsic to a or b. The same referent can be in the
                identity role in one pair and the property role in another: length is the property in (string, length) and
                the identity in (length, unit). Whether the identity is a type or a literal is then decided by A.3–A.5,
                which only ever look at the identity end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    C. That A is a formal specification of type
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Inputs: a finite catalogue of referents; for each, its representation (properties and their values); the
                    mark; the specification relation (which referents specify which).
                </Line>
                <Line>
                    Base case: x has an instance in the catalogue (some referent specifies x). Then x admits specification
                    directly.
                </Line>
                <Line>Inductive case: some value of x is a type. Then x admits specification (A.3).</Line>
                <Line>
                    Leaves: x has no instance and no type-valued property. x has no capacity for instances. It is literal
                    without needing the mark.
                </Line>
                <Line>
                    Marked literals: x has type-valued properties but is marked. Its values resolve to canonicals (A.5). x
                    is literal.
                </Line>
                <Line>
                    Every x is assigned exactly one of &#123;type, literal&#125;, provided the recursion in 3 terminates.
                </Line>
                <Line>
                    Termination: the catalogue is finite, so the recursion terminates iff the value relation (x above the
                    values of its properties) is acyclic. That is the condition the rules of specification must supply.
                </Line>
            </Paragraph>
            <Paragraph>
                So A is a formal specification conditional on one thing: acyclicity of the value relation. Given it,
                type-hood is decided for every referent, by a finite computation, from the catalogue alone.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    D. Types, canonicals, and movement between frames
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Every type has its canonical as an instance (A.6). So no type has zero instances: the canonical realizes
                    "at least one."
                </Line>
                <Line>
                    A referent in the identity role is a type in a frame that specifies it and a literal in a frame that
                    marks it.
                </Line>
                <Line>
                    Moving between frames therefore moves referents between symbolic and literal, with the canonical as the
                    exchange: type → canonical when the identity is marked (my Lamborghini); canonical → type when the mark
                    is lifted (bird's-eye).
                </Line>
                <Line>
                    Literal is the fixed point of the exchange: an identity whose canonical would be itself. It needs no
                    canonical because it has no instances to collapse. Nothing is lost in either direction because the
                    canonical is always there to receive the collapse.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    E. Finiteness and the tree
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    A finite catalogue has minimal elements under any acyclic relation. Those are the literals in C.4.
                </Line>
                <Line>
                    So type-hood can be inferred upward from values (C.3) and still bottom out, because the inference runs
                    over finitely many referents and stops at leaves that exist by finiteness.
                </Line>
                <Line>
                    Literal properties are literal <Word>
                        <Emphasis />
                        by usage
                    </Word>: in a finite catalogue, a property's values are the values actually recorded, and a property
                    whose recorded values admit no further specification is literal there. Another catalogue may specify
                    them.
                </Line>
                <Line>Conditions on specification for tree behaviour:</Line>
                <Paragraph>
                    <List />
                    <Line>Irreflexive: nothing specifies itself. Self-instance is individuality, not specification.</Line>
                    <Line>Acyclic on both the specification relation and the value relation.</Line>
                    <Line>
                        Unique immediate type: each instance specifies exactly one type directly. Without this the structure
                        is a DAG, not a tree. This is the condition that bears on subtyping and needs your ruling.
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    F. Definitions
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Property
                    </Word>: the identifier in a directed identification between two referents, recorded in both
                    representations, such that the pair has a value. A role, not a kind.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Type
                    </Word>: an identity in the identity role, not marked literal, that admits specification: either some
                    referent in the catalogue specifies it, or some value of its properties is a type. Equivalently, an
                    identity distinct from its canonical.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Literal
                    </Word>: an identity in the identity role with no instances in the frame, either because it is marked or
                    because none of its values are types. Equivalently, an identity identical to its canonical. If marked,
                    its type-valued properties resolve to canonicals.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonical
                    </Word>: the instance of a type that stands in when nothing more specific is said; the type name is its
                    synonym wherever an individual is required.
                </Line>
            </Paragraph>
            <Paragraph>
                The one gap I can see is C.7 and E.4: the specification is complete for deciding roles and type-hood, but
                termination and tree-shape are supplied by rules on specification we haven't written yet, not by A itself.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:40:03.305963Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, that was good but compress it down to a minimum set of English criteria analyst did capture that
                argument and then talk about whether or not the definition in the dictionary can simply come from context
            </Paragraph>
            <Paragraph>
                Yours is good and necessary, but now by referring to parts indirectly, can you take your certainty and turn
                it into something shorter to prove the point in bullets of English with a little bit of an explanation?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:40:16.285643Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    Minimum criteria
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Property and identity are roles, read off direction.
                    </Word> An identification runs from an identifier to an identified. The identifier is the property; the
                    identified is the identity. Both representations record the same identification, so either end tells you
                    the direction.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Every identity–property pair has a value, and the value is an identity.
                    </Word> The value belongs to the pair: string's length is number; my length might be a car.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        An identity is a type when it has instances.
                    </Word> It has instances if something in the catalogue specifies it, or if one of its values is a type,
                    unless it is marked literal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        An identity is literal when it has no instances.
                    </Word> Either it is marked, or none of its values are types. A literal is its own canonical.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A literal reads type-valued properties as canonicals.
                    </Word> Type name and canonical are synonyms; context selects. You own the canonical Lamborghini.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        In a finite, acyclic catalogue, every identity is decidably one or the other, and there is a bottom.
                    </Word> Finiteness gives the leaves; acyclicity makes the inference terminate.
                </Line>
            </Paragraph>
            <Paragraph>
                That is the whole argument. The proof in the long version was only showing that each of these reads off
                something already recorded.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Whether the definition can come from context
                </Word>
            </Paragraph>
            <Paragraph>
                Yes, and that is the point of the compression. Each criterion consumes something the catalogue already
                contains: the direction of an identification (from the two representations), the value (from the pair),
                instances (from the specification relation), the mark, and the canonical (from the synonym rule). None of
                "type," "property," or "literal" needs a dictionary entry, because none is a kind of referent. They are what
                a referent is doing in a given pair, in a given frame. Length has no entry saying it is a number; string's
                length is a number because that pair says so, and my length is whatever my pair says.
            </Paragraph>
            <Paragraph>
                Two things do have to be stated rather than read: the mark, which is a decision recorded in the catalogue,
                and the acyclicity rules on specification, which govern the catalogue rather than living in it. Everything
                else is context.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:43:17.213774Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This may be true, but you are inventing too much: about identifier and identified is an identity. Is 4 the
                identifier? Yes I seriously doubt that’s all there’s going to be as the representation of the relationship.
                Four what? When? The length of a spider when it’s a child? The most specific relationship between the
                identity and the identification and vice versa may be complex so I’m not sure that we know what an
                identifier is yet, but I do acknowledge that it’s the value of the property, I’m just not sure that that
                thing is the relationship. And maybe we have to solve that problem
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T10:43:25.703457Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Agreed, and I'll drop "identifier" and "identified." They were my words, not yours, and they smuggled in a
                claim that the relationship is exhausted by which end is doing what.
            </Paragraph>
            <Paragraph>
                Restated in the terms you actually gave: the relationship between an identity and a property is an
                identification. From the identity's side it is the identity's property (<Word>
                    <Verbatim />
                    string.length
                </Word>); from the property's side it is the property of the identity (<Word>
                    <Verbatim />
                    length(string)
                </Word>). Roles come from subject and object, and that is all I'm entitled to say.
            </Paragraph>
            <Paragraph>
                On the value: what we have is that the pair (identity, property) has a value, and 4 is that value. What we
                do not have is that 4 <Word>
                    <Emphasis />
                    is
                </Word> the most specific relationship between string and length. Your spider example shows why: length of
                what, at what time, measured how. The most specific relationship may carry all of that, with the value as
                one piece of it. So three things need keeping apart:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>the identification, which puts identity and property in relationship</Line>
                <Line>the most specific relationship between them, which may be complex</Line>
                <Line>the value, which is what the property yields and which sits somewhere inside that relationship</Line>
            </Paragraph>
            <Paragraph>
                My criteria used the third as if it were the second. Where that matters: "an identity is a type when one of
                its values is a type" is fine if the value is the whole relationship, and underdetermined if the value is a
                projection of it, because then the type-hood of the identity might depend on parts of the relationship the
                value doesn't carry, such as the time index.
            </Paragraph>
            <Paragraph>
                So the open problem is exactly the one you name: what is the most specific relationship between an identity
                and its identification, and is the value that relationship or a part of it? I'd rather take that up than
                patch the criteria around it.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T11:10:17.726267Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Let’s try to formalize:</Paragraph>
            <Paragraph>An identification identifies an identity identity =identification&gt; identity</Paragraph>
            <Paragraph>
                If identity and identification are related in subject object form both ways, the identification is an
                identifier Identity =&gt; identification =&gt; identity =|&gt; Identity -&gt; identifier
            </Paragraph>
            <Paragraph>
                Why? Because it means the identification is an object and not just a relationship, and now it’s an
                identifier
            </Paragraph>
            <Paragraph>The identity’s identifier Identity.identifier := (identity, identifier)</Paragraph>
            <Paragraph>The identifier of the identity identifier(identity) := (identifier,identity)</Paragraph>
            <Paragraph>Hopefully, we have the subject object direction on those right</Paragraph>
            <Paragraph>
                And then what’s left is what a type is: E&#91;x&#93;: x -&gt; identity =|&gt; identity -&gt; type
            </Paragraph>
            <Paragraph>Let’s try this for synonymous identifier === property</Paragraph>
            <Paragraph>
                Is that a decent start to formalizing? Do you understand the syntax perhaps you should write bullet points
                to express what the syntax means.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T11:10:41.214842Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, it's a decent start, and the canonical function does the job the value couldn't. Here is my reading of
                each line, so you can correct the syntax where I have it wrong.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity =identification&gt; identity
                    </Word> — the identity refers to itself through the identification. This is the first assumption of the
                    reflection written down: an identity relates to itself through identifications. The identification is in
                    the through-position only; nothing yet says it is a referent in its own right.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity =&gt; identification =&gt; identity
                    </Word> — I read the bare <Word>
                        <Verbatim />
                        =&gt;
                    </Word> as reference with the through-term left unspecified, so this is two relationships: the identity
                    refers to the identification, and the identification refers to the identity. Subject–object both ways.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        =|&gt;
                    </Word> — consequence: given the lines above, the line below.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity -&gt; identifier
                    </Word> — bare inheritance, <Word>
                        <Verbatim />
                        identity =identifier&gt; identity
                    </Word>. Because the identification is now an object as well as a relationship, it has become an
                    identifier, and the identity inherits from it. Note this has the same shape as the first line with
                    identifier in place of identification, so the rule says: an identification that is also an object is one
                    the identity inherits through. If that's the intended reading, the both-ways condition is what promotes
                    a through-term to a referent.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity.identifier := (identity, identifier)
                    </Word> — the identity's identifier is the canonical function with identity as subject: the most
                    specific relationship between them, seen from the identity's side.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identifier(identity) := (identifier, identity)
                    </Word> — the same, with identifier as subject. Since <Word>
                        <Verbatim />
                        (x,y)
                    </Word> is a referent and not a tuple, these are two referents, not one pair read backwards. That is
                    where "each side carries its own representation" lives, and it is also where the spider problem goes:
                    <Word>
                        <Verbatim />
                        (spider, length)
                    </Word> is as complex as the most specific relationship needs to be, and 4 is something it yields, not
                    the referent itself.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        E&#91;x&#93;: x -&gt; identity =|&gt; identity -&gt; type
                    </Word> — if anything inherits from the identity, the identity inherits from type. This is the "has
                    instances" criterion, and it makes type a referent inherited from, which is how the earlier remark about
                    a type being a type of type comes out: individuality, not membership.
                </Line>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identifier === property
                    </Word> — synonymy. Fine, and it retires my "identifier/identified" wording in favour of yours.
                </Line>
            </Paragraph>
            <Paragraph>Two questions on the syntax before going further:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Is <Word>
                        <Verbatim />
                        identity =&gt; identification
                    </Word> with the through-term unspecified meant to be satisfied by any <Word>
                        <Verbatim />
                        t
                    </Word>, or is there a particular one in mind, such as the identification itself?
                </Line>
                <Line>
                    The subject–object direction on the two <Word>
                        <Verbatim />
                        :=
                    </Word> lines reads right to me if <Word>
                        <Verbatim />
                        (x,y)
                    </Word> always has <Word>
                        <Verbatim />
                        x
                    </Word> as subject. Is that the convention?
                </Line>
            </Paragraph>
            <Paragraph>
                What is not yet in: the literal mark, and the inferred route to type through a type-valued <Word>
                    <Verbatim />
                    (identity, identifier)
                </Word>. Both can wait until the base is settled.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T11:15:43.974608Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>It means there’s some relationship that connects them. Existential.</Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Yes, the most specific relationship follows the direction of the syntax. Are you asking questions just
                    because?
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T11:15:57.116143Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The second one was unnecessary; the direction was already in the <Word>
                    <Verbatim />
                    :=
                </Word> lines. The first changed the reading, so worth asking.
            </Paragraph>
            <Paragraph>With both settled, the base reads:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x =&gt; y := E&#91;t&#93;: x =t&gt; y
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identity =&gt; identification, identification =&gt; identity =|&gt; identity -&gt; identifier
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identity.identifier := (identity, identifier)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identifier(identity) := (identifier, identity)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        E&#91;x&#93;: x -&gt; identity =|&gt; identity -&gt; type
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identifier === property
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Two things to add, and one constraint on how they can be added.</Paragraph>
            <Paragraph>The inferred route to type, where the value is a type:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (identity, identifier) -&gt; type =|&gt; identity -&gt; type
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The literal mark. It can't be written as "nothing inherits from identity," because by the Fundamental
                Theorem of Relationship the absence of a relationship is not a relationship. So the mark has to be asserted:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity -&gt; literal
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>and the canonical swap reads:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity -&gt; literal, (identity, identifier) -&gt; type =|&gt; (identity, identifier) === canonical(type)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                That leaves one conflict for your ruling: when <Word>
                    <Verbatim />
                    identity -&gt; literal
                </Word> holds and some <Word>
                    <Verbatim />
                    (identity, identifier) -&gt; type
                </Word>, the inferred route would also fire and give <Word>
                    <Verbatim />
                    identity -&gt; type
                </Word>. Either the mark takes precedence over inference, or the inferred route is written to require the
                absence of the mark, which the Fundamental Theorem doesn't allow. I'd guess the first, but that's your call.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:23:37.994210Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The absence of relationship can imply a relationship. You really believe that unmarried is invalid. You’re
                confusing existence with universality. In all cases, we cannot consider that. But it’s interesting as it
                means that it was very rarely ever want to write down that something is a literal because you’re going to
                get into a contradictory state. Better to have it implied in different contexts.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:23:49.237081Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. The theorem rules out taking the complement of a relationship <Word>
                    <Emphasis />
                    universally
                </Word> and calling the result a relationship; it doesn't rule out an absence in a context implying a
                relationship there. Unmarried is a status. I applied the universal case to an existential one.
            </Paragraph>
            <Paragraph>
                That also removes the conflict, because it changes which way literal runs. Not asserted, inferred:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    in a frame where no <Word>
                        <Verbatim />
                        x -&gt; identity
                    </Word> holds, <Word>
                        <Verbatim />
                        identity -&gt; literal
                    </Word> in that frame
                </Line>
            </Paragraph>
            <Paragraph>
                And then <Word>
                    <Verbatim />
                    identity -&gt; type
                </Word> and <Word>
                    <Verbatim />
                    identity -&gt; literal
                </Word> can't both fire, because the first needs an instance and the second needs its absence, in the same
                frame.
            </Paragraph>
            <Paragraph>
                Your point about never writing it down follows: <Word>
                    <Verbatim />
                    identity -&gt; literal
                </Word> asserted would survive into a frame that later specifies the identity and contradict <Word>
                    <Verbatim />
                    identity -&gt; type
                </Word> there. Inferred, it simply stops holding when an instance appears. Literal is frame-relative in
                exactly the way the earlier lists needed and I was trying to force with a mark.
            </Paragraph>
            <Paragraph>
                Which means the inferred route to type through a type-valued <Word>
                    <Verbatim />
                    (identity, identifier)
                </Word> should not yield <Word>
                    <Verbatim />
                    identity -&gt; type
                </Word> at all. It yields only that the identity admits specification, and its work is licensing the swap:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity -&gt; literal, (identity, identifier) -&gt; type =|&gt; (identity, identifier) === canonical(type)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                So the base is: type comes from instances, literal comes from their absence in context, and a type-valued
                property on a literal reads as the canonical. Three rules, nothing marked.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:24:37.050139Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                There’s no relationship between me and the Sam that my third neighbor might have caught two days ago. Me and
                that hypothetical Sam share no relationship. We don’t even share the relationship of no relationship. It’s
                just not a relationship.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:24:46.520102Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Understood. That draws the line sharper than I had it. Unmarried is not the absence of a relationship
                between you and someone you didn't marry; it's a relationship you have, to marriage, in your own
                representation. The salmon is the other case: no relationship, and no relationship of no relationship.
                Absence between two referents is nothing at all.
            </Paragraph>
            <Paragraph>
                So "literal" cannot be a relationship between the identity and the instances it doesn't have. Those are
                salmon. If it holds, it holds the way unmarried does: as a relationship the identity has, in its own
                representation, to the catalogue it sits in. In a finite catalogue that is a positive fact about what is
                written, not a fact about what isn't.
            </Paragraph>
            <Paragraph>
                Which is the reason it's better implied than written: <Word>
                    <Verbatim />
                    identity -&gt; literal
                </Word> is a relationship between the identity and one catalogue, and it stops being so the moment the
                catalogue changes. Written down, it looks like a property of the identity. Implied, it's a property of the
                identity-in-this-catalogue, which is what it is.
            </Paragraph>
            <Paragraph>
                The three rules stand, with that reading of the second: type from instances in the catalogue, literal from
                the identity's relationship to the catalogue as written, canonical for a type-valued property of a literal.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:25:27.807079Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, in fact, I would say that unmarried is an identification based on your relationship to the concept of
                marriage in your representation that’s right
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:25:30.590550Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Then it writes the same way as everything else:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        person =unmarried&gt; person
                    </Word>, with <Word>
                        <Verbatim />
                        (person, marriage)
                    </Word> the most specific relationship between them, and unmarried what it yields.
                </Line>
            </Paragraph>
            <Paragraph>
                Nothing about anyone the person didn't marry. The identification is the person's, the concept of marriage is
                in the person's representation, and the value comes from that pair.
            </Paragraph>
            <Paragraph>
                Literal takes the same form: <Word>
                    <Verbatim />
                    identity =literal&gt; identity
                </Word>, with <Word>
                    <Verbatim />
                    (identity, catalogue)
                </Word> the most specific relationship, and literal what it yields in that catalogue. An identification the
                identity has, to the catalogue in its representation. The absent instances never enter.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:26:17.723900Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, although to have a consistent system, we must say that that thing is related to not being married and
                married, and not married, will be in dichotomy
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T13:26:20.691728Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Agreed. The relationship is to marriage, and married/unmarried is the dichotomy of what <Word>
                    <Verbatim />
                    (person, marriage)
                </Word> can yield. The dichotomy is internal to the value, not a relationship to the unmarried. That keeps
                it off the salmon.
            </Paragraph>
            <Paragraph>
                Same shape for <Word>
                    <Verbatim />
                    (identity, catalogue)
                </Word>: the relationship is to the catalogue, and type/literal is its dichotomy. An identity relates to the
                catalogue it is in; that relationship yields one of the two. Neither pole is an absence.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:25:50.479572Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Here’s the complicated part of the arrows. Each one of them is the type relationship -taped the property,
                but inheritance drama type, which we also have to work on in these semantics
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:26:02.534868Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me read that back through the transcription noise: each arrow is itself a typed relationship — the
                through-term types it the way a property does — but inheritance (<Word>
                    <Verbatim />
                    -&gt;
                </Word>) is inheritance <Word>
                    <Emphasis />
                    from a type
                </Word>, and that's a different thing we haven't given semantics for yet. Correct me if that's not it.
            </Paragraph>
            <Paragraph>
                If it is, the tension is real. In <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>, t sits where a property sits: <Word>
                    <Verbatim />
                    (x, t)
                </Word> exists, the relationship carries a value, everything from this conversation applies. But in <Word>
                    <Verbatim />
                    x -&gt; identity
                </Word>, the arrow was doing double duty. We defined it as <Word>
                    <Verbatim />
                    x =identity&gt; x
                </Word>, which makes identity a through-term like any other, and yet we also used it to mean "x is an
                instance of identity," which is the type relationship. Those aren't obviously the same, and the theorem
                <Word>
                    <Verbatim />
                    E&#91;x&#93;: x -&gt; identity =|&gt; identity -&gt; type
                </Word> quietly assumed they were: it read "something inherits from identity" as "identity has an instance."
            </Paragraph>
            <Paragraph>
                So the question for the inheritance semantics is whether <Word>
                    <Verbatim />
                    x =T&gt; x
                </Word> — x referring to itself through T — is what instancehood <Word>
                    <Emphasis />
                    is
                </Word>, or whether instancehood is something more, such as the specification we discussed: x's values
                instantiating T's values in parallel, <Word>
                    <Verbatim />
                    "1234"
                </Word> under string with 4 under number. The first makes inheritance primitive and specification a
                consequence; the second makes inheritance an abbreviation for a parallel structure across all the
                properties.
            </Paragraph>
            <Paragraph>
                The canonical may decide it. If the type's name is a synonym for its canonical, then <Word>
                    <Verbatim />
                    x -&gt; T
                </Word> could read as x referring to itself through T's canonical: to be a string is to relate to yourself
                the way the canonical string does. That would make inheritance the typed relationship whose through-term is
                the canonical, one arrow, no double duty.
            </Paragraph>
            <Paragraph>
                Where would you like to start: the reading of <Word>
                    <Verbatim />
                    x -&gt; T
                </Word> itself, or the parallel-specification structure underneath it?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:27:41.459024Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, I’d like you to try to take apart at least a list form if not in graphical form the sort of set of
                identity to identification relationships that this network suggests to come up with a notion of type. To
                bootstrap the concept of a type we need to have types and so there’s recursion and this is the essential
                recursion.
            </Paragraph>
            <Paragraph>
                You can also give me some feedback on how my semantic theory is doing in covering this particular topic.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:28:09.175459Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    A. The network as built, identity → identification pairs
                </Word>
            </Paragraph>
            <Paragraph>
                Each line: subject, through-term, and what the pair <Word>
                    <Verbatim />
                    (subject, through)
                </Word> contributes.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        identity =identification&gt; identity
                    </Word> — the base. Identity is what self-relates through identifications.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identity =&gt; identification
                    </Word> and <Word>
                        <Verbatim />
                        identification =&gt; identity
                    </Word> — both-ways reference. Promotes the identification to an object.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identity -&gt; identifier
                    </Word> — consequence of 2. The through-term, now an object, is an identifier.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identity.identifier := (identity, identifier)
                    </Word>, <Word>
                        <Verbatim />
                        identifier(identity) := (identifier, identity)
                    </Word> — the two most-specific relationships, one per representation.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (identity, identifier)
                    </Word> yields a value, itself an identity.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x -&gt; identity
                    </Word> for some x — identity has an instance.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        E&#91;x&#93;: x -&gt; identity =|&gt; identity -&gt; type
                    </Word> — instances make a type.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identity =literal&gt; identity
                    </Word> via <Word>
                        <Verbatim />
                        (identity, catalogue)
                    </Word> — the literal/type dichotomy as the yield of the identity's relationship to its catalogue.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        T === canonical(T)
                    </Word> in individual position — the synonym swap.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    B. The recursion, isolated
                </Word>
            </Paragraph>
            <Paragraph>Follow what each rule consumes:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Rule 7 defines type using <Word>
                        <Verbatim />
                        -&gt;
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        -&gt;
                    </Word> (rule 3) is produced by the both-ways condition — but read as <Word>
                        <Emphasis />
                        instancehood
                    </Word> (rule 6), it means specification: x's values instantiate identity's values in parallel.
                </Line>
                <Line>Specification of values needs the values' types (4 instantiates number).</Line>
                <Line>Types come from rule 7.</Line>
            </Paragraph>
            <Paragraph>
                So: <Word>
                    <Bold />
                    type needs instance, instance needs specification, specification needs the types of the values, which needs type.
                </Word> That is the essential recursion, and it is not a defect of the formalization — it's the actual
                structure of the concept. You cannot say what an instance of string is without number already being a type.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    C. How the network resolves it, in order of what does the work
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Roles, not kinds.
                    </Word> Type, property, instance are positions in pairs. The recursion is therefore over <Word>
                        <Emphasis />
                        occurrences
                    </Word>, not over a fixed population that must be founded in advance. The same referent recurs in
                    different positions without regress — length as property of string, identity over unit.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The base of the recursion is rule 1 itself.
                    </Word> Self-relation through identification needs no types. Every referent has that before any typing
                    exists. The recursion doesn't bootstrap from nothing; it bootstraps from identity.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The catalogue is finite
                    </Word>, so the value relation descends to referents whose pairs yield no further types — literals by
                    rule 8. The recursion is grounded not by an axiom of foundation but by the catalogue running out. Same
                    move as transduction: finite at every moment, unbounded in advance.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The canonical closes the loop where it won't ground.
                    </Word> Where a type is needed as an instance (type-of-type, the swap), individuality and the canonical
                    supply it without descending. Rule 9 says: every type carries at least one instance <Word>
                        <Emphasis />
                        internally
                    </Word> — its canonical — so rule 7's existential can be met from inside. That is the bootstrap: type is
                    defined through instance, and the canonical is the instance every type is born with.
                </Line>
            </Paragraph>
            <Paragraph>
                So the essential recursion is resolved twice over, and by different mechanisms at different ends: literals
                ground the descent (finiteness), canonicals license the self-application (individuality). A fixpoint with a
                floor.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    D. Feedback on coverage
                </Word>
            </Paragraph>
            <Paragraph>
                Handled cleanly by the theory as it stands: role-relativity (type/property as positions — this is doing the
                most work and is the most distinctive claim); frame-relativity of type vs. individual; the type-of-type
                question via individuality, which is genuinely a better answer than the universe-hierarchy answers in type
                theory, because it doesn't multiply levels; the literal/type dichotomy as a yield rather than a mark, after
                your correction; the canonical as the guaranteed instance — this is the piece that most existing accounts
                lack and yours has natively.
            </Paragraph>
            <Paragraph>Under-determined, in order of consequence:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The reading of  0  .
                    </Word> It carries both "promoted through-term" (rule 3) and "instance of" (rule 6). Until these are
                    unified — possibly via the canonical reading, <Word>
                        <Verbatim />
                        x -&gt; T
                    </Word> as x self-relating the way canonical(T) does — theorem 7 rests on a pun. This is the
                    load-bearing gap.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What the value is.
                    </Word> We know <Word>
                        <Verbatim />
                        (identity, identifier)
                    </Word> yields it and that it's an identity; we don't know whether it's the pair itself, a projection,
                    or something the transpiler extracts. The spider's length-when-young lives here.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Parallel specification.
                    </Word> "x's values instantiate T's values" is used but not written. It needs the cohort machinery, I
                    suspect — the values specialize together.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Acyclicity.
                    </Word> Finiteness gives a floor only if the value relation doesn't cycle. Nothing yet prevents two
                    identities from being each other's value types.
                </Line>
            </Paragraph>
            <Paragraph>
                None of these are foundational holes; 2–4 are ordinary open work. 1 is the one I'd put first, since C.4
                quietly depends on it.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:28:41.704166Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>
                    Doesn’t the identification become an identifier? You need to not confuse the double arrow and the single
                    arrow because the single arrow is inheritance so try again if you need to.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:28:50.703949Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Right, I collapsed them. Taking rule 3 again with the arrows kept apart:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        identity =&gt; identification, identification =&gt; identity
                    </Word> — both-ways reference. This is what promotes the identification to an object. <Word>
                        <Bold />
                        The promotion is done by the double arrows, and its product is the identifier.
                    </Word> The identification becomes an identifier.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        identity -&gt; identifier
                    </Word> — this is inheritance, <Word>
                        <Verbatim />
                        identity =identifier&gt; identity
                    </Word>. It is not the promotion; it is what <Word>
                        <Emphasis />
                        follows
                    </Word> from it: once the identification is an identifier, the identity inherits from it.
                </Line>
            </Paragraph>
            <Paragraph>
                So in list B, the network line should read: rule 2 (double arrows) turns identification into identifier;
                rule 3 states the inheritance that results. The through-term isn't "promoted by <Word>
                    <Verbatim />
                    -&gt;
                </Word>" — I had the product doing the producing.
            </Paragraph>
            <Paragraph>
                That cleans up gap 1 considerably. There is no pun on <Word>
                    <Verbatim />
                    -&gt;
                </Word>. It means inheritance everywhere: <Word>
                    <Verbatim />
                    identity -&gt; identifier
                </Word> in rule 3 and <Word>
                    <Verbatim />
                    x -&gt; identity
                </Word> in rule 6 are the same relationship, self-relation through the inherited referent. What I called two
                readings was me misattributing the promotion to the arrow.
            </Paragraph>
            <Paragraph>
                What remains of the gap is narrower and cleaner: rule 7 reads <Word>
                    <Verbatim />
                    E&#91;x&#93;: x -&gt; identity
                </Word> as identity <Word>
                    <Emphasis />
                    having an instance
                </Word>. Since <Word>
                    <Verbatim />
                    x -&gt; identity := x =identity&gt; x
                </Word>, the question is only whether inheriting-from is the same as being-an-instance-of, or whether
                instancehood is inheritance plus something — the parallel specification of values. The recursion in list B
                then runs through that question alone, and the canonical bootstrap (C.4) survives unchanged: every type
                inherits from itself via individuality, so the existential in rule 7 can always be met from inside.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:32:26.349644Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, isn’t this the kind of thing that we’re figuring out because we’re coming up with a way of defining
                properties and we’re coming up with relationships between types and we’re coming up with instances as
                special ways of specifying the types where you replace them with instances. Maybe I haven’t figured this out
                yet, but you can see the essential structure of it. I don’t think it should be that different.
            </Paragraph>
            <Paragraph>Instance -&gt; canonical</Paragraph>
            <Paragraph>This is like Type -&gt; parent</Paragraph>
            <Paragraph>
                And then the canonical thing is a bit weird where the type becomes the canonical symbol for the instanve and
                vice versa
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:32:37.348432Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, I see it. The two arrows have the same form because they are the same relationship at different levels:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        instance -&gt; canonical
                    </Word> — an instance inherits from the canonical of its type
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        type -&gt; parent
                    </Word> — a type inherits from its parent type
                </Line>
            </Paragraph>
            <Paragraph>
                One arrow, inheritance, and the hierarchy of types and the population of instances are the same structure.
                An instance is to its canonical what a subtype is to its parent: a specialization of it. That would make
                specification not a second mechanism after all — specifying a type is inheriting from its canonical and
                replacing what the canonical leaves open. <Word>
                    <Verbatim />
                    "1234" -&gt; canonical(string)
                </Word>, with the length slot filled by 4 where the canonical holds it open.
            </Paragraph>
            <Paragraph>
                And then the weird part, which is the hinge of the whole thing: at the canonical, the levels touch. The
                canonical is an instance, but the type's name is its symbol, so <Word>
                    <Verbatim />
                    T
                </Word> in symbol position and <Word>
                    <Verbatim />
                    canonical(T)
                </Word> in instance position are one referent under the swap. That's what lets the two hierarchies be one:
                the parent chain of types and the canonical chain of instances are the same chain read through the synonym.
                Going up from an instance you hit its canonical, whose symbol is the type, whose parent's canonical is next,
                and so on.
            </Paragraph>
            <Paragraph>
                This also explains why the direction feels reversible — the type is the canonical symbol for the instance
                and the instance is the canonical instance for the symbol. That's your definition of canonical from the
                Sketch, both halves at once: <Word>
                    <Verbatim />
                    x =y&gt; y
                </Word> and <Word>
                    <Verbatim />
                    x =x&gt; y
                </Word>, one pair, two collapses.
            </Paragraph>
            <Paragraph>
                If that's the structure, the one thing it asks for is what the canonical leaves open — the slots an instance
                may replace. That's where the spider's length-when-young went, and it's the same question as "what does
                <Word>
                    <Verbatim />
                    (identity, identifier)
                </Word> yield." One problem now, not two.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:35:00.259221Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Also, there are different types of identification, but now that we have properties, I think we agree that
                when you create an instance, and we might want to use the semantics of specific here because you’ll know it
                seem to like the word specification. A type specifies something specific. In programming it’s more like a
                class associated with the type, and you can instantiate an instance. We don’t quite have that in the
                theoretical end of this so it’s a little different semantically speaking.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:35:13.080415Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a real difference worth keeping. In programming there are three things: the type, the class, and
                instantiation as an <Word>
                    <Emphasis />
                    act
                </Word> — the constructor runs, an instance comes into being that didn't exist. The class is the machinery
                for making instances; the type is what they all satisfy. Our theory has no constructor. Nothing comes into
                being when <Word>
                    <Verbatim />
                    "1234" -&gt; canonical(string)
                </Word> holds; the relationship either holds in the catalogue or it doesn't. If anything corresponds to the
                act, it's transduction — inscribing a new referent into the catalogue — which is a catalogue event, not a
                type event. So the programming pair splits: type stays with the symbol, class-and-constructor goes to the
                catalogue and its keeper.
            </Paragraph>
            <Paragraph>
                On the semantics of <Word>
                    <Emphasis />
                    specific
                </Word>: what I notice from usage is that specific is comparative before it is absolute. A specification
                makes something <Word>
                    <Emphasis />
                    more
                </Word> specific than what it specifies — "a car" to "a red car" to "my red car." That fits the structure we
                just built: to specify is to inherit and replace what the canonical leaves open, and each replacement is a
                step down in openness. Specific-ness is position in the inheritance chain, and "specification" names the
                descent. The most specific relationship, <Word>
                    <Verbatim />
                    (x,y)
                </Word>, is then the terminus of exactly this descent — the point past which nothing further can be
                replaced. Which suggests "specific" was already a native SRT word before we borrowed it: the canonical
                function has been marking maximal specificity all along.
            </Paragraph>
            <Paragraph>
                So the semantic difference from programming comes out as: their "instantiate" is an act that produces a
                referent; our "specify" is a relationship that orders referents by openness. The two meet only at
                transduction, when a specification that wasn't in the catalogue gets inscribed.
            </Paragraph>
            <Paragraph>
                By your admissibility test — both words in one slot, selecting differently: "the type specifies the
                instance" and "the type instantiates the instance" are both sayable, but specify selects the ordering and
                instantiate selects the event. That would make the distinction worth formalizing, with instantiate belonging
                to the runtime (receive, traverse, transduce, inscribe) rather than to the type semantics proper.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:38:21.210414Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We can express things like that relationally but it’s not really the point we don’t exactly have a
                constructor and in the semantic domain exactly when it is a child to get constructed. Is it the sex? Is it
                some factor process that runs from sex to childbirth? :) that is an abstraction and I would like this to be
                far more general than that because you’re supposed to be able to write anything in this and well you can
                certainly write anything in programming language. It’s not the kind of thing that you used to create a
                dictionary like this.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:38:28.490425Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Point taken, and the child example shows why the question itself was borrowed. "When does the instance get
                constructed" presumes a moment of construction, and semantically there isn't one — there's a continuum of
                relationships from conception to birth to naming, and any cut through it is an abstraction imposed after the
                fact. A dictionary doesn't need the cut. The child is referable when there's a referent, and the catalogue
                records relationships, not the process that led to them being inscribable.
            </Paragraph>
            <Paragraph>
                So the general statement is just: the theory expresses relationships, and construction-talk is one family of
                relationships you <Word>
                    <Emphasis />
                    can
                </Word> write down when you want them — a factory process, a pregnancy, a constructor call — not machinery
                the semantics itself runs on. Programming languages need the constructor because they must produce the
                runtime object; a theory of reference needs only that the referent be in the catalogue with its
                relationships. Where the referent "came from" is content, not framework.
            </Paragraph>
            <Paragraph>
                Which leaves the type semantics standing on what we actually built, with nothing operational in it:
                inheritance as the one arrow, specification as descent in openness, the canonical as where type and instance
                exchange symbols, literal/type as the yield of the identity's relationship to its catalogue. All relational,
                all writable, no acts.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:45:23.704131Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So then, why don’t you create a big list of statements that try to get at what this theory might think the
                difference of parent and child type, type and canonical, and canonical and instance, all in terms of
                specification of types and properties. We have a very specific triangle sort of way that we came up with for
                type and instance
            </Paragraph>
            <Paragraph>x =x.p&gt; p y -&gt; x</Paragraph>
            <Paragraph>It would seem that: y.p : x.p</Paragraph>
            <Paragraph>Might that be true?</Paragraph>
            <Paragraph>But when does y become a canonical?</Paragraph>
            <Paragraph>What is Parent &lt; mother &lt; modern-mother &lt; my-mother &lt; Susan</Paragraph>
            <Paragraph>
                How did that happen? Isn’t susan an instance of all of them? Does she have a most specific type?
            </Paragraph>
            <Paragraph>This might be better when is a type and</Paragraph>
            <Paragraph>x</Paragraph>
        </Message>
        <Message
            at="2026-08-31T19:46:16.308818Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    A. The triangle, worked
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        x =x.p&gt; p
                    </Word> — x refers to p through x's most specific relationship to it. The property in place.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        y -&gt; x
                    </Word> — y inherits from x: <Word>
                        <Verbatim />
                        y =x&gt; y
                    </Word>.
                </Line>
                <Line>
                    Inheritance specializes what is inherited: y's relationship to p is a specialization of x's relationship
                    to p, below it.
                </Line>
                <Line>
                    Therefore <Word>
                        <Verbatim />
                        y.p : x.p
                    </Word> — <Word>
                        <Bold />
                        yes, I think the conjecture is true, and it is the typing judgment itself.
                    </Word> The colon is nothing extra: it is inheritance, observed at a single property. <Word>
                        <Verbatim />
                        "1234" -&gt; string
                    </Word> yields <Word>
                        <Verbatim />
                        "1234".length : string.length
                    </Word>, i.e. 4 : number.
                </Line>
                <Line>
                    Corollary: type-checking is checking that every property's specialization descended rather than
                    departed. A judgment per slot, all licensed by one arrow.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    B. Parent and child type, type and instance — one relationship
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    A child type is y with <Word>
                        <Verbatim />
                        y -&gt; x
                    </Word> where some values of y are still types: y replaced some open slots and left others open.
                </Line>
                <Line>
                    An instance is y with <Word>
                        <Verbatim />
                        y -&gt; x
                    </Word> where no values of y are types: everything replaced, <Word>
                        <Verbatim />
                        (y, catalogue)
                    </Word> yields literal.
                </Line>
                <Line>
                    So parent/child-type and type/instance are <Word>
                        <Bold />
                        the same arrow
                    </Word>, distinguished only by what the child still leaves open. There is no second mechanism.
                </Line>
                <Line>
                    Specification is the descent: each step down replaces at least one type-valued slot with something more
                    specific.
                </Line>
                <Line>
                    The descent ends at literals because the catalogue is finite. The last step of a chain is the
                    type/instance step only in retrospect.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    C. When y becomes a canonical
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    y is the canonical of x when y replaces <Word>
                        <Bold />
                        nothing
                    </Word>: for every property, <Word>
                        <Verbatim />
                        y.p === x.p
                    </Word> under the synonym swap — y's values are the canonicals of x's values.
                </Line>
                <Line>
                    So the canonical is the instance whose specialization is trivial. It inherits everything and fixes
                    nothing, which is why it spans the representational space of x, and why its symbol and the type's name
                    interchange: identical profile, different position.
                </Line>
                <Line>
                    A typical instance replaces slots (Wuthering Heights has its particular everything); the canonical holds
                    them all at the type.
                </Line>
                <Line>
                    This is also why the canonical is what you infer for "my Lamborghini": an instance is required, nothing
                    was replaced in what you said, so the trivial specialization is the only admissible one.
                </Line>
                <Line>
                    And it makes the virality automatic: the canonical's type-valued slots resolve to canonicals in turn,
                    all the way down, because that's what "replacing nothing" means at each level.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    D. The chain: Parent &lt; mother &lt; modern-mother &lt; my-mother &lt; Susan
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        mother -&gt; parent
                    </Word>: replaces the open sex-slot.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        modern-mother -&gt; mother
                    </Word>: replaces the era-slot.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        my-mother -&gt; modern-mother
                    </Word>: replaces the whose-slot with me — note the replacement here is an <Word>
                        <Emphasis />
                        individual
                    </Word>, which is what starts pulling the chain toward the literal end.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        Susan -&gt; my-mother
                    </Word>: replaces everything remaining. <Word>
                        <Verbatim />
                        (Susan, catalogue)
                    </Word> yields literal. The descent ends.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Susan is an instance of all of them
                    </Word> — by transitivity through the common source, each <Word>
                        <Verbatim />
                        -&gt;
                    </Word> composing down the one chain. "Instance of parent" and "instance of my-mother" are the same
                    relationship at different distances.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Her most specific type is my-mother
                    </Word>: the least referent above her in the chain. She has one iff the structure above her is a tree —
                    unique immediate type, the acyclicity condition from before, now load-bearing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        How did it happen
                    </Word>: no event. Each <Word>
                        <Verbatim />
                        &lt;
                    </Word> is one specification step, and "type" versus "instance" is only where the yield flips. The chain
                    doesn't change kind partway down; our reading of it does.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    E. The interesting seam: my-mother
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    In the catalogue as far as we know, my-mother has exactly one admissible instance. So its canonical
                    <Word>
                        <Emphasis />
                        is
                    </Word> Susan, and the name "my mother" swaps for Susan wherever an individual is required.
                </Line>
                <Line>
                    In a frame of uncertainty — I haven't told you who she is — my-mother behaves as a type and you hold its
                    inferred canonical, exactly the Lamborghini move.
                </Line>
                <Line>
                    So the same referent is a type with a one-instance collapse or a synonym for Susan, depending on the
                    frame. The seam between C and D is not in the chain; it is in the catalogue that reads it.
                </Line>
            </Paragraph>
            <Paragraph>
                Your last line cut off — "This might be better when is a type and x" — so if there was a further
                construction there, it didn't come through.
            </Paragraph>
        </Message>
    </Chapter>
);
