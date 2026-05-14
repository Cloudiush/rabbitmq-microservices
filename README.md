# Mikroserwisy z kolejką komunikatów (RabbitMQ)

**Autorzy:** Klaudiusz Staniszewski 34479 oraz Jakub Kamiński 34490
**Temat projektu:** Mikroserwisy z kolejką komunikatów (RabbitMQ): System składający się z dwóch aplikacji (Producer i Consumer) komunikujących się asynchronicznie przez kontener RabbitMQ

## Opis architektury
Projekt prezentuje asynchroniczną komunikację między mikroserwisami. 

1. **RabbitMQ (Broker):** Serwer zarządzający kolejką wiadomości. Wystawia również interfejs graficzny.
2. **Producer:** Aplikacja Node.js, która cyklicznie generuje wiadomości i wysyła je do kolejki.
3. **Consumer:** Aplikacja Node.js, która nasłuchuje na kolejce, pobiera wiadomości i je "przetwarza".

Wymagania techniczne:
- Użyto odchudzonych obrazów `alpine` dla bazy i aplikacji.
- Wrażliwe dane (hasła, użytkownicy) są odseparowane od kodu i przekazywane przez plik `.env`.

## Uruchomienie
1. Upewnij się, że posiadasz plik `.env` z danymi autoryzacyjnymi.
2. Uruchom projekt komendą:
   `docker-compose up -d --build`
3. Aby zobaczyć przepływ danych w terminalu:
   `docker-compose logs -f`
4. Przeglądarkowy panel zarządzania RabbitMQ dostępny jest pod adresem: `http://localhost:15672` (Logowanie danymi z `.env`).