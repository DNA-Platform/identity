# The Metalogical Representation Theorem: Formal Proof

## 1. Introduction and Definitions

We begin by precisely defining the concept of metalogical universality and stating the main theorem.

**Definition 1.1** (Metalogical Universality). A formal theory $T$ exhibits *metalogical universality* if:
1. $T$ is sufficiently expressive to represent basic arithmetic operations and recursive functions.
2. For any recursively enumerable theory $S$, $T$ can represent within its own language:
   - The syntax of $S$ (its symbols, formulas, and proofs)
   - The provability relation of $S$

**Theorem 1.2** (Metalogical Representation). Let $T$ be any recursively enumerable formal theory whose language contains enough expressive power to represent basic arithmetic operations and recursive functions. Then, for any recursively enumerable theory $S$, there exists a formula $\text{Prov}_S(x)$ expressible in the language of $T$ such that for any formula $\phi$ of $S$:
   - $\text{Prov}_S(\ulcorner\phi\urcorner)$ is true in the standard model of $T$ if and only if $\phi$ is provable in $S$
   - If $T$ extends Robinson arithmetic and is consistent, then whenever $\phi$ is provable in $S$, $T \vdash \text{Prov}_S(\ulcorner\phi\urcorner)$

Before proceeding with the main proof, we establish several crucial lemmas.

## 2. Preliminary Lemmas

**Lemma 2.1** (Gödel Numbering). For any recursively enumerable theory $S$, there exists an effective encoding function $g_S$ that maps each symbol, formula, and proof in