from logic import *

wumpus_kb = PropKB()

B11, S12, P12, W22, W11, P21 \
    = expr('B11, S12, P12, W22, W11, P21')

wumpus_kb.tell(~W11)
wumpus_kb.tell(B11 | '<=>' | (P12 | P21))
wumpus_kb.tell(S12 | '<=>' | (W11 | W22))
wumpus_kb.tell(B11)
wumpus_kb.tell(S12)
wumpus_kb.tell(~P21)

print(wumpus_kb.ask_if_true(W22))
print(wumpus_kb.ask_if_true(W11))
print(wumpus_kb.ask_if_true(P21))
print(wumpus_kb.ask_if_true(P12))
