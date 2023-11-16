export default class GenericfunctionHelper{
    static genericRandomString() {
        const length = 10; // You can adjust the length as needed
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }

      
    
        static  genericRandomNumber(maxNumber =10000){
             return Math.round(maxNumber * (Math.random()))
         }
     }



