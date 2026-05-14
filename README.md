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

## Instrukcja uruchomienia
1. Sklonuj repozytorium.
2. Skopiuj plik `.env.example` do pliku `.env` (lub upewnij się, że plik `.env` istnieje w głównym katalogu) i zdefiniuj w nim porty:
3. Uruchom projekt komendą:
   `docker-compose up -d --build`
4. Aby zobaczyć przepływ danych w terminalu:
   `docker-compose logs -f`
5. Przeglądarkowy panel zarządzania RabbitMQ dostępny jest pod adresem: `http://localhost:15672` (Logowanie danymi z `.env`).