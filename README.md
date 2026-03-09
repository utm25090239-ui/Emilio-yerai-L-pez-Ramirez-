Proof of Study – Solana Program
Overview

Proof of Study es un programa simple en la blockchain de Solana que permite registrar horas de estudio de un usuario.
Cada usuario puede crear una cuenta en la blockchain donde se almacenan:

horas totales estudiadas

número de sesiones de estudio

El objetivo del proyecto es demostrar cómo guardar y modificar datos on-chain utilizando Anchor.

Features

Crear una cuenta de estudio en la blockchain

Registrar horas de estudio

Llevar conteo de sesiones de estudio

Persistencia de datos en Solana

Project Structure
proof-of-study
│
├── program
│   └── lib.rs
│
├── tests
│   └── proof-of-study.ts
│
└── client
    └── client.ts
    program

Contiene el smart contract escrito en Rust usando Anchor.

tests

Pruebas automatizadas en TypeScript para verificar el funcionamiento del programa.

client

Código de cliente para interactuar con el programa desde una aplicación externa.

How It Works

El programa tiene dos instrucciones principales:

1 Initialize

Crea una cuenta de estudio para el usuario.

Inicializa:

owner (dueño de la cuenta)

hours = 0

sessions = 0

2 Add Hours

Permite registrar horas de estudio.

Actualiza:

hours → suma las nuevas horas

sessions → incrementa el número de sesiones

Data Structure

La cuenta principal del programa es:
StudyAccount
Technologies Used

Rust

Anchor Framework

TypeScript

Solana Blockchain

Running the Project

En Solana Playground:

Abrir el proyecto

Compilar el programa

Build

Ejecutar las pruebas

Test

Las pruebas crearán una cuenta de estudio y registrarán horas en la blockchain.

Example Flow

1 Usuario inicializa su cuenta de estudio
2 Usuario registra horas de estudio
3 El programa actualiza los datos almacenados

Ejemplo:

Initial State
hours: 0
sessions: 0

Después de registrar 3 horas:

hours: 3
sessions: 1
Possible Improvements

Este proyecto puede ampliarse con funcionalidades más avanzadas:

Sistema de recompensas

NFTs como insignias de estudio

Leaderboard de estudiantes

Token reward por horas estudiadas

Verificación de sesiones de estudio

Learning Goals

Este proyecto demuestra:

creación de cuentas en Solana

manejo de estado on-chain

interacción entre cliente y programa

uso de Anchor para desarrollar smart contracts

License

MIT License

Si quieres, puedo también darte algo que te ayudaría mucho más en tu proyecto:

un README mucho más profesional (nivel GitHub real)

un diagrama de arquitectura del programa

o otro proyecto en Solana Playground más interesante para entregar en clase (por ejemplo un sistema de votación descentralizado o un mini marketplace de NFTs).
