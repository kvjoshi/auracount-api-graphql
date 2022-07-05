export const PORT = 5000;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb://kv:NOT%2311imbatman@ec2-3-108-254-133.ap-south-1.compute.amazonaws.com:27017?authSource=admin&readPreference=primary&ssl=false'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb://kv:NOT%2311imbatman@ec2-3-108-254-133.ap-south-1.compute.amazonaws.com:27017?authSource=admin&readPreference=primary&ssl=false'
    }
}
