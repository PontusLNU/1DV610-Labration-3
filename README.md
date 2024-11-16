# Unit Converter Webbapp

## Beksrivning

Detta är en webbapplikation är en enhetsomvandlare som har fem stycken olika omvandlare. Varje omvandlare är en egen webbkomponent. Webbapplikationen är byggd med kodkvalitet i fokus baserat på boken "Clean Code" av *Robert Cecil Martin*. Webbapplikationens beräkningar är byggda på ett npm-paket som jag skapat och är fritt att använda och kan hittas på [denna länk](https://www.npmjs.com/package/unit-converter-package)

## Vision

Denna webbapplikation ska vara "the go to" när det kommer till omvandlingar mellan olika enheter. Flera olika omvandlingar ska kunna göras på ett och samma ställe och målet är att man som användare ska vilja ha denna webbapp i bokmärkesfältet för att enkelt komma åt den och använda den till de omvandlingar man kan tänkas behöva göra.

## Krav

1. Endast den "unit-converter" som är vald ska visas.
2. Output från tidigare konverteringar ska inte visas när jag byter mellan de olika konverterarna.
3. Felmeddelande ska visas om man försöker omvandla mellan samma enhet eller om indatan är ogiltig.
4. Det ska finnas 5 olika konverterare: "Length Converter", "Temperature Converter", "Time Converter", "Volume Converter" och "Weight Converter".
5. "Length Converter" ska omvandla mellan millimeter, centimeter, meter, kilometer, inches, feet, yards och miles.
6. "Temperature Converter" ska omvandla mellan Celsius och Fahrenheit.
7. "Time Converter" ska omvandla mellan 12-timmarsformat och 24-timmarsformat.
8. "Volume Converter" ska omvandla mellan liter och gallon.
9. "Weight Converter" ska omvandla mellan kilogram och pounds.

## Test

| Nr  | Krav                                                                                                      | Testfall                                                                                                             | Förväntat Resultat                                                                                             | Godkänt |
| --- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| 1   | Endast den "unit-converter" som är vald ska visas.                                                        | Välj "Length Converter", sedan "Temperature Converter".                                                              | Endast "Temperature Converter" visas, och övriga konverterare är dolda.                                        | ✔️       |
| 2   | Output från tidigare konverteringar ska inte visas när jag byter mellan de olika konverterarna.           | Utför en konvertering i "Volume Converter", byt sedan till "Weight Converter" och tillbaka till "Volume Converter".  | Tidigare resultat är borta och output är tom vid byte tillbaka till "Volume Converter".                        | ✔️       |
| 3   | Felmeddelande ska visas om man försöker omvandla mellan samma enhet eller om indatan är ogiltig.          | Försök att konvertera kg till kg samt prova att lämna inputfältet tomt (två separata försök).                       | Ett felmeddelande visas för användaren som beskriver vad som gått fel.                                         | ✔️       |
| 4   | Det ska finnas 5 olika konverterare: "Length Converter", "Temperature Converter", "Time Converter", "Volume Converter" och "Weight Converter". | Kontrollera att varje konverterare kan väljas och aktiveras.                                                        | Varje konverterare finns tillgänglig som val och öppnas korrekt när den väljs.                                 | ✔️       |
| 5   | "Length Converter" ska omvandla mellan millimeter, centimeter, meter, kilometer, inches, feet, yards och miles. | Utför en konvertering mellan alla enheter fram och tillbaka (mm, cm, km, inches, feet, yards, miles) i "Length Converter". | Varje enhet omvandlas korrekt och visar rätt resultat för vald enhet.                                      | ✔️       |
| 6   | "Temperature Converter" ska omvandla mellan Celsius och Fahrenheit.                                       | Konvertera 0 °C till Fahrenheit samt 32 °F till Celsius.                                                             | 0 °C omvandlas till 32 °F och 32 °F omvandlas till 0 °C korrekt.                                              | ✔️       |
| 7   | "Time Converter" ska omvandla mellan 12-timmarsformat och 24-timmarsformat.                               | Ange 1:30 PM i 12-timmarsformat och konvertera till 24-timmarsformat, och vice versa.                               | 1:30 PM omvandlas till 13:30 och 13:30 omvandlas tillbaka till 1:30 PM.                                       | ✔️       |
| 8   | "Volume Converter" ska omvandla mellan liter och gallon.                                                  | Konvertera 1 liter till gallon och 1 gallon till liter.                                                              | 1 liter omvandlas till 0.26 gallon, och 1 gallon omvandlas till 3.79 liter.                                   | ✔️       |
| 9   | "Weight Converter" ska omvandla mellan kilogram och pounds.                                               | Konvertera 1 kg till pounds och 1 pound till kilogram.                                                               | 1 kg omvandlas till 2.2 pounds, och 1 pound omvandlas till 0.45 kilogram.                                     | ✔️       |

## Licens
Projektet är licenserat under MIT-licens.