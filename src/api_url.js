export const api_urls  = { 
      
    users :{

         //user related routes 
        ['check-user-names']:"/v1/check-user-names" ,
        'get-added-questions-cat':"/v1/get-added-questions-cat",
        ['get-questions-by-search']:"/v1/get-questions-by-search",
        ['give-ratings']:"/v1/give-ratings",

        // pdf  routes 
        ['get-paid-cat-files']:'/v1/get-paid-cat-files?catId=',
         ['get-paid-pdf']:'/v1/get-paid-pdf',
         "download-file":"/v1/download-file?filePath=",
        
     //  paid question routes 
          "asign-question-permission":"/v1/asign-question-permission" ,


   
      
        },

      

    

    payment:{
      // payment routes 
      createOrder:'/v1/create-an-order',
      succesfull_transaction:'/v1/succesfull_transaction'      
    }

    ,
    notification :{
          //  notification 
      "send-push-notification":"/v1/send-push-notification"

    },


    referrals:{
      ['get-referral-code']:'referral/get-referral-code',
      ['check-valid-referral-code']:'referral/check-valid-referral-code/:referralCode',
      ['redeem-rewards-into-coins']:'quiz/redeem-rewards-into-coins'
    },

    'get-users-quiz-history':'quiz/get-users-quiz-history'
     
}