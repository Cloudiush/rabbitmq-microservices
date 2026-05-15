# Mikroserwisy z kolejką komunikatów (RabbitMQ)

**Autorzy:** Klaudiusz Staniszewski 34479 oraz Jakub Kamiński 34490

**Temat projektu:** Mikroserwisy z kolejką komunikatów (RabbitMQ): System składający się z dwóch aplikacji (Producer i Consumer) komunikujących się asynchronicznie przez kontener RabbitMQ

## Opis architektury
Projekt prezentuje asynchroniczną komunikację między mikroserwisami. 

1. **RabbitMQ (Broker):** Serwer zarządzający kolejką wiadomości. Wystawia również interfejs graficzny.
2. **Producer:** Aplikacja Node.js, która cyklicznie generuje wiadomości i wysyła je do kolejki.
3. **Consumer:** Aplikacja Node.js, która nasłuchuje na kolejce, pobiera wiadomości i je "przetwarza".

## Instrukcja uruchomienia
1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/Cloudiush/rabbitmq-microservices.git
   cd rabbitmq-microservices
2. Skopiuj plik `.env.example` do pliku `.env`
3. Uruchom projekt komendą:
   ```bash
   docker-compose up -d --build
4. Aby zobaczyć przepływ danych w terminalu:
   ```bash
   docker-compose logs -f
5. Przeglądarkowy panel zarządzania RabbitMQ dostępny jest pod adresem: `http://localhost:15672` (Logowanie danymi z `.env`).