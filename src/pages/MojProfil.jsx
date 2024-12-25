import React from 'react';

function MojProfil() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <ul className="space-y-4">
          <li className="hover:text-blue-400">Start</li>
          <li className="hover:text-blue-400">Benachrichtigungen</li>
          <li className="hover:text-blue-400">Mein Profil</li>
          <li className="hover:text-blue-400">Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ihr Profil, Firma GmbH</h2>

        <section className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-600">Unternehmensdaten</h3>
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Vorname"
              className="p-3 border rounded focus:outline-blue-500"
            />
            <input
              type="text"
              placeholder="Nachname"
              className="p-3 border rounded focus:outline-blue-500"
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default MojProfil;
