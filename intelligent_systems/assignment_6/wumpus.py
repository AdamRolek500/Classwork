from logic import *

"""

|----------------------|
|   S   |   W?  |  ?   |
|-------|-------|------|
|   -   |   ?   |  P?  |
|-------|-------|------|
| start |   -   |   B  |
|----------------------|
"""

wumpus_kb = PropKB()

S12, S13, B21, B31, W13, W11, W22, W23, P11, P22, P31, P32, P21 = \
    expr('S12, S13, B21, B31, W13, W11, W22, W23, P11, P22, P31, P32, P21')

wumpus_kb.tell(~P11)
wumpus_kb.tell(~P21)
wumpus_kb.tell(~B21)
wumpus_kb.tell(B31)
wumpus_kb.tell(B21 | '<=>' | (P22 | P31))
wumpus_kb.tell(B31 | '<=>' | (P21 | P32))
# Hypothesis: There is a pit in P32
print(wumpus_kb.ask_if_true(P22))
print(wumpus_kb.ask_if_true(P12))
print(wumpus_kb.ask_if_true(P32))

