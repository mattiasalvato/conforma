import * as ftp from 'basic-ftp';

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true; // Mostra i log e i passaggi nel terminale

  try {
    console.log("Connessione al server Aruba...");
    await client.access({
      host: "ftp.conformagroup.it", // oppure l'IP: "89.46.104.218"
      user: "4062365@aruba.it",
      password: "Welaten2026##",
      secure: false // Imposta a true se Aruba richiede FTPS esplicito (TLS)
    });

    console.log("Connesso! Caricamento dei file da ./dist...");
    
    // Su Aruba la root web è solitamente "www.conforma.it" o "conforma.it"
    // Se l'utente FTP atterra già dentro la root pubblica dei file, metti solo "/"
    await client.uploadFromDir("dist", "www.conforma.it");

    console.log("✅ Deploy completato con successo!");
  } catch (err) {
    console.error("❌ Errore durante il deploy:", err);
  } finally {
    client.close();
  }
}

deploy();