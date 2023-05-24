import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

import type { EventsResponse } from '@/pocketbase-types';
import type { ProduitsResponse } from '@/pocketbase-types';

export async function allEvents() {
    const records = await pb.collection('events').getFullList<EventsResponse>() ;
    return records ;
}

export async function OneEvent(id : string) {
    const record = await pb.collection('events').getOne<EventsResponse>(id) ;
    return record ;
}

export async function allProduits() {
    const records = await pb.collection('produits').getFullList<ProduitsResponse>() ;
    return records ;
}    