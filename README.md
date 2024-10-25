# Vue-Python-Tempplate
Template for vue and python projects

## Kørsel af Frontenden (Vue)
* CD hen til vue folder: ``` cd vue ```
* Installerer afhængigheder: ``` npm install ```
* Compile, hot reload og start frontenden: ``` npm run dev ```

## Kørsel af Bakcenden(Python)
* Start applikationen: ``` python python/src/main.py ```

## Udviklings commands:
* Byg og start docker container: ````docker compose up --build```
* Bygge docker image: ```docker build -t vue-python-template .```
* Start container ud fra image: ```docker run -p 8080:8080 vue-python-template```
* Lint: ```flake8 python/src tests --count --select=E9,F63,F7,F82 --show-source --statistics```
* Unit tests: ``` pytest ```