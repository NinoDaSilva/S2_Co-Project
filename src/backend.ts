import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function allEvents() {
    const records = await pb.collection('events').getFullList() ;
    return records ;
    }

export async function OneEvent(id) {
    const record = await pb.collection('events').getOne(id) ;
    return record ;
    }
