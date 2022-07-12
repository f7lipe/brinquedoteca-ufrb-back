import * as userRepository from '../repositories/userRepository.js';


export async function getUser(email){
    const user = await userRepository.getUserByEmail(email);
    if(!user) throw {
        status: 401,
        message: 'User not found'
    };

    return user
}