# Reflektion

## Kapitel 2 Meaningful names

Kapitel 2 handlar om att meningsfull namn som gör att till exempel metodnamnen ska vara självförklarande så att inga kommentarer behövs för att man ska veta vad koden gör. Detta är något jag verkligen försökt efterleva och tycker att jag lyckats bra med. På bilden så syns tre stycken metodnamn från time-converter.js Metoden clearOutput() gör som den heter och rensar fältet där utdatan visas. Metoden #handleInput hanterar indatan och kollar vad som ska göras härnäst beroende på vad som fyllts i och metoden handleEmptyInput kastar ett undantag om indatan är tom(efter att den gått igenom medtoden #handleInput).

![Meaningful names](/Screenshots/meaningful%20names.png)

## Kapitel 3 Functions

Detta kapitel handlar mångt och mycket om att funktioner ska vara små och göra en sak samt att funktionen antingen ska göra något eller kasta ett undantag, inte båda delarna. Jag anser att just denna grej är en av de sakernas som suttit mest i bakhuvudet när jag programmerat och att tänka att funktioner bara ska göra en sak gör att jag skriver mycket kortare funktioner och att koden tillsammans med namngivningen från föregående kapitel gör koden mycket mer läsbar och enklare att förstå då det blir mycket enkelt att förstå vad funktionen/metoden gör. I exemplet nedan #handleEmptyInput så gör koden just det, hanterar tom indata och det enda den gör är att kasta ett error.

![Functions](/Screenshots/functions.png)

## Kapitel 4 Comments

Denna del kan jag tycka är lite svår då vi i tidigare kurser uppmanats att dokumentera våran kod med kommentarer för att förklara koden. Men i denna bok så ska koden vara självförklarande och kommentarer ska undvikas och man har därför inte skrivit några kommentarer alls i princip. I bilden nedan har jag dock fått in en kommentar i disconnectedCallback() där jag tyckte det var nödvändigt för att man skulle förstå vad som hände där då det inte är helt öppenbart trots att det bara var en rad kod.

![Comments](/Screenshots/comments.png)

## Kapitel 5 Formatting

Detta kapitel handlar om formattering, det vill säga saker som antal tecken i en rad kod för att ta ett exempel. Detta är något som jag i ärlighetens namn inte tänk på aktivt särskillt mycket alls egentligen. Det blir mer att jag kollar igenom koden när jag skrivit litegranna och kollar så det ser bra ut att closing brackets ligger i linje som dom ska och att rätt indentering finns. Optimal längd på en rad ska enligt boken vara 80-120 tecken och här har jag låtit mig ta några extra tecken och inte hållt mig stenhårt på antal tecken men ändå i något enstaka fall försökt bryta ut metoden om raden varit för lång(140+ tecken). I nedan bild har jag hittat en rad som var hela 161 tecken inklusive indenteringen och där de sista par orden inte syns om jag inte scrollar.

![Formatting](/Screenshots/formatting.png)

## Kapitel 6 Objects and Data Structures

Min app hanterar inte så mycket data. Den tar input från användaren och använder sedan specifika metoder för att konvertera just den efterfrågade omvandlingen. Varje enhetsomvandlare är en egen klass/komponent så det följer det boken säger om enkla datastrukturer och även "The law of demeter" då den inte kedjar ihop metodanrop mellan olika objekt. I nedan bild så är de enda metoderna som hanteras centralt i unit-converter.js och det handlar om att visa/dölja de individuella klasserna med undantaget för metoden #clearOutputs som gör metodanrop till de andra klasserna.

![Objects and Data Structures](/Screenshots/objects%20and%20data%20structures.png)

## Kapitel 7 Error Handling

Boken förespråkar att kasta undantag med tydliga felmeddelanden och att använda sig av try/catch block. Detta har jag försökt anammat och jag använder mig av try/catch block när jag hanterar min input för att fånga upp felen så uppstår i både min modul samt de som jag skapat i min app. Detta var något som jag kom tillbaka till i boken när jag hade problem med att få min time-converter att funka. Då började jag implementera validering för indatan som redan fanns i min modul innan jag kom på att jag genom ett try/catch block kunde fånga upp felen från modulen. Det visade sig dock att jag hade stavat metodanropen fel men det hela gjorde att jag i slutändan kom ut med en mycket bättre felhantering än vad jag hade skrivit innan.

![Error Handling](/Screenshots/error%20handling.png)

## Kapitel 8 Boundaries

Min implentering innebär att varje enskild klass/komponent har ett självständigt gränssnitt mot modulen. Samtliga gränssnitt är uppbyggda på samma sätt i hur dom hanterar användaren input och vilken metod som ska anropas i modulen. Min length-converter.js skiljer sig dock från de övriga omvandlarna i att den hanterar sina metodanrop dynamiskt. Detta hade kunnat implementeras i samtliga och hade då gjort att dom var enklare att anpassa till till exempel nya enheter att omvandla mellan. Se den dynamiska metodanropen nedan i bild.

![Boundaries](/Screenshots/Boundaries.png)

## Kapitel 9 Unit Tests

Jag har utfört väldigt utförliga tester i min modul där den testar samtliga metoder och kollar så att den omvandlar korrekt samt att den testar så att jag har korrekt felhantering om jag försöker omvandla till exempel en tid som inte är inom intervallet för en 24h klocka eller en temperatur som inte har giltig indata i form av siffror. Så jag skulle påstå att jag förhåller mig bra till vad boken säger om enhetstester.

![Unit Tests](/Screenshots/unit%20tests.png)

## Kapitel 10 Classes

Boken säger att klasser ska vara små och göra en sak. Detta gör att klasserna till exempel blir mindre känsliga för förändring och enklare att testa. Mina klassers förhållande till detta är att varje typ av enhetstyp är en egen klass. Till exempel så har jag en klass som hanterar temperaturomvandlingar och en annan klass som hanterar viktomvandlingar och så vidare för de olika omvandlarna. Detta skulle till och med kunna utökas till en egen klass för felhantering. Nedan bild visar klassen VolumeConverter i min modul som har validering av indatan samt metoder för omvandling mellan volymenheter.

![Classes](/Screenshots/classes.png)

## Kapitel 11 Systems

Jag har byggt min app så att att varje enskilld komponent/klass ska vara återanvändbar. I skärmavbilden från unit-converter.js så ser man att varje komponent läggs in som ett fält i klassen och som en egen komponent i dess innerHTML som gör att det är lätt att lägga till eller ta bort klasser vid vidareutveckling av appen. På så vis blir den också lätt att underhålla och jag kan till exempel plocka bort en av omvandlarna utan att det påverkar övrig funktionalitet någonting.

![Systems](/Screenshots/systems.png)