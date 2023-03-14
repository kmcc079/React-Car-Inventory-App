const token = `a7d8bbcfcb0ad1388a22bece3db1b280475b83a91730aac9`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://tortoiseshell-gratis-fish.glitch.me/api/cars`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server');
        }

        return await response.json();
    },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://tortoiseshell-gratis-fish.glitch.me/api/cars`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on server');
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://tortoiseshell-gratis-fish.glitch.me/api/cars/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server');
        }

        return await response.json();
    },

    delete: async (id: string) => {
        const response = await fetch(`https://tortoiseshell-gratis-fish.glitch.me/api/cars/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            }    
        });

        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}