import React from 'react';
import styles from '@/styles/plans.module.css'

const Plans = () => {
    const plans = [
        {
            type:'Basic',
            price: '$0/mo',
            button: 'Get started for free',
            offers:[
                '5GB private permanent storage',
                'Unlimited volume for month',
                'Private Secure Sharing only with specific users',
                'Recieve file inbx',
                'Profile Page and Personalization',
                'Convert docs to PDF',
                'Convert Videos to MP4'
            ]
        },
        {
            type:'Pro Features',
            price: '$6.9/mo',
            button: 'Upgrade to PRO',
            offers:[
                'Speed and protection',
                'Ad-free sharing',
                '2TB cloud storage',
                '20GB file size',
                'Set pasword on links',
                'Access control',
                'Online Document Editing'
            ]
        },
        {
            type:'Business',
            price: '$19/mo +VAT',
            button:'Upgrade to Business',
            offers:[
                'All Pro Features and 2TB',
                'Transfer uo to 200GB files',
                'AUto saving of file version',
                'Recieve file inbx',
                'Profile Page and Personalization',
                'Convert docs to PDF',
                'Convert Videos to MP4'
            ]
        }
    ]
  return (
    <div className={styles.plans}>
        {
            plans.map((item, i)=>{
                return <div key={i} className={styles.plan}>
                    <h2>{item.type}</h2>
                    <h3>{item.price}</h3>
                    <ul>
                        {
                            item.offers.map((offer, i)=>{
                                return <li key={i}>{offer}</li>
                            })
                        }
                    </ul>
                    <button>{item.button}</button>
                </div>
            })
        }
    </div>
  )
}

export default Plans