import express from 'express';
import fetch from 'node-fetch';


const playerIcon_Router = 'http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/';

const api_key = 'RGAPI-b2979e31-13dc-419a-a804-c0164b95d2e2';

function getPlayerData(playerId) {
    const apiUrl = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + playerId + '?api_key=' + api_key;
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        return data;
      });
  }
  

function injectHTML(list){
    const target = document.querySelector('#results');
    target.innerHTML = '';
    const listEl = document.createElement('ol');
    target.appendChild(listEl);

    list.forEach((item) => {
        const el = document.createElement('li');
        el.innerText = item.name;
        listEl.appendChild(el);
    });
}
async function mainEvent(){
    const text = document.querySelector('search-text');
    const form = document.querySelector('search-bar')
    form.addEventListener('input',(event) => {
        console.log(event.target.value)
    });
    form.addEventListener('sumbit',(submitEvent) => {
        submitEvent.preventDefault();
        injectHTML(data)
    });
    console.log(data)

}

document.addEventListener('DOMContentLoaded', async () => mainEvent());