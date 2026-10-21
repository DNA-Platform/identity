import { Bold, Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-15T18:58:39.673398Z"
        >
            <Origin>019e2d01-3314-773e-92a8-e620a0f1f9ee</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In checkers if you are going to capture two pieces and the first one is forward, can the second one be
                backwards
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T18:58:44.654833Z"
        >
            <Origin>019e2d01-3314-7ba2-851e-b82a4740907f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No. In standard checkers (American/English draughts), a regular piece (a "man") can only move and capture in
                the forward direction. This applies to every jump in a multi-jump sequence — each individual jump must be
                forward.
            </Paragraph>
            <Paragraph>
                Only a king can capture backwards. If you crown mid-sequence by reaching the back row, rules vary: in most
                rule sets (including official ACF rules), the turn ends upon crowning, so you can't immediately continue
                with a backward jump.
            </Paragraph>
            <Paragraph>
                In international draughts (10x10), men <Word>
                    <Emphasis />
                    can
                </Word> capture backwards, so the answer flips there.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:04:25.783256Z"
        >
            <Origin>019e2d06-7b04-737a-88de-b27dd4cb6ecf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the rule in checkers where you have to move</Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:04:30.229461Z"
        >
            <Origin>019e2d06-7b04-7b56-ba78-c462d0259f4e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're thinking of the <Word>
                    <Bold />
                    forced capture
                </Word> rule (sometimes called "huffing" in older variants).
            </Paragraph>
            <Paragraph>
                In standard checkers, if you have a capture available, you <Word>
                    <Bold />
                    must
                </Word> take it. You can't choose to make a regular move instead. If multiple captures are available, you
                can pick which one — but you have to capture something.
            </Paragraph>
            <Paragraph>
                In the old "huffing" rule (now obsolete in tournament play), if you failed to make a required capture, your
                opponent could remove the piece that should have captured. Modern rules just require you to take back the
                move and make the capture.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:14:40.086775Z"
        >
            <Origin>019e2d0f-db8b-7fdd-aa63-ecbb03e33e88</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What can the king in checkers do?</Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:14:45.539825Z"
        >
            <Origin>019e2d0f-db8b-7a49-a365-831158da106f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                A king can move and capture in <Word>
                    <Bold />
                    both directions
                </Word> — diagonally forward and backward, one square at a time (or jumping over an opponent's piece to
                capture).
            </Paragraph>
            <Paragraph>
                That's the only difference from a regular piece. In standard American checkers, kings cannot move multiple
                squares like in international draughts or chess — they're still one square per move, just no longer
                restricted to forward-only.
            </Paragraph>
            <Paragraph>
                You get a king by reaching the opponent's back row (the "king row"), and the piece is crowned by stacking a
                captured piece on top.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:17:41.730546Z"
        >
            <Origin>019e2d12-a0ed-7fd9-926b-1567a162346a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>If I can’t move in checkers, what does that mean?</Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:17:44.459727Z"
        >
            <Origin>019e2d12-a0ed-7746-a5db-ee6b16b2e001</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It means you <Word>
                    <Bold />
                    lose
                </Word>. In checkers, if it's your turn and you have no legal move available — either because all your
                pieces are blocked or you have no pieces left — you lose the game.
            </Paragraph>
            <Paragraph>
                This is different from chess, where being unable to move (stalemate) is a draw. In checkers, being stuck is
                a loss.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:23:28.796495Z"
        >
            <Origin>019e2d17-ebb3-7a49-9c46-776bd859a977</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>In chat, what happens if you can’t move but you’re not in check</Paragraph>
        </Message>
        <Message
            at="2026-05-15T19:23:32.677959Z"
        >
            <Origin>019e2d17-ebb3-7421-95e8-f51a66111762</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's <Word>
                    <Bold />
                    stalemate
                </Word>, and it's a draw in chess.
            </Paragraph>
            <Paragraph>
                If it's your turn, your king isn't in check, but you have no legal move available, the game ends in a tie.
                Neither player wins. This is one of the most important differences between chess and checkers — the same
                situation (no legal moves) is a loss in checkers but a draw in chess.
            </Paragraph>
            <Paragraph>(I assume you meant "chess" rather than "chat.")</Paragraph>
        </Message>
    </Chapter>
);
