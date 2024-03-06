export function generateRandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    //var S4 = function() {
      //  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    //};
    //return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}