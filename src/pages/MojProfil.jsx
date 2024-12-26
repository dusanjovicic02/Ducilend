import React from 'react';

function MojProfil() {
  return (
    <main className="main-container">
      {/* Glavni deo stranice */}
      <div className="main-content">
        <section className="section">
          <h2 className="section-title">Unternehmensdaten</h2>
          <form className="form-grid">
            <div className="form-group">
              <label>Name des Unternehmens*</label>
              <input type="text" placeholder="Text hinzufügen" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Website des Unternehmens*</label>
              <input type="text" placeholder="https://" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Anschrift/Strasse*</label>
              <input type="text" placeholder="Text hinzufügen" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>PLZ*</label>
              <input type="text" placeholder="66651" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Stadt*</label>
              <input type="text" placeholder="Text hinzufügen" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Rechtsform des Unternehmens*</label>
              <select>
                <option>GmbH</option>
              </select>
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Gründungsjahr Ihres Unternehmens*</label>
              <input type="text" placeholder="YYYY" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Anzahl Mitarbeiter im Unternehmen*</label>
              <select>
                <option>1 - 10</option>
              </select>
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
          </form>
          <button className="change-access-btn">Zugangsdaten ändern</button>
        </section>

        <section className="section">
          <h2 className="section-title">Mein Suchprofil</h2>
          <form className="form-grid">
            <div className="form-group">
              <label>Vorname*</label>
              <input type="text" placeholder="Text hinzufügen" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Nachname*</label>
              <input type="text" placeholder="Text hinzufügen" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Ihre Position im Unternehmen*</label>
              <input type="text" placeholder="Text hinzufügen" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Email Adresse*</label>
              <input type="text" placeholder="https://" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
            <div className="form-group">
              <label>Telefonnummer*</label>
              <input type="text" placeholder="0123456" />
              <button className="edit-btn">
                <i className="fas fa-edit">Edit</i>
              </button>
            </div>
          </form>

          <h3 className="section-title">Mein Suchprofil</h3>
          <p>Unser Unternehmen interessiert sich für Grundstücke die für folgende Anwendungen geeignet sind:</p>
          <div className="checkbox-grid">
            {[
              "Windenergie (On-Shore)",
              "Freiflächen-Solarenergie",
              "Batteriespeicher",
              "Wärmespeicher",
              "Wasserstoff",
              "Elektromobilität-Ladeinfrastruktur",
              "Ökologische Aufwertungsmaßnahmen (z.B. Ökopunkte)",
            ].map((option, index) => (
              <label key={index} className="checkbox-group">
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <button className="edit-btn">Suchprofil ändern</button>
        </section>

        <section className="section">
          <h2 className="section-title">Mein Abo</h2>
          <div className="subscription-grid">
            <div className="subscription-card">
              <h3>Paket Free</h3>
              <p>€0 / month</p>
              <ul>
                <li>Full Access to Landingfolio</li>
                <li>100 GB Free Storage</li>
                <li>Unlimited Visitors</li>
                <li>10 Agents</li>
                <li>Live Chat Support</li>
              </ul>
              <button className="status-btn">Status aktiv</button>
            </div>
            <div className="subscription-card">
              <h3>Paket Premium</h3>
              <p>€599 / month</p>
              <ul>
                <li>Full Access to Landingfolio</li>
                <li>100 GB Free Storage</li>
                <li>Unlimited Visitors</li>
                <li>10 Agents</li>
                <li>Live Chat Support</li>
              </ul>
              <button className="book-btn">Paket buchen</button>
            </div>
            <div className="subscription-card">
              <h3>Paket Enterprise</h3>
              <p>Preis auf Anfrage</p>
              <ul>
                <li>Full Access to Landingfolio</li>
                <li>100 GB Free Storage</li>
                <li>Unlimited Visitors</li>
                <li>10 Agents</li>
                <li>Live Chat Support</li>
              </ul>
              <button className="contact-btn">Sales kontaktieren</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MojProfil;
