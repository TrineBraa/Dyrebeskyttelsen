function extraContact(){
    return `  
       
        Dyrebeskyttelsen Norge<br/>
        Øvre gate 7<br/>
        0551 Oslo<br/>
        Telefon: 23139259<br/>
        <br/>
        Telefontiden vår er mandag til fredag 09.00 til 15.00<br/>
        I juli er telefontid fra 10.00 til 14.00
    `;
}

function contactSheet(){
    return `
    <div id="infoSheet">
        <h2>Før du kontakter oss</h2>
        <br/>
        <p>Våre nettsider inneholder mye informasjon. Ved å undersøke om du får svar på spørsmålet ditt <a href="https://www.dyrebeskyttelsen.no/">her</a>. 
        Sparer du oss for å bruke tid som vi kan bruke på å hjelpe flere dyr. </P>
        <br/>
        <br/>
        <b>Har du et annet spørsmål?</b>
        <br/>
        Fyll ut kontaktskjemaet under:<br/>
        <br/>
        <input class="contactsheet" type="text" placeholder="Ditt Navn"><input class="contactsheet" type="text" placeholder="Din E-postadresse">
        <br/>
        <textarea class="contactsheet2" type="text" placeholder="Skriv din melding her..."></textarea>
        <br/>
        <button id="sendEmailButton">Send</button>
    </div>
    `;
}

function drawDepartments(){
    return `
    <h2>Lokalavdelinger</h2>
    <br/>
    <br/>
    <table id="departments">
        <tr>
            <th>Avdeling</th>
            <th>Epost</th>
            <th>Telefon</th>
        </tr>
        <tr>
            <td>Bergen & Hordaland</td>
            <td>db.bergen.hordaland@gmail.com</td>
            <td>95 45 77 76</td>
        </tr>
        <tr>
            <td>Bodø</td>
            <td>dyrebeskyttelsen.norge.bodo@gmail.com</td>
            <td>23 13 92 50</td>
        </tr>
        <tr>
            <td>Drammen & omland</td>
            <td>post@ddoo.no@gmail.com</td>
            <td>95 92 41 37</td>
        </tr>
        <tr>
            <td>Finnmark</td>
            <td>finnmark@dyrebeskyttelsen.no</td>
            <td>23 13 92 50 </td>
        </tr>
        <tr>
            <td>Flekkefjord</td>
            <td>flekkefjord@dyrebeskyttelsen.no</td>
            <td>23 13 92 50 </td>
        </tr>
        <tr>
            <td>Fredrikstad & omegn</td>
            <td>info@frdb.no</td>
            <td>23 13 92 50 </td>
        </tr>
        <tr>
            <td>Harstad</td>
            <td>kontakt@dyrebeskyttelsen-harstad.no</td>
            <td>90 97 67 20</td>
        </tr>
        <tr>
            <td>Haugaland</td>
            <td>haugaland@dyrebeskyttelsen.no</td>
            <td>91 79 05 35</td>
        </tr>
        <tr>
            <td>Hedmark</td>
            <td>hedmark@dyrebeskyttelsen.no</td>
            <td>41 36 41 79</td>
        </tr>
        <tr>
            <td>Kongsberg</td>
            <td>dyrebeskyttelsennorgekongsberg@gmail.com</td>
            <td>47 24 32 71</td>
        </tr>
        <tr>
            <td>Lillehammer & omegn</td>
            <td>lillehammer@dyrebeskyttelsen.no</td>
            <td>93 84 86 39</td>
        </tr>
        <tr>
            <td>Lyngdal & Farsund</td>
            <td>farsund@dyrebeskyttelsen.no</td>
            <td>92 94 29 65</td>
        </tr>
        <tr>
            <td>Lofoten & Vesterålen</td>
            <td>dyrebeskyttelsen.love@gmail.com</td>
            <td></td>
        </tr>
        <tr>
            <td>Mandal</td>
            <td>mandal@dyrebeskyttelsen.no</td>
            <td>45 05 80 04</td>
        </tr>
        <tr>
            <td>Mo i Rana</td>
            <td>dbmoirana@gmail.com</td>
            <td>91 88 93 20</td>
        </tr>
        <tr>
            <td>Møre & Romsdal</td>
            <td>post@dbmr.no</td>
            <td>23 13 92 50</td>
        </tr>
        <tr>
            <td>Nord-Jæren</td>
            <td>nord-jaeren@dyrebeskyttelsen.no</td>
            <td>23 13 92 50</td>
        </tr>
        <tr>
            <td>Nord-Trøndelag</td>
            <td>db.nordtrondelag@gmail.com</td>
            <td>40 55 09 67</td>
        </tr>
        <tr>
            <td>Oslo & Akershus</td>
            <td>post@dooa.no</td>
            <td>23 13 45 45</td>
        </tr>
        <tr>
            <td>Ringerike</td>
            <td>post@dyrebeskyttelsenringerike.no</td>
            <td>98 04 72 12</td>
        </tr>
        <tr>
            <td>Sogn & Fjordane</td>
            <td>sfj@dyrebeskyttelsen.no</td>
            <td>41 36 92 58</td>
        </tr>
        <tr>
            <td>Sør-Trøndelag</td>
            <td>sor-trondelag@dyrebeskyttelsen.no</td>
            <td>95 22 52 75</td>
        </tr>
        <tr>
            <td>Telemark</td>
            <td>telemark@dyrebeskyttelsen.no</td>
            <td>90 65 28 79</td>
        </tr>
        <tr>
            <td>Tromsø</td>
            <td>dyrebeskyttelsen.tromso@gmail.com</td>
            <td>90524047 / 97012141</td>
        </tr>
        <tr>
            <td>Vestfold</td>
            <td>post@dbnv.no</td>
            <td>33 07 08 00</td>
        </tr>
    </table>
    <br/>
    
    `;
}