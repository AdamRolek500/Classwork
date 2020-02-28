from csp import *
map_csp = MapColoringCSP(list('RGB'),
                               """
                               A: B; 
                               B: G F C; 
                               C: B F E D; 
                               D: C E;
                               E: C D F;
                               F: B C E G H;
                               H: F G;
                               G: B F H""")
print(backtracking_search(map_csp))
map_csp2 = MapColoringCSP(list('RGB'),
                                """
                                A: B; 
                                B: G F C; 
                                C: B F E D; 
                                D: C E;
                                E: C D F;
                                F: B C E G H;
                                H: F G;
                                G: B F H""")
print(AC3(map_csp))  # Why does this yield a different result?
print(AC3(map_csp2))
