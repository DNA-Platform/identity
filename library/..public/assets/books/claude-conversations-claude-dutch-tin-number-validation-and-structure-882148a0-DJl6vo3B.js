var B=Object.defineProperty;var s=(v,D)=>B(v,"name",{value:D,configurable:!0});import{jsxs as r,jsx as e}from"react/jsx-runtime";import{$ as I}from"@dna-platform/chemistry";import{$ as k,B as C,V as y,S as A,a as z,b as x,W as L,P as M,c as T,d as W,M as E,e as F,A as H,O as o,I as O,f as V,D as j,g as h,h as l,j as c,i as w}from"./.cover-BEvVg_I1.js";import{Chapter as N,Title as g,Author as P,Subject as _,Paragraph as n,Svg as q,Synopsis as R,Parenthetical as p,TableOfContents as G,Section as U,Heading as f,Content as u,Word as i,Date as Z,Bold as t,List as m,Line as a,Emphasis as d,Append as K}from"@dna-platform/public";import"styled-components";const S=class S extends k{};s(S,"$ClaudeDutchTinNumberValidationAndStructure882148a0");let b=S;const X=s(()=>r(N,{children:[e(C,{}),e(y,{children:A()}),e(y,{children:z()}),e(x,{ground:"#f6f3e8",band:"#e2d6a6",bandInk:"#5c4d12",foot:"#c6b46a",footInk:"#4a3d0c",ink:"#5c4d12"}),e(L,{x:"-32",y:"-26"}),r(M,{children:[e(T,{children:"[Doug](/dougs-story/)"}),e(T,{children:"[Claude](/dougs-claude/)"})]}),e(W,{from:"2026-02-23T11:43:28.002151Z",to:"2026-02-23T11:46:55.173699Z"}),e(E,{shown:"4",all:"4"}),e(g,{children:"[Dutch TIN number validation and structure](/claude-dutch-tin-number-validation-and-structure-882148a0/)"}),e(P,{children:"[Doug](/dougs-story/)"}),e(_,{children:"[Conversations](/our-conversations/)"}),e(F,{children:"[Miscellaneous](/claude-miscellaneous/)"}),e(H,{children:"[DNA Legacy](/dougs-claude/#dna-legacy)"}),e(o,{children:"882148a0-9abe-46c0-ae3a-c416651b8600"}),r(n,{children:[e(O,{}),e(q,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),Y=s(()=>r(N,{children:[e(R,{}),r(g,{children:[e(p,{}),"[Synopsis](/claude-dutch-tin-number-validation-and-structure-882148a0/)"]}),e(n,{children:`The user explored the technical structure of Dutch TIN numbers (BSN - Burgerservicenummer), requesting a rigorous analysis of validation constraints followed by generation of 10-15 random valid examples with mathematical proofs. Claude researched and implemented the BSN's "elfproef" (11-proof) algorithm, which uses weighted sum validation with weights [9,8,7,6,5,4,3,2,-1] where the sum must be divisible by 11 and positive, with at most one leading zero permitted. Claude generated 12 valid BSNs using Python, providing detailed mathematical verification for each showing the weighted calculations, remainders, and constraint satisfaction.`})]}),"Synopsis"),$=s(()=>r(N,{children:[e(G,{}),e(V,{}),r(g,{children:[e(p,{}),"[Table of Contents](/claude-dutch-tin-number-validation-and-structure-882148a0/#table-of-contents)"]}),r(U,{children:[e(f,{children:"February 2026"}),e(n,{children:e(u,{children:"[23 February 2026](/claude-dutch-tin-number-validation-and-structure-882148a0/#23-february-2026)"})}),r(n,{children:[e(p,{}),e(i,{children:e(u,{children:"[Dutch TIN number validation and structure](/claude-dutch-tin-number-validation-and-structure-882148a0/)"})}),e(i,{children:e(u,{children:"[Synopsis](/claude-dutch-tin-number-validation-and-structure-882148a0/#synopsis)"})}),e(i,{children:e(u,{children:"[Table of Contents](/claude-dutch-tin-number-validation-and-structure-882148a0/#table-of-contents)"})})]})]})]}),"Table"),J=s(()=>r(N,{children:[e(j,{children:e(Z,{children:"[23 February 2026](2026-02-23)"})}),e(g,{children:"[23 February 2026](/claude-dutch-tin-number-validation-and-structure-882148a0/#23-february-2026)"}),r(h,{at:"2026-02-23T11:43:28.002151Z",children:[e(o,{children:"019c8a4f-be7d-7248-90e2-301eeb639aae"}),e(l,{children:"[Doug](/dougs-story/)"}),e(n,{children:"Can you rigorously look up the constraints for a dutch TIN number and then generate 10-15 random ones and for each, prove why it satisfies the constraints? And then tell me if all ID types have this sort of structure. It's interesting"})]}),r(h,{at:"2026-02-23T11:44:38.664389Z",children:[e(o,{children:"019c8a4f-be7d-7248-90e2-301f7915f7e2"}),e(l,{children:"[Claude](/dougs-claude/)"}),e(n,{children:"Let me look up the exact constraints for Dutch TIN numbers."}),e(c,{children:"Searched the web for “Dutch TIN BSN number validation rules constraints”"}),e(c,{children:"Searched the web for “BSN elfproef 11-check algorithm exact formula”"}),e(n,{children:"Now I have the full picture. Let me write a script to generate valid BSNs with full proofs."}),e(c,{children:`Ran cat << 'EOF' > /home/claude/bsn_gen.py import random def validate_bsn(digits): """Validate BSN using elfproef (11-proof) with weights [9,8,7,6,5,4,3,2,-1]""" weights = [9, 8, 7, 6, 5, 4, 3, 2, -1] total = sum(d * w for d, w in zip(digits, weights)) return total % 11 == 0 and total > 0 def generate_bsn(): """Generate a random valid BSN""" while True: # Generate first 8 digits (first digit can be 0, but not both first two) first8 = [random.randint(0, 9) for _ in range(8)] # Calculate what N9 needs to be # We need: (9*N1 + 8*N2 + 7*N3 + 6*N4 + 5*N5 + 4*N6 + 3*N7 + 2*N8 - N9) % 11 == 0 # So: partial_sum - N9 ≡ 0 (mod 11) # N9 ≡ partial_sum (mod 11) partial = sum(d * w for d, w in zip(first8, [9, 8, 7, 6, 5, 4, 3, 2])) n9 = partial % 11 # N9 must be a single digit (0-9), so if remainder is 10, skip if n9 > 9: continue digits = first8 + [n9] # Check: no more than one leading zero if digits[0] == 0 and digits[1] == 0: continue # Check sum > 0 (almost always true unless all zeros) total = sum(d * w for d, w in zip(digits, [9, 8, 7, 6, 5, 4, 3, 2, -1])) if total <= 0: continue return digits print("=" * 80) print("DUTCH BSN (Burgerservicenummer) — CONSTRAINT SUMMARY") print("=" * 80) print() print("The BSN uses the 'elfproef' (11-proof), a check digit algorithm.") print() print("CONSTRAINTS:") print(" 1. Exactly 9 digits: N1 N2 N3 N4 N5 N6 N7 N8 N9") print(" 2. At most one leading zero (cannot start with '00')") print(" 3. Weighted sum using weights [9, 8, 7, 6, 5, 4, 3, 2, -1]:") print(" S = 9×N1 + 8×N2 + 7×N3 + 6×N4 + 5×N5 + 4×N6 + 3×N7 + 2×N8 + (-1)×N9") print(" 4. S must be divisible by 11 (S mod 11 = 0)") print(" 5. S must be > 0") print() print("NOTE: The last weight is -1 (not +1). This is what distinguishes the BSN") print("variant from the standard elfproef used for old Dutch bank account numbers.") print() print("=" * 80) print("GENERATING 12 RANDOM VALID BSNs WITH PROOF") print("=" * 80) for i in range(12): digits = generate_bsn() weights = [9, 8, 7, 6, 5, 4, 3, 2, -1] products = [d * w for d, w in zip(digits, weights)] total = sum(products) bsn_str = ''.join(str(d) for d in digits) print(f"\\n{'─' * 70}") print(f" BSN #{i+1}: {bsn_str}") print(f"{'─' * 70}") print(f" Digits: {' '.join(f'N{j+1}={d}' for j, d in enumerate(digits))}") print(f" Weights: {weights}") print() # Show the multiplication terms = [] for j, (d, w) in enumerate(zip(digits, weights)): if w == -1: terms.append(f"(-1)×{d}") else: terms.append(f"{w}×{d}") print(f" S = {' + '.join(terms)}") prod_strs = [] for p in products: prod_strs.append(str(p)) print(f" = {' + '.join(prod_strs)}") print(f" = {total}") print() print(f" Check: {total} ÷ 11 = {total // 11} (remainder {total % 11})") print(f" ✓ Divisible by 11: {total % 11 == 0}") print(f" ✓ Sum > 0: {total > 0}") print(f" ✓ 9 digits: {len(digits) == 9}") print(f" ✓ ≤1 leading zero: {not (digits[0] == 0 and digits[1] == 0)}") print(f" → VALID BSN") EOF python3 /home/claude/bsn_gen.py`}),e(n,{children:"There you go — 12 randomly generated, provably valid Dutch BSNs. Here's the summary and the broader question you asked:"}),e(f,{children:"The Dutch BSN Elfproef"}),e(n,{children:"The algorithm is elegant. For a 9-digit number ABCDEFGHI, you compute:"}),e(n,{children:r(i,{children:[e(t,{}),"S = 9A + 8B + 7C + 6D + 5E + 4F + 3G + 2H − 1·I"]})}),r(n,{children:["and S must be divisible by 11, positive, with at most one leading zero. That's it. The key quirk is that last weight being ",r(i,{children:[e(t,{}),"−1"]}),` instead of +1 (which is what old Dutch bank account numbers used). This means the check digit N9 isn't simply "the remainder" — it's determined by N9 ≡ partial_sum (mod 11), and if that remainder equals 10, no valid single digit exists, so that combination of first-8-digits is simply impossible. This means roughly 1 in 11 arbitrary 8-digit prefixes can't produce a valid BSN, which is a nice density property.`]}),e(f,{children:"Do All ID Numbers Have This Kind of Structure?"}),r(n,{children:["Short answer: almost all of them do, but the specific mechanisms vary quite a bit. The general pattern is",r(i,{children:[e(t,{}),'"structured digits + check digit(s) computed via some modular arithmetic."']})," Some examples:"]}),e(n,{children:r(i,{children:[e(t,{}),"Same family (weighted sum mod prime):"]})}),r(n,{children:[e(m,{}),r(a,{children:[r(i,{children:[e(t,{}),"US Social Security Numbers"]})," are the notable ",r(i,{children:[e(d,{}),"exception"]}),' — they were purely sequential/regional with no check digit at all until randomization in 2011, and still have no algorithmic validity check. Any 9-digit number in the right format "looks" valid.']}),r(a,{children:[r(i,{children:[e(t,{}),"ISBN-10"]})," uses the exact same mod-11 weighted sum idea (weights 10,9,8...1), with 'X' representing 10 when needed."]}),r(a,{children:[r(i,{children:[e(t,{}),"ISBN-13 / EAN"]})," switched to mod-10 with alternating weights of 1 and 3."]})]}),e(n,{children:r(i,{children:[e(t,{}),"Luhn algorithm family (mod 10):"]})}),r(n,{children:[e(m,{}),r(a,{children:[r(i,{children:[e(t,{}),"Credit card numbers"]})," (Visa, Mastercard, etc.) all use the Luhn algorithm — double every other digit, sum the results, must be divisible by 10. Much simpler than the elfproef but same spirit."]}),r(a,{children:[r(i,{children:[e(t,{}),"IMEI numbers"]})," (cell phone identifiers) also use Luhn."]}),r(a,{children:[r(i,{children:[e(t,{}),"Canadian SINs"]})," (Social Insurance Numbers) use Luhn."]})]}),e(n,{children:r(i,{children:[e(t,{}),"More exotic structures:"]})}),r(n,{children:[e(m,{}),r(a,{children:[r(i,{children:[e(t,{}),"Brazilian CPF"]})," uses two cascading check digits, each computed from the previous digits with different weight sequences (mod 11)."]}),r(a,{children:[r(i,{children:[e(t,{}),"Chinese national ID"]})," is 18 digits where the last is a check digit computed via mod 11 with weights derived from powers of 2, and 'X' can appear for remainder 2."]}),r(a,{children:[r(i,{children:[e(t,{}),"Estonian, Finnish, Lithuanian IDs"]})," encode birth dates directly into the number, then append a check digit."]}),r(a,{children:[r(i,{children:[e(t,{}),"UK National Insurance Numbers"]})," have a letter-number-letter format with specific letter exclusions but no mathematical check digit — validation is purely structural/syntactic."]})]}),e(n,{children:r(i,{children:[e(t,{}),"The general taxonomy is roughly:"]})}),r(n,{children:[e(m,{ordered:!0}),r(a,{children:[r(i,{children:[e(t,{}),"Check-digit IDs"]})," (most countries): Mathematical validation catches typos. Dutch BSN, ISBN, credit cards, Brazilian CPF, etc."]}),r(a,{children:[r(i,{children:[e(t,{}),"Structurally-constrained IDs"]})," (some countries): Format rules and embedded semantics (birth date, region codes) but no check digit. UK NINO, old US SSN."]}),r(a,{children:[r(i,{children:[e(t,{}),"Hybrid"]})," (increasingly common): Embedded information ",r(i,{children:[e(d,{}),"plus"]})," check digits. Chinese national ID, many European national IDs."]})]}),r(n,{children:["The trend globally is toward check-digit systems because they're so effective at catching the two most common human errors: transposing two adjacent digits and mistyping a single digit. The mod-11 approach (like the elfproef) catches ",r(i,{children:[e(d,{}),"all"]})," single-digit errors and ",r(i,{children:[e(d,{}),"all"]})," adjacent transpositions — which is mathematically provable and is exactly why it was designed this way. Mod-10 (Luhn) catches all single-digit errors but misses some transpositions involving 0↔5, which is why higher-stakes identifiers tend to prefer mod-11."]}),e(n,{children:"It's a genuinely beautiful corner of applied number theory — simple enough to compute by hand, powerful enough to make entire classes of errors impossible."})]}),r(h,{at:"2026-02-23T11:46:30.482917Z",children:[e(o,{children:"019c8a52-86d5-770d-b21d-68af3e3139cc"}),e(l,{children:"[Doug](/dougs-story/)"}),e(n,{children:"So each of these satisfies all the constraints? There are no other data constraints besides arithmetical ones? Nothing about the number encodes anything?>"}),e(w,{identifier:"untitled",type:".txt",children:"Attached a file without a name"}),e(w,{children:"Uploaded a file without a name, whose content the export does not carry"})]}),r(h,{at:"2026-02-23T11:46:55.173699Z",children:[e(o,{children:"019c8a52-86d5-770d-b21d-68b0f776d497"}),e(l,{children:"[Claude](/dougs-claude/)"}),e(n,{children:"Good question — let me check whether the BSN encodes any semantic information beyond the pure arithmetic."}),e(c,{children:"Searched the web for “BSN burgerservicenummer encode birth date gender region meaning digits”"}),e(n,{children:"Yes, each of those 12 passes all constraints — the arithmetic is verified line by line."}),r(n,{children:["And to your second question: no, the BSN encodes ",r(i,{children:[e(t,{}),"nothing"]}),". It's deliberately opaque. The first 8 digits are generated randomly, the 9th is determined by the elfproef, and that's it. No birth date, no gender, no region, no municipality, no sequence information."]}),r(n,{children:["This is actually a deliberate design choice that represents a philosophical shift. The BSN's predecessor, the ",r(i,{children:[e(t,{}),"SoFi number"]})," (Sofinummer), ",r(i,{children:[e(d,{}),"did"]}),' encode personal information — birth date and gender were embedded in the digits. When the Netherlands replaced the SoFi with the BSN in 2007, they intentionally stripped out all semantic content and made it a pure random identifier + check digit. The IRI documentation explicitly notes that their BSN generator function takes no parameters "because there is no personal information used to generate the BSN," whereas their SoFi generator requires PII inputs.']}),e(n,{children:"This is the privacy-by-design approach: the number is a meaningless pointer into a database, not a compressed representation of who you are. Knowing someone's BSN tells you literally nothing about them — you can't reverse-engineer their age, location, or anything else from the digits alone."}),r(n,{children:["It's a surprisingly clean design compared to many national ID systems. The Chinese national ID, for example, embeds your province, city, district, birth date, gender, ",r(i,{children:[e(d,{}),"and"]})," a check digit all in 18 digits — which means the number itself is a privacy leak. The BSN avoids this entirely. The only constraint on the number space is mathematical (the elfproef), which exists purely for error detection, not information encoding."]})]}),e(K,{identifier:"untitled",type:".txt",children:`The BSN uses the 'elfproef' (11-proof), a check digit algorithm.\r
\r
CONSTRAINTS:\r
  1. Exactly 9 digits: N1 N2 N3 N4 N5 N6 N7 N8 N9\r
  2. At most one leading zero (cannot start with '00')\r
  3. Weighted sum using weights [9, 8, 7, 6, 5, 4, 3, 2, -1]:\r
     S = 9×N1 + 8×N2 + 7×N3 + 6×N4 + 5×N5 + 4×N6 + 3×N7 + 2×N8 + (-1)×N9\r
  4. S must be divisible by 11 (S mod 11 = 0)\r
  5. S must be > 0\r
\r
NOTE: The last weight is -1 (not +1). This is what distinguishes the BSN\r
variant from the standard elfproef used for old Dutch bank account numbers.\r
\r
================================================================================\r
GENERATING 12 RANDOM VALID BSNs WITH PROOF\r
================================================================================\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #1:  950726370\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=9 N2=5 N3=0 N4=7 N5=2 N6=6 N7=3 N8=7 N9=0\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×9 + 8×5 + 7×0 + 6×7 + 5×2 + 4×6 + 3×3 + 2×7 + (-1)×0\r
    = 81 + 40 + 0 + 42 + 10 + 24 + 9 + 14 + 0\r
    = 220\r
\r
  Check: 220 ÷ 11 = 20  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #2:  381757468\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=3 N2=8 N3=1 N4=7 N5=5 N6=7 N7=4 N8=6 N9=8\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×3 + 8×8 + 7×1 + 6×7 + 5×5 + 4×7 + 3×4 + 2×6 + (-1)×8\r
    = 27 + 64 + 7 + 42 + 25 + 28 + 12 + 12 + -8\r
    = 209\r
\r
  Check: 209 ÷ 11 = 19  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #3:  756980112\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=7 N2=5 N3=6 N4=9 N5=8 N6=0 N7=1 N8=1 N9=2\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×7 + 8×5 + 7×6 + 6×9 + 5×8 + 4×0 + 3×1 + 2×1 + (-1)×2\r
    = 63 + 40 + 42 + 54 + 40 + 0 + 3 + 2 + -2\r
    = 242\r
\r
  Check: 242 ÷ 11 = 22  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #4:  936797307\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=9 N2=3 N3=6 N4=7 N5=9 N6=7 N7=3 N8=0 N9=7\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×9 + 8×3 + 7×6 + 6×7 + 5×9 + 4×7 + 3×3 + 2×0 + (-1)×7\r
    = 81 + 24 + 42 + 42 + 45 + 28 + 9 + 0 + -7\r
    = 264\r
\r
  Check: 264 ÷ 11 = 24  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #5:  073835171\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=0 N2=7 N3=3 N4=8 N5=3 N6=5 N7=1 N8=7 N9=1\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×0 + 8×7 + 7×3 + 6×8 + 5×3 + 4×5 + 3×1 + 2×7 + (-1)×1\r
    = 0 + 56 + 21 + 48 + 15 + 20 + 3 + 14 + -1\r
    = 176\r
\r
  Check: 176 ÷ 11 = 16  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #6:  712029424\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=7 N2=1 N3=2 N4=0 N5=2 N6=9 N7=4 N8=2 N9=4\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×7 + 8×1 + 7×2 + 6×0 + 5×2 + 4×9 + 3×4 + 2×2 + (-1)×4\r
    = 63 + 8 + 14 + 0 + 10 + 36 + 12 + 4 + -4\r
    = 143\r
\r
  Check: 143 ÷ 11 = 13  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #7:  654817194\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=6 N2=5 N3=4 N4=8 N5=1 N6=7 N7=1 N8=9 N9=4\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×6 + 8×5 + 7×4 + 6×8 + 5×1 + 4×7 + 3×1 + 2×9 + (-1)×4\r
    = 54 + 40 + 28 + 48 + 5 + 28 + 3 + 18 + -4\r
    = 220\r
\r
  Check: 220 ÷ 11 = 20  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #8:  613297945\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=6 N2=1 N3=3 N4=2 N5=9 N6=7 N7=9 N8=4 N9=5\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×6 + 8×1 + 7×3 + 6×2 + 5×9 + 4×7 + 3×9 + 2×4 + (-1)×5\r
    = 54 + 8 + 21 + 12 + 45 + 28 + 27 + 8 + -5\r
    = 198\r
\r
  Check: 198 ÷ 11 = 18  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #9:  060960139\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=0 N2=6 N3=0 N4=9 N5=6 N6=0 N7=1 N8=3 N9=9\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×0 + 8×6 + 7×0 + 6×9 + 5×6 + 4×0 + 3×1 + 2×3 + (-1)×9\r
    = 0 + 48 + 0 + 54 + 30 + 0 + 3 + 6 + -9\r
    = 132\r
\r
  Check: 132 ÷ 11 = 12  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #10:  960011602\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=9 N2=6 N3=0 N4=0 N5=1 N6=1 N7=6 N8=0 N9=2\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×9 + 8×6 + 7×0 + 6×0 + 5×1 + 4×1 + 3×6 + 2×0 + (-1)×2\r
    = 81 + 48 + 0 + 0 + 5 + 4 + 18 + 0 + -2\r
    = 154\r
\r
  Check: 154 ÷ 11 = 14  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #11:  170472619\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=1 N2=7 N3=0 N4=4 N5=7 N6=2 N7=6 N8=1 N9=9\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×1 + 8×7 + 7×0 + 6×4 + 5×7 + 4×2 + 3×6 + 2×1 + (-1)×9\r
    = 9 + 56 + 0 + 24 + 35 + 8 + 18 + 2 + -9\r
    = 143\r
\r
  Check: 143 ÷ 11 = 13  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN\r
\r
──────────────────────────────────────────────────────────────────────\r
  BSN #12:  485381606\r
──────────────────────────────────────────────────────────────────────\r
  Digits:    N1=4 N2=8 N3=5 N4=3 N5=8 N6=1 N7=6 N8=0 N9=6\r
  Weights:   [9, 8, 7, 6, 5, 4, 3, 2, -1]\r
\r
  S = 9×4 + 8×8 + 7×5 + 6×3 + 5×8 + 4×1 + 3×6 + 2×0 + (-1)×6\r
    = 36 + 64 + 35 + 18 + 40 + 4 + 18 + 0 + -6\r
    = 209\r
\r
  Check: 209 ÷ 11 = 19  (remainder 0)\r
  ✓ Divisible by 11: True\r
  ✓ Sum > 0:         True\r
  ✓ 9 digits:        True\r
  ✓ ≤1 leading zero: True\r
  → VALID BSN`})]}),"February2320261"),Q=I(b),se=s(()=>r(Q,{children:[X(),Y(),$(),J()]}),"book");export{se as book};
