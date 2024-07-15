import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Components
import FooterSection from './Footer/FooterSection'
import HeaderSection from './Header/HeaderSection'

// Data

const Privacy = (props) => {
  return (
    <div style={props.style}>
          {/* Header Start */}
          <HeaderSection theme="light"/>
            {/* Header End */}
             {/* Section Start */}
      <section className="bg-lightgray py-[40px] sm:py-[30px] mt-[130px]">
        <Container>
          <Row className="xs:text-center">
            <Col xl={8} lg={6} className="flex md:justify-center md:mb-[15px] sm:block sm:text-center">
              <h1 className="text-lg text-darkgray font-medium mb-0 font-serif inline-block">Privacy policy</h1>
              <span className="font-serif text-md relative pl-[25px] ml-[25px] block sm:mt-[5px] sm:p-0 before:absolute before:bg-darkgray before:content-[''] before:h-[12px] before:top-[4px] before:w-[2px] before:left-0 sm:before:hidden sm:ml-0">Kinder- und Jugendarztpraxis</span>
            </Col>
            <Col xl={4} lg={6} className="breadcrumb justify-end px-[15px] text-sm font-serif m-0 md:justify-center">
              <ul>
                <li><Link aria-label="link for" to="/">Home</Link></li>
                <li>Privacy policy</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}
      {/* Section Start */}
      <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
            <Container>
                <Row className="items-center justify-center">
                    <Col lg={9} md={12} className="col-12">
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">IMPRESSUM</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Dr. med. Sybille Walker<br/>
                        Dr. med. Sybille Walker<br/>
                        Beinsteinerstr.4<br/>
                        71334 Waiblingen<br/>
                        Tel. 07151 – 21080<br/>
                        Fax. 07151 - 902442<br/>
                        email: praxis@kjk-wn.de</p>
                        
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Berufsbezeichnung</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Fachärztin für Kinder- und Jugendmedizin / Deutschland</p>
                        
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Ärztekammer</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Landesärztekammer Baden-Württemberg<br/>
                        Ärztekammer: Ärztekammer Baden-Württemberg, Jahnstr. 40, 70597 Stuttgart, Tel. 0711 769890<br/>
                        <a href="http://www.aerztekammer-bw.de">www.aerztekammer-bw.de</a></p>
                        
                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Kassenärztliche Vereinigung</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">KV Baden-Württemberg, Albstadtweg 11, 70567 Stuttgart, 0711 7875-0<br/>
                        <a href="http://www.kvbawue.de">www.kvbawue.de</a></p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Danke</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">An dieser Stelle möchte ich mich herzlich bei meiner Mutter für eine Menge wichtiger Ratschläge und Fachkenntnisse, Geduld und eine tolle berufliche Zusammenarbeit bedanken.<br/>
                        Ebenso bedanke ich mich von Herzen bei meinem Partner, der mir bei unseren Renovierungsarbeiten so tatkräftig zur Seite stand und stets ein Ohr für Ideen und Vorschläge hatte.<br/>
                        Außerdem bedanke ich mich nachdrücklich bei unserem Freund und Maler Kaan Eren (EREN RaumDesign), der mir stets mit kompetentem Rat und zuverlässiger Arbeit beiseite stand.<br/>
                        Und zuletzt natürlich herzlichen Dank an unseren langbewährten Informatiker Frank Bärenfeld und unseren Freund Isaac Nyembo, mit dessen Hilfe diese tolle Seite erstellt werden konnte.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">HAFTUNGSAUSCHLUSS</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Die Inhalte auf der Webseite wurden sorgfältig überprüft und beruhen auf dem jeweils aktuellen Stand. Der Anbieter behält sich vor, die eingestellten Daten und Informationen jederzeit und ohne Vorankündigung zu bearbeiten und zu aktualisieren. Trotz ständiger Überarbeitung der Webseite kann keine Haftung oder Garantie für Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen übernommen werden. Die auf der Webseite zur Verfügung gestellten Dokumente und Grafiken können Ungenauigkeiten und typografische Fehler enthalten.<br/>
                        Die Inhalte der Webseite sind ausschließlich zu Informationszwecken bestimmt. Die Informationen stellen in kein erweise Ersatz für professionelle Beratungen oder Behandlungen durch den ausgebildeten Facharzt bzw. Fachärztin dar. Die Inhalte dürfen und können nicht für die Erstellung eigenständiger Diagnosen oder für die Auswahl und Anwendung von Behandlungsmethoden verwendet werden. Für Schäden oder Unannehmlichkeiten, die durch den Gebrauch oder Missbrauch dieser Informationen entstehen, kann die Praxis nicht - weder direkt noch indirekt - zur Verantwortung gezogen werden.<br/>
                        Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Anbieter keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">DATENSCHUTZERKLÄRUNG</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:<br/>
                        Dr. med. Sybille Walker<br/>
                        Beinsteinerstr.4<br/>
                        71334 Waiblingen<br/>
                        Tel. 07151 – 21080</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Ihre Betroffenenrechte</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:<br/>
                        • Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,<br/>
                        • Berichtigung unrichtiger personenbezogener Daten,<br/>
                        • Löschung Ihrer bei uns gespeicherten Daten,<br/>
                        • Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,<br/>
                        • Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und<br/>
                        • Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.<br/>
                        Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.<br/>
                        Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung. Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Zwecke der Datenverarbeitung durch die verantwortliche Stelle und Dritte</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung genannten Zwecken. Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den genannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:<br/>
                        • Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,<br/>
                        • die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,<br/>
                        • die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,<br/>
                        • die Verarbeitung zur Wahrung berechtigter Interessen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Löschung bzw. Sperrung der Daten</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Erfassung von allgemeinen Daten und Informationen</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Unsere Internetseite erfasst mit jedem Aufruf durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.<br/>
                        Bei der Nutzung dieser allgemeinen Daten und Informationen ziehen wir keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch uns daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Rechtsgrundlage der Verarbeitung</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Bestehen einer automatisierten Entscheidungsfindung</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Verwendung von Google Maps</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.<br/>
                        Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie <a href="https://policies.google.com/privacy">hier</a>.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Änderung unserer Datenschutzbestimmungen</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>

                        <h6 className="font-serif text-darkgray font-medium -tracking-[1px]">Fragen an den Datenschutzbeauftragten</h6>
                        <p className="mb-[25px] md:mb-[20px] sm:mb-[15px]">Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:<br/>
                        Frank Bärenfeld<br/>
                        Sophienstr. 5<br/>
                        73663 Berglen<br/>
                        EMail: <a href="mailto:datenschutz@kommed.net">datenschutz@kommed.net</a><br/>
                        Telefon: 07195/5065053</p>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* Section End */}

        {/* Footer start  */}
          <FooterSection/>
                {/* Footer end */}
    </div>
  )
}

export default Privacy
