var y=Object.defineProperty;var a=(b,S)=>y(b,"name",{value:S,configurable:!0});import{j as e,C as f,b as T,T as j,P as p,c as w,H as N,a as i,d,W as r,D,B as n,L as o,k as t,E as s,A as v,$ as B}from"./index-B5oAFc8f.js";import{I,D as k,M as h,h as l}from"./.cover-qzOoNiXp.js";import{$ as C,O as c,A as u,b as x}from"./3-the-project~code-SJAMFlBt.js";import{T as A,a as z}from"./.synopsis-Czai1YT1.js";import"./.cover-D6DRTxBX.js";import"./.cover-BpiS5iTt.js";const g=class g extends C{};a(g,"$ClaudeDutchTinNumberValidationAndStructure882148a0");let m=g;const L=a(()=>e.jsxs(f,{children:[e.jsx(T,{}),e.jsx(I,{}),e.jsxs(j,{children:[e.jsx(p,{}),"[Table of Contents](/claude-dutch-tin-number-validation-and-structure-882148a0/#table-of-contents)"]}),e.jsxs(w,{children:[e.jsx(N,{children:"February 2026"}),e.jsx(i,{children:e.jsx(d,{children:"[23 February 2026](/claude-dutch-tin-number-validation-and-structure-882148a0/#23-february-2026)"})}),e.jsxs(i,{children:[e.jsx(p,{}),e.jsx(r,{children:e.jsx(d,{children:"[Dutch TIN number validation and structure](/claude-dutch-tin-number-validation-and-structure-882148a0/)"})}),e.jsx(r,{children:e.jsx(d,{children:"[Synopsis](/claude-dutch-tin-number-validation-and-structure-882148a0/#synopsis)"})}),e.jsx(r,{children:e.jsx(d,{children:"[Table of Contents](/claude-dutch-tin-number-validation-and-structure-882148a0/#table-of-contents)"})})]})]})]}),"Table"),E=a(()=>e.jsxs(f,{children:[e.jsx(k,{children:e.jsx(D,{children:"[23 February 2026](2026-02-23)"})}),e.jsx(j,{children:"[23 February 2026](/claude-dutch-tin-number-validation-and-structure-882148a0/#23-february-2026)"}),e.jsxs(h,{at:"2026-02-23T11:43:28.002151Z",children:[e.jsx(c,{children:"019c8a4f-be7d-7248-90e2-301eeb639aae"}),e.jsx(l,{children:"[Doug](/dougs-story/)"}),e.jsx(i,{children:"Can you rigorously look up the constraints for a dutch TIN number and then generate 10-15 random ones and for each, prove why it satisfies the constraints? And then tell me if all ID types have this sort of structure. It's interesting"})]}),e.jsxs(h,{at:"2026-02-23T11:44:38.664389Z",children:[e.jsx(c,{children:"019c8a4f-be7d-7248-90e2-301f7915f7e2"}),e.jsx(l,{children:"[Claude](/dougs-claude/)"}),e.jsx(i,{children:"Let me look up the exact constraints for Dutch TIN numbers."}),e.jsx(u,{children:"Searched the web for “Dutch TIN BSN number validation rules constraints”"}),e.jsx(u,{children:"Searched the web for “BSN elfproef 11-check algorithm exact formula”"}),e.jsx(i,{children:"Now I have the full picture. Let me write a script to generate valid BSNs with full proofs."}),e.jsx(u,{children:`Ran cat << 'EOF' > /home/claude/bsn_gen.py import random def validate_bsn(digits): """Validate BSN using elfproef (11-proof) with weights [9,8,7,6,5,4,3,2,-1]""" weights = [9, 8, 7, 6, 5, 4, 3, 2, -1] total = sum(d * w for d, w in zip(digits, weights)) return total % 11 == 0 and total > 0 def generate_bsn(): """Generate a random valid BSN""" while True: # Generate first 8 digits (first digit can be 0, but not both first two) first8 = [random.randint(0, 9) for _ in range(8)] # Calculate what N9 needs to be # We need: (9*N1 + 8*N2 + 7*N3 + 6*N4 + 5*N5 + 4*N6 + 3*N7 + 2*N8 - N9) % 11 == 0 # So: partial_sum - N9 ≡ 0 (mod 11) # N9 ≡ partial_sum (mod 11) partial = sum(d * w for d, w in zip(first8, [9, 8, 7, 6, 5, 4, 3, 2])) n9 = partial % 11 # N9 must be a single digit (0-9), so if remainder is 10, skip if n9 > 9: continue digits = first8 + [n9] # Check: no more than one leading zero if digits[0] == 0 and digits[1] == 0: continue # Check sum > 0 (almost always true unless all zeros) total = sum(d * w for d, w in zip(digits, [9, 8, 7, 6, 5, 4, 3, 2, -1])) if total <= 0: continue return digits print("=" * 80) print("DUTCH BSN (Burgerservicenummer) — CONSTRAINT SUMMARY") print("=" * 80) print() print("The BSN uses the 'elfproef' (11-proof), a check digit algorithm.") print() print("CONSTRAINTS:") print(" 1. Exactly 9 digits: N1 N2 N3 N4 N5 N6 N7 N8 N9") print(" 2. At most one leading zero (cannot start with '00')") print(" 3. Weighted sum using weights [9, 8, 7, 6, 5, 4, 3, 2, -1]:") print(" S = 9×N1 + 8×N2 + 7×N3 + 6×N4 + 5×N5 + 4×N6 + 3×N7 + 2×N8 + (-1)×N9") print(" 4. S must be divisible by 11 (S mod 11 = 0)") print(" 5. S must be > 0") print() print("NOTE: The last weight is -1 (not +1). This is what distinguishes the BSN") print("variant from the standard elfproef used for old Dutch bank account numbers.") print() print("=" * 80) print("GENERATING 12 RANDOM VALID BSNs WITH PROOF") print("=" * 80) for i in range(12): digits = generate_bsn() weights = [9, 8, 7, 6, 5, 4, 3, 2, -1] products = [d * w for d, w in zip(digits, weights)] total = sum(products) bsn_str = ''.join(str(d) for d in digits) print(f"\\n{'─' * 70}") print(f" BSN #{i+1}: {bsn_str}") print(f"{'─' * 70}") print(f" Digits: {' '.join(f'N{j+1}={d}' for j, d in enumerate(digits))}") print(f" Weights: {weights}") print() # Show the multiplication terms = [] for j, (d, w) in enumerate(zip(digits, weights)): if w == -1: terms.append(f"(-1)×{d}") else: terms.append(f"{w}×{d}") print(f" S = {' + '.join(terms)}") prod_strs = [] for p in products: prod_strs.append(str(p)) print(f" = {' + '.join(prod_strs)}") print(f" = {total}") print() print(f" Check: {total} ÷ 11 = {total // 11} (remainder {total % 11})") print(f" ✓ Divisible by 11: {total % 11 == 0}") print(f" ✓ Sum > 0: {total > 0}") print(f" ✓ 9 digits: {len(digits) == 9}") print(f" ✓ ≤1 leading zero: {not (digits[0] == 0 and digits[1] == 0)}") print(f" → VALID BSN") EOF python3 /home/claude/bsn_gen.py`}),e.jsx(i,{children:"There you go — 12 randomly generated, provably valid Dutch BSNs. Here's the summary and the broader question you asked:"}),e.jsx(N,{children:"The Dutch BSN Elfproef"}),e.jsx(i,{children:"The algorithm is elegant. For a 9-digit number ABCDEFGHI, you compute:"}),e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{}),"S = 9A + 8B + 7C + 6D + 5E + 4F + 3G + 2H − 1·I"]})}),e.jsxs(i,{children:["and S must be divisible by 11, positive, with at most one leading zero. That's it. The key quirk is that last weight being ",e.jsxs(r,{children:[e.jsx(n,{}),"−1"]}),` instead of +1 (which is what old Dutch bank account numbers used). This means the check digit N9 isn't simply "the remainder" — it's determined by N9 ≡ partial_sum (mod 11), and if that remainder equals 10, no valid single digit exists, so that combination of first-8-digits is simply impossible. This means roughly 1 in 11 arbitrary 8-digit prefixes can't produce a valid BSN, which is a nice density property.`]}),e.jsx(N,{children:"Do All ID Numbers Have This Kind of Structure?"}),e.jsxs(i,{children:["Short answer: almost all of them do, but the specific mechanisms vary quite a bit. The general pattern is",e.jsxs(r,{children:[e.jsx(n,{}),'"structured digits + check digit(s) computed via some modular arithmetic."']})," Some examples:"]}),e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{}),"Same family (weighted sum mod prime):"]})}),e.jsxs(i,{children:[e.jsx(o,{}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"US Social Security Numbers"]})," are the notable ",e.jsxs(r,{children:[e.jsx(s,{}),"exception"]}),' — they were purely sequential/regional with no check digit at all until randomization in 2011, and still have no algorithmic validity check. Any 9-digit number in the right format "looks" valid.']}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"ISBN-10"]})," uses the exact same mod-11 weighted sum idea (weights 10,9,8...1), with 'X' representing 10 when needed."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"ISBN-13 / EAN"]})," switched to mod-10 with alternating weights of 1 and 3."]})]}),e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{}),"Luhn algorithm family (mod 10):"]})}),e.jsxs(i,{children:[e.jsx(o,{}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Credit card numbers"]})," (Visa, Mastercard, etc.) all use the Luhn algorithm — double every other digit, sum the results, must be divisible by 10. Much simpler than the elfproef but same spirit."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"IMEI numbers"]})," (cell phone identifiers) also use Luhn."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Canadian SINs"]})," (Social Insurance Numbers) use Luhn."]})]}),e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{}),"More exotic structures:"]})}),e.jsxs(i,{children:[e.jsx(o,{}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Brazilian CPF"]})," uses two cascading check digits, each computed from the previous digits with different weight sequences (mod 11)."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Chinese national ID"]})," is 18 digits where the last is a check digit computed via mod 11 with weights derived from powers of 2, and 'X' can appear for remainder 2."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Estonian, Finnish, Lithuanian IDs"]})," encode birth dates directly into the number, then append a check digit."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"UK National Insurance Numbers"]})," have a letter-number-letter format with specific letter exclusions but no mathematical check digit — validation is purely structural/syntactic."]})]}),e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(n,{}),"The general taxonomy is roughly:"]})}),e.jsxs(i,{children:[e.jsx(o,{ordered:!0}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Check-digit IDs"]})," (most countries): Mathematical validation catches typos. Dutch BSN, ISBN, credit cards, Brazilian CPF, etc."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Structurally-constrained IDs"]})," (some countries): Format rules and embedded semantics (birth date, region codes) but no check digit. UK NINO, old US SSN."]}),e.jsxs(t,{children:[e.jsxs(r,{children:[e.jsx(n,{}),"Hybrid"]})," (increasingly common): Embedded information ",e.jsxs(r,{children:[e.jsx(s,{}),"plus"]})," check digits. Chinese national ID, many European national IDs."]})]}),e.jsxs(i,{children:["The trend globally is toward check-digit systems because they're so effective at catching the two most common human errors: transposing two adjacent digits and mistyping a single digit. The mod-11 approach (like the elfproef) catches ",e.jsxs(r,{children:[e.jsx(s,{}),"all"]})," single-digit errors and ",e.jsxs(r,{children:[e.jsx(s,{}),"all"]})," adjacent transpositions — which is mathematically provable and is exactly why it was designed this way. Mod-10 (Luhn) catches all single-digit errors but misses some transpositions involving 0↔5, which is why higher-stakes identifiers tend to prefer mod-11."]}),e.jsx(i,{children:"It's a genuinely beautiful corner of applied number theory — simple enough to compute by hand, powerful enough to make entire classes of errors impossible."})]}),e.jsxs(h,{at:"2026-02-23T11:46:30.482917Z",children:[e.jsx(c,{children:"019c8a52-86d5-770d-b21d-68af3e3139cc"}),e.jsx(l,{children:"[Doug](/dougs-story/)"}),e.jsx(i,{children:"So each of these satisfies all the constraints? There are no other data constraints besides arithmetical ones? Nothing about the number encodes anything?>"}),e.jsx(x,{identifier:"untitled",type:".txt",children:"Attached a file without a name"}),e.jsx(x,{children:"Uploaded a file without a name, whose content the export does not carry"})]}),e.jsxs(h,{at:"2026-02-23T11:46:55.173699Z",children:[e.jsx(c,{children:"019c8a52-86d5-770d-b21d-68b0f776d497"}),e.jsx(l,{children:"[Claude](/dougs-claude/)"}),e.jsx(i,{children:"Good question — let me check whether the BSN encodes any semantic information beyond the pure arithmetic."}),e.jsx(u,{children:"Searched the web for “BSN burgerservicenummer encode birth date gender region meaning digits”"}),e.jsx(i,{children:"Yes, each of those 12 passes all constraints — the arithmetic is verified line by line."}),e.jsxs(i,{children:["And to your second question: no, the BSN encodes ",e.jsxs(r,{children:[e.jsx(n,{}),"nothing"]}),". It's deliberately opaque. The first 8 digits are generated randomly, the 9th is determined by the elfproef, and that's it. No birth date, no gender, no region, no municipality, no sequence information."]}),e.jsxs(i,{children:["This is actually a deliberate design choice that represents a philosophical shift. The BSN's predecessor, the ",e.jsxs(r,{children:[e.jsx(n,{}),"SoFi number"]})," (Sofinummer), ",e.jsxs(r,{children:[e.jsx(s,{}),"did"]}),' encode personal information — birth date and gender were embedded in the digits. When the Netherlands replaced the SoFi with the BSN in 2007, they intentionally stripped out all semantic content and made it a pure random identifier + check digit. The IRI documentation explicitly notes that their BSN generator function takes no parameters "because there is no personal information used to generate the BSN," whereas their SoFi generator requires PII inputs.']}),e.jsx(i,{children:"This is the privacy-by-design approach: the number is a meaningless pointer into a database, not a compressed representation of who you are. Knowing someone's BSN tells you literally nothing about them — you can't reverse-engineer their age, location, or anything else from the digits alone."}),e.jsxs(i,{children:["It's a surprisingly clean design compared to many national ID systems. The Chinese national ID, for example, embeds your province, city, district, birth date, gender, ",e.jsxs(r,{children:[e.jsx(s,{}),"and"]})," a check digit all in 18 digits — which means the number itself is a privacy leak. The BSN avoids this entirely. The only constraint on the number space is mathematical (the elfproef), which exists purely for error detection, not information encoding."]})]}),e.jsx(v,{identifier:"untitled",type:".txt",children:`The BSN uses the 'elfproef' (11-proof), a check digit algorithm.\r
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
  → VALID BSN`})]}),"February2320261"),W=B(m),H=a(()=>e.jsxs(W,{children:[A(),z(),L(),E()]}),"book");export{H as book};
