import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

import type { EventsResponse } from '@/pocketbase-types';
import type { ProduitsResponse } from '@/pocketbase-types';
import type { UsersResponse } from '@/pocketbase-types';

// Events
export async function allEvents() {
    const records = await pb.collection('events').getFullList<EventsResponse>() ;
    return records ;
}

export async function OneEvent(id : string) {
    const record = await pb.collection('events').getOne<EventsResponse>(id) ;
    return record ;
}

// Produits
export async function allProduits() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>() ;
    return records ;
}  


export async function FruitsEte() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saison = "été" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}

export async function FruitsPrintemps() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saison = "printemps" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}    

export async function FruitsAutomne() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saison = "automne" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}    

export async function FruitsHiver() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saiso = "hiver" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}    


export async function LegumesEte() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saison = "été" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}   

export async function LegumesPrintemps() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saison = "printemps" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}    

export async function LegumesAutomne() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saison = "automne" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}    

export async function LegumesHiver() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>({filter: 'saison = "hiver" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}    

// // Nom d'utlisateurs
// export const currentUser = pb.collection('users').getOne<UsersResponse>('username') ;