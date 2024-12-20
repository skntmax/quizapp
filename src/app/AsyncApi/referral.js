import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getCookie } from 'cookies-next'
import { api_urls } from '@/api_url'
import { cookies } from '@/constant'

// Define a service using a base URL and expected endpoints
 
const referralApi = createApi({
  reducerPath: 'referalApi',
  tagTypes: ['referralCode', "redeemIntoCoins" , ],
  baseQuery: fetchBaseQuery({ baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL  }),
  endpoints: (builder) => ({

    getReferralCode: builder.query({
            query: (body) => (  {
               url: api_urls.referrals['get-referral-code'],
               method: 'GET',
               headers:{
                "authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`,
                "Content-Type": "appliation/json"   
                 }
            }),
            providesTags:['referralCode']
          },  
      )            
     ,

     
    checkValidReferralCode: builder.query({
      query: (referralCode) => (  {
         url: api_urls.referrals['check-valid-referral-code'].replace(':referralCode',referralCode),
         method: 'GET',
         headers:{
          "Content-Type": "appliation/json"   
           }
      }),
      providesTags:['checkReferralCode']
    },  
   )    ,


    
   checkReferralCode: builder.mutation({
    query: (referralCode) => (  {
       url: api_urls.referrals['check-valid-referral-code'].replace(':referralCode',referralCode),
       method: 'GET',
       headers:{
        "Content-Type": "appliation/json"   
         }
    }),
    providesTags:['checkValidReferralCode']
  },  
 ),


 getQuizHistory: builder.query({
    query: (referralCode) => (  {
       url: api_urls['get-users-quiz-history'],
       method: 'GET',
     headers:{
       "authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, 
       },
    }),
    providesTags:['quizHistory']
  },  
 ),

 
 redeemRewardIntoCoins: builder.mutation({
  query: (body) => (  {
     url: api_urls.referrals['redeem-rewards-into-coins'],
     method: 'POST',
     headers:{
       "authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, 
       },
      body:body
  }),
  providesTags:['redeemIntoCoins']
},  
)    



    }),
   
  transformResponse: (response, meta, arg) => response.data,
      // Pick out errors and prevent nested properties in a hook or selector
 transformErrorResponse: (response, meta, arg) => response.data,
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReferralCodeQuery , useCheckValidReferralCodeQuery , useCheckReferralCodeMutation ,useRedeemRewardIntoCoinsMutation , useGetQuizHistoryQuery  } = referralApi    

export default referralApi