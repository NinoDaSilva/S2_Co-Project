/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Events = "events",
	Produits = "produits",
	Recettes = "recettes",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type EventsRecord = {
	title?: string
	image?: string
	description?: string
	date?: string
}

export enum ProduitsTypeOptions {
	"fruit" = "fruit",
	"légume" = "légume",
}

export enum ProduitsSaisonOptions {
	"printemps" = "printemps",
	"été" = "été",
	"automne" = "automne",
	"hiver" = "hiver",
}
export type ProduitsRecord = {
	name?: string
	image?: string
	type?: ProduitsTypeOptions
	saison?: ProduitsSaisonOptions
	disponible?: boolean
}

export type RecettesRecord = {
	titre?: string
	image?: string
	favori?: boolean
	temps?: number
	nbr_personnes?: number
	etape_1?: string
	etape_2?: string
	etape_3?: string
	etape_4?: string
	etape_5?: string
	etape_6?: string
	etape_7?: string
	etape_8?: string
	etape_9?: string
	etape_10?: string
}

export type UsersRecord = {
	first_name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type EventsResponse = Required<EventsRecord> & BaseSystemFields
export type ProduitsResponse = Required<ProduitsRecord> & BaseSystemFields
export type RecettesResponse = Required<RecettesRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	events: EventsRecord
	produits: ProduitsRecord
	recettes: RecettesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	events: EventsResponse
	produits: ProduitsResponse
	recettes: RecettesResponse
	users: UsersResponse
}