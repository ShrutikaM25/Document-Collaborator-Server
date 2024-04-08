import mongoose from 'mongoose';

const Connection = async (username = 'shruti', password = '9876543210') =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.yfydkq4.mongodb.net/`

    try {

        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser:true});
        console.log('Database Connected successfully!')

    }
    catch(error) {
        console.log('Error while connecting with database', error)
    }
}

export default Connection;