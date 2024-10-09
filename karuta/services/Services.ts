import {CardTypes} from "../models/types";

/**
 * Services class to interact with the backend API create by Louis
 */
class Services {
    endpoint = "http://157.159.195.108:8000"

    /**
     * Fetches the names of all available decks from the api.
     * @returns {Promise<string[]>} A promise that resolves to an array of deck names.
     */
    async getDeckNames(): Promise<string[]> {
        const response = await fetch(this.endpoint+"/deck_names");
        const data = await response.text();
        return data.split("\n").slice(0, -1);
    }

    async getDeck(name: string): Promise<{cards: CardTypes[]}> {
        const response = await fetch(this.endpoint+"/deck_metadata/"+name);
        return await response.json()
    }
}
export default new Services;