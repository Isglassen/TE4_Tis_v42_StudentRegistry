# Student Registry Engineering Challenge

TE4 Nivå 5 uppgift tisdag v42.

## Svar på frågor

### Varför är Student[] bättre än parallella arrays?

Med Student[] är det mycket enklare att få en specifik student och hålla koll på vilken information som hör tillsammans.
Det är även svårare att göra mistag med att typ glömma ändra båda arraysen så bara en ändras.

### Varför skapar inte type alias en student vid runtime?

Type aliaset beskriver hur en student ska se ut, typ som en mall.
Alla students som sen skapas kan följa den här mallen, men mallen är inte en student i sig.
