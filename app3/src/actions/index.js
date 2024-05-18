/*Essa função simples é chamada de "Action Creator" e é responsável por criar e retornar 
um objeto "action", que, ao ser disparado, irá comunicar ao Reducer 
que o type é "CLICK_UPDATE_VALUE", além do valor "newValue: value" 
que deverá ser atualizado na Store.*/
import { CLICK_UPDATE_VALUE } from "./actionTypes";

export const clickButton = value => ({ 
    type: CLICK_UPDATE_VALUE, 
    newValue: value 
}); 