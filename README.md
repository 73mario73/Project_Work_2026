# Project_Work_2026
Project Work ITS Olivetti maggio 2026

PW: GESTIONE DI ARCHIVI DI LIBRI DI BIBLIOTECHE.
Tecnologie richieste: React per il FE, Node.js per il BE e MongoDB come basi dati.
Docente: Luca Bonacorsi.
Il project work consiste nello sviluppo di un’applicazione web full-stack per la gestione
dell’archivio di una biblioteca, utilizzando tecnologie moderne come React per il frontend,
Node.js con Express per il backend e MongoDB per la gestione dei dati.
L’obiettivo è realizzare un sistema che consenta agli utenti di consultare un catalogo di
libri, visualizzarne i dettagli ed effettuare ricerche per titolo o autore. Parallelamente,
il sistema dovrà prevedere funzionalità per l’inserimento, la modifica e la cancellazione
dei libri, secondo il paradigma CRUD (Create, Read, Update, Delete).
Dal punto di vista architetturale, il progetto dovrà essere suddiviso in tre parti
principali. Il frontend, sviluppato come Single Page Application in React, dovrà fornire
un’interfaccia utente completa che permetta di interagire con il backend tramite API REST.
In particolare, l’interfaccia dovrà includere componenti per la visualizzazione dei dati
(lista e dettaglio dei libri), oltre a form dedicati all’inserimento di nuovi libri, alla
modifica di quelli esistenti e alla loro eventuale cancellazione. Il frontend dovrà quindi
essere in grado di gestire tutte e quattro le operazioni CRUD inviando richieste al server
Node.js e aggiornando dinamicamente la visualizzazione dei dati.
Il backend, realizzato con Node.js ed Express, esporrà gli endpoint necessari per
supportare tutte le operazioni CRUD sui libri e per gestire l’autenticazione degli utenti.
Il database MongoDB sarà utilizzato per memorizzare le informazioni relative ai libri e
agli utenti.
In una prima fase, tutte le funzionalità dell’applicazione possono essere rese disponibili
a qualsiasi utente. Tuttavia, è previsto come estensione del progetto (e come elemento di
maggiore complessità) l’introduzione di un sistema di autenticazione e autorizzazione. In
questo caso, le operazioni di inserimento, modifica e cancellazione dei libri dovranno
essere accessibili esclusivamente agli utenti autenticati, mentre la consultazione del
catalogo potrà rimanere pubblica.
Particolare attenzione dovrà essere dedicata proprio al sistema di autenticazione, che
rappresenta una parte di ricerca del progetto. Gli studenti dovranno documentarsi
autonomamente sull’utilizzo dei JSON Web Token (JWT) e implementare un sistema basato su
access token e refresh token. L’accesso alle operazioni protette dovrà richiedere un token
valido e dovrà essere previsto un meccanismo di rinnovo tramite refresh token.
Il sistema dovrà prevedere almeno la gestione di un insieme di informazioni per ciascun
libro, come titolo, autore, anno di pubblicazione e genere, oltre ai dati necessari per la
gestione degli utenti, inclusa la memorizzazione sicura delle password.
