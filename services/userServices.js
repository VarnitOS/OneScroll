import { supabase } from "../lib/supabase";

export const getUserData = async(userId) => {
    try{
        const {data, error} = await supabase
        .from('users')
        .select()
        .eq('id', userId)
        .single();
        if(error) {
            return {success: false, msg: error?.message};
        }
    } catch (error) {
        console.log('error getting user data:', error);
        return {success: false, error: error.message};
    }
}