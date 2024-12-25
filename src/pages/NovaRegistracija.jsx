import React from 'react';

function NovaRegistracija() {
  return (
    <main>
      <div className="min-h-screen bg-blue-900 flex items-center justify-center">
        {/* Glavni kontejner */}
        <div className="bg-blue-700 rounded-lg p-10 shadow-lg w-full max-w-2xl text-white">
          {/* Naslovi */}
          <h2 className="text-3xl font-bold text-center mb-4">Neue Registrierung</h2>
          <p className="text-center mb-8">Daten zum Unternehmen</p>

          {/* Forma */}
          <form>
            {/* Prvi red */}
            <div>
              <label>Vorname*</label>
              <input type="text" placeholder="Vorname*" />
            </div>
            <div>
              <label>Nachname*</label>
              <input type="text" placeholder="Nachname*" />
            </div>

            {/* Drugi red */}
            <div>
              <label>Name des Unternehmens*</label>
              <input type="text" placeholder="Name des Unternehmens*" />
            </div>
            <div>
              <label>Ihre Position | Unternehmen*</label>
              <input type="text" placeholder="Ihre Position | Unternehmen*" />
            </div>

            {/* Treći red */}
            <div className="full-width">
              <label>Anschrift/Strasse*</label>
              <input type="text" placeholder="Anschrift/Strasse*" />
            </div>

            {/* Četvrti red */}
            <div>
              <label>PLZ*</label>
              <input type="text" placeholder="PLZ*" />
            </div>
            <div>
              <label>Stadt*</label>
              <input type="text" placeholder="Stadt*" />
            </div>

            {/* Peti red */}
            <div>
              <label>Website des Unternehmens</label>
              <input type="text" placeholder="Website des Unternehmens" />
            </div>
            <div>
              <label>Telefonnummer</label>
              <input type="text" placeholder="Telefonnummer" />
            </div>

            {/* Sekcija "Ihr Suchprofil" */}
            <div className="full-width">
          <h3 className="text-xl font-bold mb-4">Ihr Suchprofil</h3>
          <p className="mb-4">
            Unser Unternehmen interessiert sich für Grundstücke die für folgende Anwendungen geeignet sind:
          </p>
  <div className="grid grid-cols-2 gap-4">
    {[
      "Windenergie (On-Shore)",
      "Freiflächen-Solarenergie",
      "Batteriespeicher",
      "Wärmespeicher",
      "Wasserstoff",
      "Elektromobilität-Ladeinfrastruktur",
    ].map((option, index) => (
      <label key={index} className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600 bg-blue-800 border-none focus:ring-2 focus:ring-blue-400"
        />
        <span className="ml-2 text-white">{option}</span>
      </label>
    ))}
  </div>
  <div className="mt-4">
    <label className="block mb-2">Sonstige</label>
    <input
      type="text"
      placeholder="Beispiel"
      className="w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
</div>

            {/* Sekcija "Ihre Zugangsdaten" */}
            <div className="full-width mt-8">
  <h3 className="text-xl font-bold mb-4">Ihre Zugangsdaten</h3>
</div>

<div>
  <label>Email Adresse*</label>
  <input
    type="email"
    placeholder="max@musteradresse.de"
    className="w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>
<div>
  <label>Passwort*</label>
  <input
    type="password"
    placeholder="Passwort*"
    className="w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>
<div className="full-width">
  <label>Passwort Bestätigen*</label>
  <input
    type="password"
    placeholder="Passwort Bestätigen*"
    className="w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>

<div className="full-width mt-4">
  <label className="flex items-center">
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-blue-600 bg-blue-800 border-none focus:ring-2 focus:ring-blue-400"
    />
    <span className="ml-2 text-white">Ich akzeptiere die Datenschutzerklärung</span>
  </label>
</div>
<div className="full-width">
  <label className="flex items-center">
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-blue-600 bg-blue-800 border-none focus:ring-2 focus:ring-blue-400"
    />
    <span className="ml-2 text-white">Ich akzeptiere die Allgemeinen Geschäftsbedingungen</span>
  </label>
</div>

            
            

            {/* Dugmad */}
            <div className="mt-8 flex">
  <button className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600">
    Abbrechen
  </button>
  <div className="ml-auto">
    <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
      Weiter
    </button>
  </div>
</div>





          </form>
        </div>
      </div>
    </main>
  );
}

export default NovaRegistracija;
