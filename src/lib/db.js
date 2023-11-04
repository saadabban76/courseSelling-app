const { DB_USERNAME, DB_PASSWORD } = process.env;
export const MdConnectionstring = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wgmqb0q.mongodb.net/`;
